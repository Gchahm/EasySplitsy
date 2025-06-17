import * as functions from 'firebase-functions';
import { askOpenAI } from './openAI';
import OpenAI from 'openai';
import cors from 'cors';

const corsHandler = cors({ origin: true });

// Define the shape of the expected request body
interface ImageDataRequest {
  imageData: string;
  filename?: string;
  contentType?: string;
}

interface ReceiptItem {
  name: string;
  price: number;
}

interface Receipt {
  items: ReceiptItem[];
  subtotal: number;
  tax: number;
  total: number;
  date: string;
  merchant: string;
}

export const processBase64Image = functions
  .runWith({ secrets: ["OpenAI"] })
  .https.onRequest(async (req, res) => {
    // Handle CORS
    return corsHandler(req, res, async () => {
      // We expect a POST request with a JSON body
      if (req.method !== 'POST') {
        res.status(405).send('Method Not Allowed');
        return;
      }

      const requestBody = req.body as ImageDataRequest;

      // Check if the expected 'imageData' field exists
      if (!requestBody || typeof requestBody.imageData !== 'string' || !requestBody.imageData) {
        res.status(400).json({ error: 'Bad Request: Missing or invalid imageData in body.' });
        return;
      }

      const base64String = requestBody.imageData;

      try {
        // Validate base64 string
        if (!/^[A-Za-z0-9+/=]+$/.test(base64String)) {
          res.status(400).json({ error: 'Invalid base64 string format' });
          return;
        }

        console.log(`Received Base64 image data. Length: ${base64String.length} characters.`);
        if (requestBody.filename) {
          console.log(`Filename: ${requestBody.filename}`);
        }
        if (requestBody.contentType) {
          console.log(`Content Type: ${requestBody.contentType}`);
        }

        // Use the secret from environment
        const openai = new OpenAI({ apiKey: process.env.OpenAI });
        const result = await askOpenAI(openai, base64String);
        
        // Parse the JSON string from the result
        try {
          // Remove the markdown code block markers and parse the JSON
          const jsonStr = result.replace(/```json\n|\n```/g, '');
          const parsedReceipt = JSON.parse(jsonStr) as Receipt;
          
          res.status(200).json({ 
            result: parsedReceipt 
          });
        } catch (parseError) {
          console.error("Error parsing OpenAI response:", parseError);
          res.status(500).json({ 
            error: 'Error parsing receipt data',
            details: parseError instanceof Error ? parseError.message : 'Unknown parsing error'
          });
        }
        return;

      } catch (error) {
        console.error("Error processing Base64 data:", error);
        res.status(500).json({ 
          error: 'Internal Server Error: Could not process image data.',
          details: error instanceof Error ? error.message : 'Unknown error'
        });
        return;
      }
    });
  });
  