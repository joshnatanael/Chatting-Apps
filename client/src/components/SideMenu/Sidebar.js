function Sidebar() {
  return (
    <div className="w-24 flex-col flex items-center pt-12 pb-8 border-r border-slate-600 justify-between">
      <div>
        <img src="/icon/message.png" className="w-12 bg-slate-700 rounded-lg p-2 mx-auto mb-14" alt="chat icon" />
        {/* <p className="text-white p-2 text-center mb-14 font-bold">Chats</p> */}
        <img src="/icon/contact.png" className="w-12 bg-slate-700 rounded-lg p-2 mx-auto" alt="contact icon" />
        {/* <p className="text-white p-2 text-center mb-14 font-bold">Contacts</p> */}
      </div>
      <div>
        <img src="/icon/logout.png" className="w-12 bg-slate-700 rounded-lg p-2 mx-auto" alt="logout icon" />
        {/* <p className="text-red-400 p-2 text-center font-bold">Logout</p> */}
      </div>
    </div>
  );
}

export default Sidebar;