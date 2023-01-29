import Card from "./Card";

function ContactMessage() {
  return (
    <div className="w-full mt-5">
      <div className="flex items-center bg-slate-700 m-1 rounded-lg gap-2 py-1">
        <div className="w-2/12">
          <img src="/icon/search.png" alt="search-icon" className="w-6 h-6 mx-auto" />
        </div>
        <input type="text" id="search" name="search" className="w-full bg-slate-700 p-4 h-6 text-lg" placeholder="Search contact" />
      </div>

      <section className="overflow-y-auto h-[90vh]">
        <Card />
        <Card />
        
      </section>

    </div>
  );
}

export default ContactMessage;