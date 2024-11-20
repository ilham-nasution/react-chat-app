import { useState } from "react";
import ChatMessage from "./ChatMessage";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { firestore, timestamp } from "../firebase";
import { collection, orderBy, query, addDoc } from "firebase/firestore";

export default function ChatRoom({ user }: any) {
  const messagesRef = collection(firestore, "messages");
  const fbQuery = query(messagesRef, orderBy("createdAt", "desc"));
  const [messages] = useCollectionData(fbQuery, { idField: "id" } as any);
  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e: any) => {
    e.preventDefault();
    const { uid, photoURL } = user;
    await addDoc(messagesRef, {
      text: formValue,
      createdAt: timestamp,
      uid,
      photoURL,
    });
    setFormValue("");
  };

  return (
    <>
      <div className="flex flex-col-reverse gap-6 p-4 overflow-auto h-[620px] bg-stone-50">
        {messages &&
          messages.map((message) => (
            <ChatMessage key={message.id} message={message} user={user} />
          ))}
      </div>
      <form className="shadow-lg flex bg-stone-50" onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Type a message"
          className="flex-1 rounded-l-lg"
        />
        <button
          className="px-4 py-3 bg-stone-500 text-white rounded-r-lg cursor-pointer"
          type="submit"
          disabled={!formValue}
        >
          Send
        </button>
      </form>
    </>
  );
}
