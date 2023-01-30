import { useState } from 'react';
import { useDispatch } from 'react-redux';

function InputMessage() {

  const dispatch = useDispatch();
  const [inputMessage, setInputMessage] = useState({
    message: ""
  });

  const onChangeHandler = (e) => {
    const updatedInputMessage = { ...inputMessage, [e.target.name]: e.target.value };
    setInputMessage(updatedInputMessage);
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    // dispatch()
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex w-full gap-4 items-center mt-2 px-4">
      <input
        type="text"
        value={inputMessage.message}
        onChange={onChangeHandler}
        id="message"
        name="message"
        className="w-11/12 bg-slate-600 h-12 text-lg px-5 rounded-full text-white"
        placeholder="Type your message here" />
      <button className="h-12 w-12 mx-auto bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer">
        <img src="/icon/send.png" alt="send-icon" className="h-10 p-2" />
      </button>
    </form>
  );
}

export default InputMessage;