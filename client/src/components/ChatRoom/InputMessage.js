function InputMessage() {
  return (
    <form className="flex w-full gap-4 items-center mt-6 px-4">
      <input type="text" id="message" name="message" className="w-11/12 bg-slate-600 h-16 text-2xl px-5 rounded-full" placeholder="Type your message here" />
      <button className="h-20 w-20 mx-auto bg-slate-900 rounded-full flex items-center justify-center hover:bg-slate-600 cursor-pointer">
        <img src="/icon/send.png" alt="send-icon" className="h-14 p-1" />
      </button>
    </form>
  );
}

export default InputMessage;