import { useLocation } from "react-router";

const Dynamic = () => {
  const location = useLocation();
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">You are at: {location.pathname}</h1>
      <p>This is a dynamically generated page.</p>
    </div>
  );
};

export default Dynamic;