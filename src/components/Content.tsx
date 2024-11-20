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
      <div className="h-[700px] bg-stone-50">
        {user ? <ChatRoom user={user} /> : <SignIn />}
      </div>
    </>
  );
};

export default Content;
