export const EnvironmentVariables = {
    baseUrl: process.env.EXPO_PUBLIC_API_URL,
    //TODO: MOVE TO SECRETS
    fireBaseApiKey: process.env.FIREBASE_API_KEY,
    isDevMode: process.env.NODE_ENV === "development"
}