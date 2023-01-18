function App() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/5 border-r-2 border-black bg-slate-800">

        <div className="flex items-center bg-slate-700 p-4">
          <img src="/icon/search.png" alt="search-icon" className="w-6 h-6" />
          <input type="text" id="search" name="search" className="w-full bg-slate-700 h-6 text-xl px-5" placeholder="Search contact" />
        </div>

        <div className="flex items-center gap-5 border-y-2 border-gray-600 py-6 px-3">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile photo" className="w-16 h-16" />
          <div>
            <p className="text-white text-xl font-semibold">John Doe</p>
            <p className="text-white text-xl">Message ......</p>
          </div>
        </div>
        <div className="flex items-center gap-5 border-y-2 border-gray-600 py-6 px-3">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile photo" className="w-16 h-16" />
          <div>
            <p className="text-white text-xl font-semibold">John Doe</p>
            <p className="text-white text-xl">Message ......</p>
          </div>
        </div>
        <div className="flex items-center gap-5 border-y-2 border-gray-600 py-6 px-3">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile photo" className="w-16 h-16" />
          <div>
            <p className="text-white text-xl font-semibold">John Doe</p>
            <p className="text-white text-xl">Message ......</p>
          </div>
        </div>


      </div>
      <div className="w-4/5 bg-slate-700 p-10">
        <div className="chat chat-start">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="chat-header text-white text-lg">
            Obi-Wan Kenobi
          </div>
          <div className="chat-bubble text-2xl bg-slate-500">You were the Chosen One!</div>
          <div className="chat-footer opacity-50 text-white">
            <time className="text-sm ml-4 opacity-70">12:45</time>
          </div>
        </div>
        <div className="chat chat-end">
          <div className="chat-image avatar">
            <div className="w-14 rounded-full">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="chat-header text-white text-lg">
            Anakin
          </div>
          <div className="chat-bubble text-2xl bg-slate-400">I hate you!</div>
          <div className="chat-footer opacity-50 text-white">
            <time className="text-sm ml-4 opacity-70">12:46</time>
          </div>
        </div>
        <div className="flex w-full gap-4 items-center y-0">
          <input type="text" id="message" name="message" className="w-11/12 bg-slate-600 h-16 text-xl px-5 rounded-full" placeholder="Type your message here" />
          <div className="h-20 w-20 mx-auto bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer">
            <img src="/icon/send.png" alt="send-icon" className="h-14 p-1"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
