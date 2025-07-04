import { useAppSelector } from "@/store/hooks";

const HomeCard = () => {
  const username = useAppSelector((state) => state.user.username);

  return (
    <div className="p-6 bg-gradient-to-r from-purple-500 to-purple-700 rounded-lg shadow-lg text-white">
      <div className="flex flex-col items-start gap-3">
        <h3 className="md:text-3xl text-xl font-bold">Hello, {username}</h3>
        <div className="flex flex-col">
          <p className="font-medium md:text-base text-sm">
            Welcome to Ceemes (Content Management System)! <br /> Here you can manage your content easily.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;
