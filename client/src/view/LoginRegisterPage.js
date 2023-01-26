import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

function LoginRegisterPage({ type }) {

  let image = "https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80";
  if (type === "register") {
    image = "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1738&q=80";
  }

  return (
    <div style={{ backgroundImage: `url('${image}')` }} className="bg-cover bg-center bg-no-repeat min-h-screen">

      {type === "login" ?
        <LoginForm/>
        :
        <RegisterForm/>
      }

    </div>
  );
}

export default LoginRegisterPage;