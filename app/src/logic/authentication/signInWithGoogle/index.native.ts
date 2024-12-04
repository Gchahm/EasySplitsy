import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ISignInWithGoogleResult } from '@/logic/authentication/auth.types';
import { getAuth, GoogleAuthProvider, signInWithCredential } from '@firebase/auth';
import { EnvironmentVariables } from '@/logic/utils/EnvironmentVariables';

GoogleSignin.configure({
  webClientId: EnvironmentVariables.googleWebClientId
});

export default async function signInWithGoogle(
  googleAuthProvider: GoogleAuthProvider,
  rememberMe?: boolean
): Promise<ISignInWithGoogleResult> {
  try {
    console.log(EnvironmentVariables.googleWebClientId);

    const auth = getAuth();
    console.log('signInWithGoogle mobile');
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const result = await GoogleSignin.signIn();

    console.log('signInWithGoogle mobile signed in', result.data, result.type);
    if (!result.data?.idToken) {
      throw new Error('Google sign-in failed');
    }
    const { idToken } = result.data;

    const credential = GoogleAuthProvider.credential(idToken);
    const token = credential.accessToken;
    console.log('signInWithGoogle mobile signing in');
    const { user } = await signInWithCredential(auth, credential);

    console.log('signInWithGoogle mobile success');
    return { token, user };
  } catch (error: any) {
    console.log('signInWithGoogle mobile error', error, error.code, error.message);
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    throw new Error(
      `Error: ${errorCode} ${errorMessage} ${email} ${credential}`
    );

    // ...
  }
}