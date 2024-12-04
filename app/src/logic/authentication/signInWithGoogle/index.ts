import {
  browserLocalPersistence,
  browserSessionPersistence,
  getAuth,
  GoogleAuthProvider,
  signInWithPopup
} from '@firebase/auth';
import { ISignInWithGoogleResult } from '@/logic/authentication/auth.types';


export default async function signInWithGoogle(
  rememberMe?: boolean
): Promise<ISignInWithGoogleResult> {
  const googleAuthProvider = new GoogleAuthProvider();
  try {
    const auth = getAuth();
    if (rememberMe) {
      await auth.setPersistence(browserLocalPersistence);
    } else {
      await auth.setPersistence(browserSessionPersistence);
    }
    console.log('signInWithGoogle base');
    const { user } = await signInWithPopup(auth, googleAuthProvider);
    // // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // The signed-in user info.
    return { user };

    // IdP data available using getAdditionalUserInfo(result)
    // ...
  } catch (error: any) {
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