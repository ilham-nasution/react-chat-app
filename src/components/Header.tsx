import SignOut from "./SignOut";

const Header = ({ user }: any) => {
  return (
    <header className="shadow-lg px-4 bg-white">
      <div className="flex justify-between items-center">
        <p className="font-bold">Chat App</p>
        <div>{user && <SignOut />}</div>
      </div>
    </header>
  );
};

export default Header;
