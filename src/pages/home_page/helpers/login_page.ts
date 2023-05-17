// import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
// import { appAuth } from "../../../firebase/firebase";

const tryFirebaseLogin = async (
    email: string | undefined,
    password: string | undefined
): Promise<boolean> => {
    if (!email || !password) {
        return false;
    }

    // await createUserWithEmailAndPassword(appAuth, email!, password!);

    // console.log(
    await signInWithEmailAndPassword(appAuth, email!, password!);
    // );

    return true;
};

export default tryFirebaseLogin;
