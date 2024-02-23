import { auth, provider } from "../config/firebase"; 
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router";

export const Login = () => {
    const navigate = useNavigate();

    const signInWithGoogle = async () => {
        const resulat = await signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
        navigate('/');
    }

    return (
        <div>
            <h1>Sign in with Google to Continue</h1>
            <button onClick={signInWithGoogle} > Sign in with Google </button>
        </div>
    );
}