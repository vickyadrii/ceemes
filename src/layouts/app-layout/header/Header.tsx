import { useEffect, useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { removeAccessToken } from "@/lib/authStorage";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import Logout from "./Logout";

const Header = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>("");

  const handleLogout = () => {
    localStorage.removeItem("user-data");
    removeAccessToken();
    setUsername("");
    toast.success("Logged out successfully!");
    navigate("/login");
  };

  useEffect(() => {
    const storedUsername = localStorage.getItem("user-data");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="fixed w-full top-0 left-0 z-0">
      <div className="w-full px-10 p-2 flex justify-end bg-white border-b">
        <Popover>
          <PopoverTrigger>
            <div className="px-4 py-2.5 flex items-center gap-2 hover:bg-gray-100">
              <div className="flex flex-col items-start">
                <p className="text-sm font-extrabold">Hello, welcome back!</p>
                <span className="text-xs text-gray-500 font-semibold">{username}</span>
              </div>
              <img src="/assets/icons/ic_arrow-top.svg" alt="ic_arrow-top" className="rotate-180" />
            </div>
          </PopoverTrigger>
          <PopoverContent align="end" className="flex w-fit p-2">
            <Logout onLogout={handleLogout} />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
