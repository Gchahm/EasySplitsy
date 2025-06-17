import OpenAI from "openai";

// You may want to pass your API key here, or use process.env if using secrets

export async function askOpenAI(openai: OpenAI, base64Image: string): Promise<string> {
  const response = await openai.responses.create({
    model: "gpt-4.1-mini",
    input: [{
        role: "user",
        content: [
            { type: "input_text", text: "Parse this receipt image and return a JSON object with the following structure: { items: [{ name: string, quantity: number, price: number }], subtotal: number, tax: number, total: number, date: string, merchant: string }. Extract all items with their prices, calculate subtotal, tax, and total. Include the date and merchant name if visible. Return ONLY the JSON object, no other text." },
            {
              type: "input_image",
              detail: "high",
              image_url: `data:image/jpeg;base64,${base64Image}`,
          },
        ],
    }],
  });

  return response.output_text;
}