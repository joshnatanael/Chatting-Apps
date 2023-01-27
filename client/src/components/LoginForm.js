import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from "react-router-dom";
import { login } from '../stores/action/actionCreator';

function LoginForm() {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })
  const [hidePassword, setHidePassword] = useState("password");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandler = (e) => {
    const updatedLoginData = { ...loginData, [e.target.name]: e.target.value };
    setLoginData(updatedLoginData);
  }
  const hidePasswordHandler = _ => {
    if (hidePassword === "password") {
      return setHidePassword("text");
    }
    setHidePassword("password");
  }
  const onSubmitHandler = (e)=>{
    e.preventDefault();
    dispatch(login(loginData))
      .then(res=>{
        if(res === "ok"){
          navigate('/');
        }
      })
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-lg">
        <form onSubmit={onSubmitHandler} className="mt-4 mb-0 space-y-4 rounded-lg p-8 shadow-2xl bg-slate-800">
          <img src="https://cdn-icons-png.flaticon.com/512/9482/9482562.png" alt="chattingApps icon" className="w-16 mx-auto" />
          <h1 className="font-bold text-2xl text-white text-center">Chatting Apps</h1>
          <p className="text-lg font-medium text-white pt-6">Sign in to your account</p>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-white">Email</label>
            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                name="email"
                onChange={onChangeHandler}
                value={loginData.email}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-slate-600 text-white"
                placeholder="Enter email" />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-white">Password</label>
            <div className="relative mt-1">
              <input
                type={hidePassword}
                id="password"
                name="password"
                onChange={onChangeHandler}
                value={loginData.password}
                className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm bg-slate-600 text-white"
                placeholder="Enter password" />
              <span className="absolute inset-y-0 right-4 inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={hidePasswordHandler}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
            </div>
          </div>
          <button type="submit" className="block w-full rounded-lg bg-sky-200 px-5 py-3 text-sm font-medium">
            Sign in
          </button>
          <p className="text-white text-center text-sm">
            No account?
            <a className="px-1"></a>
            <Link to="/register" className="underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;