import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { ISignInWithGoogleResult } from '@/logic/authentication/auth.types';
import auth from '@react-native-firebase/auth';

import { EnvironmentVariables } from '@/logic/utils/EnvironmentVariables';

GoogleSignin.configure({
  webClientId: EnvironmentVariables.googleWebClientId
});

export default async function signInWithGoogle(
  rememberMe?: boolean
): Promise<ISignInWithGoogleResult> {
  try {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Get the users ID token
    const signInResult = await GoogleSignin.signIn();
    console.log('signInWithGoogle mobile signInResult', signInResult);

    // Try the new style of google-sign in result, from v13+ of that module
    const idToken = signInResult.data?.idToken;
    // if (!idToken) {
    //   // if you are using older versions of google-signin, try old style result
    //   idToken = signInResult.idToken;
    // }
    if (!idToken) {
      throw new Error('No ID token found');
    }

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (error: any) {
    console.log('signInWithGoogle mobile error', error, error.code, error.message);
    throw new Error(
      `Error: ${error.code} ${error.message}`
    );
  }
}