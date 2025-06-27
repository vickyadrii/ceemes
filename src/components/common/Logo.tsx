const Logo = () => {
  return (
    <div className="p-4 flex items-center gap-2">
      <img src="/logo.webp" alt="Ceemes Logo" className="w-10 h-10 object-cover" />
      <h3 className="text-purple-500 md:text-2xl text-xl font-bold">Ceemes</h3>
    </div>
  );
};

export default Logo;
