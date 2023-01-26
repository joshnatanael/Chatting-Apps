import Chat from "./Chat";
import InputMessage from "./InputMessage";

function ChatRoom() {
  return (
    <div className="w-8/12 bg-slate-700">
      <div className="h-24 bg-slate-800 flex items-center p-5 gap-5">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile-photo" className="h-16"/>
        <div>
          <p className="text-white text-2xl">John Doe</p>
          <p className="text-white text-lg">Online</p>
        </div>
      </div>
      <div className="h-[80vh] overflow-y-auto scroll-smooth p-2">
        <Chat type="start" />
        <Chat type="end" />
        <Chat type="start" />
        <Chat type="end" />
        <Chat type="start" />
        <Chat type="end" />
        <Chat type="start" />
        <Chat type="end" />
        <Chat type="start" />
        <Chat type="end" />
        <Chat type="start" />
        <Chat type="end" />
        <Chat type="start" />
        <Chat type="end" />
      </div>

      <InputMessage />
      
    </div>
  );
}

export default ChatRoom;