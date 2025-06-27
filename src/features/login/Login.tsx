import Logo from "@/components/common/logo";
import LoginForm from "./components/LoginForm";

const Login = () => {
  return (
    <div className="bg-white p-6 rounded-md">
      <div className="space-y-6">
        <Logo />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
