import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex md:items-center md:justify-center">
      <div className="flex items-center gap-2">
        <Image
          src="/solar_link-circle-bold.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h2 className="text-3xl text-[#333] font-extrabold">devlinks</h2>
      </div>
    </header>
  );
};
export default Header;
