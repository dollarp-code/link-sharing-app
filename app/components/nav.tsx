import Image from 'next/image';
const Navbar = () => {
  return (
    <nav className="py-4 pr-4 pl-6 bg-white">
      <div className="flex items-center justify-between">
        <div className="w-8">
          <Image
            src="/solar_link-circle-bold.png"
            alt="logo"
            width={32}
            height={32}
          />
        </div>
        <div className="flex">
          <div className="px-7 py-3 rounded-lg bg-[#EFEBFF] text-purple-600">
            <Image src="/Vector.png" alt="icon" width={20} height={20} />
          </div>
          <div className="px-7 py-3 rounded-lg">
            <Image src="/profile.png" alt="icon" width={20} height={20} />
          </div>
        </div>
        <div className="px-4 py-[11px] rounded-lg border border-[#633CFF]">
          <Image src="/eye.png" alt="icon" width={20} height={20} />
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
