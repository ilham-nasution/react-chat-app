import { useAuthState } from "react-firebase-hooks/auth";
import Header from "./Header";
import ChatRoom from "./ChatRoom";
import SignIn from "./SignIn";
import { auth } from "../firebase";

const Content = () => {
  const [user] = useAuthState(auth);

  return (
    <>
      <Header user={user} />
      {user ? <ChatRoom user={user} /> : <SignIn />}
    </>
  );
};

export default Content;
