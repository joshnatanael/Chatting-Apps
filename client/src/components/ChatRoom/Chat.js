function Chat({type}) {
  return (
    <div className={`chat chat-${type} mx-4`}>
      <div className="chat-image avatar">
        <div className="w-14 rounded-full">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" />
        </div>
      </div>
      <div className="chat-header text-white text-lg">
        User
      </div>
      <div className="chat-bubble text-2xl bg-slate-500">You were the Chosen One!</div>
      <div className="chat-footer opacity-50 text-white">
        <time className="text-sm ml-4 opacity-70">12:45</time>
      </div>
    </div>
  );
}

export default Chat;