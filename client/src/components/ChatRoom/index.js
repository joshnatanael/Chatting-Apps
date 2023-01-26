import Chat from "./Chat";
import InputMessage from "./InputMessage";

function ChatRoom() {
  return (
    <div className="w-8/12 bg-slate-700 h-screen">
      <div className="h-20 bg-slate-800 flex items-center p-5 gap-5">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile-photo" className="h-14"/>
        <div>
          <p className="text-white text-xl">John Doe</p>
          <p className="text-white text-md">Online</p>
        </div>
      </div>
      <div className="overflow-y-auto scroll-smooth p-2 h-4/5">
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