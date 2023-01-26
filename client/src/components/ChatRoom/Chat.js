function Chat({type}) {
  return (
    <div className={`chat chat-${type} mx-4`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
        </div>
      </div>
      <div className="chat-header text-white text-md">
        User
      </div>
      <div className="chat-bubble text-md bg-slate-500">You were the Chosen One!</div>
      <div className="chat-footer opacity-50 text-white">
        <time className="text-sm ml-2 opacity-70">12:45</time>
      </div>
    </div>
  );
}

export default Chat;