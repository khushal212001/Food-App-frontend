const Footer = () => {
  return (
    <div className="bg-black py-5 border-t-2 border-t-amber-400">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="text-3xl text-amber-400 font-bold tracking-tight">
        BiteSquad
        </span>
        <span className="text-amber-400 font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
