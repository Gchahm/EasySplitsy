import { ReceiptResponse } from '../../models/receipt';
import { EnvironmentVariables } from '../../utils/EnvironmentVariables';

interface ImageDataRequest {
  imageData: string;
  filename?: string;
  contentType?: string;
}

export async function translateImage(uri: string): Promise<ReceiptResponse> {
  const baseUrl = EnvironmentVariables.isDevMode 
    ? 'http://127.0.0.1:5001/ez-split-434212/us-central1'
    : 'https://us-central1-ez-split-434212.cloudfunctions.net';
  const url = `${baseUrl}/processReceiptImage`;
  
  // Remove the data URL prefix if it exists
  const base64Data = uri.includes('base64,') ? uri.split('base64,')[1] : uri;
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        imageData: base64Data,
        contentType: 'image/jpeg' // or 'image/png' depending on your image type
      } as ImageDataRequest)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    const data = await response.json() as ReceiptResponse;
    return data;
  } catch (error) {
    console.error('Error translating image:', error);
    throw error;
  }
}