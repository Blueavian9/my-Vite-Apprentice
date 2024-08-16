export default function Navbar() {
  return (
    <div className="flex bg-white w-[80%] h-[70px] rounded-lg sticky top-[80px] shadow-md py-2 z-40">
      <div class="w-12 h-12 ml-10 rounded-[50px] bg-[#ffef5c] pt-3 mt-1 text-center font-semibold">
        CA
      </div>
      <div class="flex self-center gap-12 ml-12">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Github</a>
        <a href="#">Projects</a>
        <a href="#">Linkedin</a>
        <a href="#">Contact</a>
      </div>
      <div className="bg-[#ffef5c] self-center font-semibold px-6 py-2 pt3 h-12 absolute right-8 rounded-lg">
        Hire Me
      </div>
    </div>
  );
}
