function Card() {
  return (
    <div>
      <div className="flex items-center gap-5 py-4 px-3 hover:bg-slate-700 cursor-pointer">
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile photo" className="w-14 h-14" />
        <div>
          <p className="text-white text-lg font-semibold">John Doe</p>
          <p className="text-white text-md">Message ......</p>
        </div>
      </div>
      <div className="border border-gray-600 mx-5"></div>
    </div>
  );
}

export default Card;