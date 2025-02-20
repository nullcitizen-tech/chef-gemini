import icon from "../assets/images/chef-gemini-icon.png";

function Header() {
  return (
    <header className="bg-amber-100 shadow-xl h-[6.2rem]">
      <nav className="flex justify-center items-center gap-2">
        <div className="w-20 h-20">
          <img src={icon} alt="chef-gemini-icon" />
        </div>
        <h1 className="text-2xl font-medium mt-[2rem]">Chef Gemini</h1>
      </nav>
    </header>
  );
}

export default Header;
