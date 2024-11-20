export default function ChatMessage({ message, user }) {
  const { text, uid, photoURL } = message;
  const isSender = uid === user.uid;

  return (
    <div className={`flex items-center gap-4 ${isSender && "justify-end"}`}>
      <img
        src={
          photoURL ||
          "https://icon-library.com/images/profile-png-icon/profile-png-icon-2.jpg"
        }
        alt="profile"
        className={`w-10 rounded-full m-0 ${isSender && "order-2"}`}
      />
      <p className="m-0 border px-2 py-1 border-stone-700 rounded-lg">{text}</p>
    </div>
  );
}
