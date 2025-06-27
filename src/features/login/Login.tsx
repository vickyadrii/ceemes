import Logo from "@/components/common/Logo";
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
