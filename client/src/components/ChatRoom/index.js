import Chat from "./Chat";
import InputMessage from "./InputMessage";

function ChatRoom() {

  // const messages = ["start", "end", "start", "end", "start", "end", "start", "end", "start", "end", "start", "end"];
  const messages = [];

  return (
    <div className="w-8/12 bg-slate-700 h-screen">
      <div className="h-20 bg-slate-800 flex items-center p-5 gap-5">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile-photo" className="h-14" />
        <div>
          <p className="text-white text-xl">John Doe</p>
          <p className="text-white text-md">Online</p>
        </div>
      </div>
      <div className="overflow-y-auto scroll-smooth p-2 h-4/5">
        {messages.length ? messages.map((el, idx) => <Chat type={el} key={idx} />)
          :
          <div className="flex items-center justify-center h-full">
            <p className="text-white bg-white rounded-full bg-opacity-30 px-4 py-0.5">No available chat</p>
          </div>
          }
      </div>

      <InputMessage />

    </div>
  );
}

export default ChatRoom;