export const EnvironmentVariables = {
  baseUrl: process.env.EXPO_PUBLIC_API_URL,
  fireBaseApiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  isDevMode: process.env.EXPO_PUBLIC_DEV_MODE === 'true',
  firebaseFunctionUrl: process.env.EXPO_PUBLIC_FIREBASE_FUNCTION_URL,
};
