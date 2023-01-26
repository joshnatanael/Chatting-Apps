import ChatRoom from "../components/ChatRoom";
import ContactMessage from "../components/SideMenu/ContactMessage";
import Sidebar from "../components/SideMenu/Sidebar";

function HomePage() {
  return (
    <div className="flex min-h-screen">
      <div className="w-4/12 border-r-2 border-black bg-slate-800 flex">

        <Sidebar />
        <ContactMessage />


      </div>
      
      <ChatRoom />

    </div>
  )
}

export default HomePage;