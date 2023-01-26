function ContactMessage() {
  return (
    <div className="w-full mt-5">
      <div className="flex items-center bg-slate-700 p-4 m-1 rounded-lg">
        <img src="/icon/search.png" alt="search-icon" className="w-6 h-6" />
        <input type="text" id="search" name="search" className="w-full bg-slate-700 h-6 text-xl px-5" placeholder="Search contact" />
      </div>
      <div className="mx-5">
        <div className="flex items-center gap-5 border-b-2 border-gray-600 py-6 px-3">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile photo" className="w-16 h-16" />
          <div>
            <p className="text-white text-xl font-semibold">John Doe</p>
            <p className="text-white text-xl">Message ......</p>
          </div>
        </div>
        <div className="flex items-center gap-5 border-b-2 border-gray-600 py-6 px-3">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile photo" className="w-16 h-16" />
          <div>
            <p className="text-white text-xl font-semibold">John Doe</p>
            <p className="text-white text-xl">Message ......</p>
          </div>
        </div>
        <div className="flex items-center gap-5 border-b-2 border-gray-600 py-6 px-3">
          <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile photo" className="w-16 h-16" />
          <div>
            <p className="text-white text-xl font-semibold">John Doe</p>
            <p className="text-white text-xl">Message ......</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactMessage;