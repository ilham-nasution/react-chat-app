import { signOut } from "../firebase";
import PrimaryButton from "./PrimaryButton";

export default function SignOut() {
  return <PrimaryButton label="Sign Out" onClick={signOut} />;
}
