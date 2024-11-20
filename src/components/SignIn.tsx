import { signInWithGoogle } from "../firebase";
import PrimaryButton from "./PrimaryButton";

export default function SignIn() {
  return (
    <div className="grid place-items-center h-4/6">
      <div className="text-center">
        <h3>Welcome, please sign in first.</h3>
        <PrimaryButton label="Sign In" onClick={signInWithGoogle} />
      </div>
    </div>
  );
}
