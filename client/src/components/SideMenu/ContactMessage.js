import Card from "./Card";
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, fetchMessages } from "../../stores/action/actionCreator";
import Loader from "../Loader";

function ContactMessage() {

  const contacts = useSelector((state) => state.contacts);
  const messages = useSelector((state) => state.messages);
  const showData = useSelector((state) => state.showData);

  const dispatch = useDispatch();
  const [load, setLoad] = useState(true);
  const [data, setData] = useState(messages);

  useEffect(()=>{
    let dataToFetch = fetchMessages;
    if(showData === "contacts"){
      dataToFetch = fetchContacts;
    }
    dispatch(dataToFetch())
      .then(_=>{
        setLoad(false);
      })
  }, [])

  if(load){
    return <Loader />
  }
  return (
    <div className="w-full mt-5">
      <div className="flex items-center bg-slate-700 m-1 rounded-lg gap-2 py-1">
        <div className="w-2/12">
          <img src="/icon/search.png" alt="search-icon" className="w-6 h-6 mx-auto" />
        </div>
        <input type="text" id="search" name="search" className="w-full bg-slate-700 p-4 h-6 text-lg" placeholder="Search contact" />
      </div>

      <section className="overflow-y-auto h-[90vh]">
        {contacts.length ? contacts.map(el => <Card key={el} userDetail={el.User} />)
          :
          <div className="flex justify-center my-10">
            <p className="text-white bg-white rounded-full bg-opacity-30 px-4 py-0.5">No available contact</p>
          </div>
        };

      </section>

    </div>
  );
}

export default ContactMessage;