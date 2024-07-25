import Image from 'next/image';
import Navbar from '../components/nav';

const Profile = () => {
  return (
    <main className="bg-[#FAFAFA]">
      <Navbar />
      <section className="p-4">
        <div className="p-6 flex flex-col gap-10 bg-white">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#333]">Profile Details</h3>
            <p className="text-base font-normal text-[#737373]">
              Add your details to create a personal touch to your profile
            </p>
          </div>

          <div className="p-5 flex flex-col gap-3 rounded-xl bg-[#FAFAFA]">
            <h3 className="text-base font-normal text-[#737373]">
              Profile picture
            </h3>
            <div className="w-[255px] h-[253px] flex flex-col gap-6">
              <div className="flex flex-col items-center justify-center w-[193px] h-[193px] rounded-xl bg-[#EFEBFF]">
                <label htmlFor="doc" className="cursor-pointer">
                  <div className="flex flex-col items-center gap-3">
                    <Image
                      src={'/imgfile.png'}
                      alt="img"
                      width={33}
                      height={28}
                    />
                    <span className="text-base font-semibold text-[#633CFF]">
                      + Upload Image
                    </span>
                  </div>
                  <input
                    type="file"
                    id="doc"
                    accept="png, jpg"
                    className="hidden"
                  />
                </label>
              </div>
              <h5 className="text-xs font-normal text-[#737373]">
                Image must be below 1024x1024px. Use PNG or JPG format.
              </h5>
            </div>
          </div>
          <form
            action="#"
            className="p-5 rounded-xl bg-[#FAFAFA] flex flex-col gap-3"
          >
            <div className="flex flex-col gap-1">
              <label
                htmlFor="first"
                className="text-xs font-normal text-[#333]"
              >
                First name*
              </label>
              <input
                type="text"
                id="first"
                required
                className="px-4 py-3 rounded-lg bg-white border border-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="last" className="text-xs font-normal text-[#333]">
                Last name*
              </label>
              <input
                type="text"
                id="last"
                required
                className="px-4 py-3 rounded-lg bg-white border border-[#D9D9D9]"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                htmlFor="first"
                className="text-xs font-normal text-[#333]"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="px-4 py-3 rounded-lg bg-white border border-[#D9D9D9]"
              />
            </div>
          </form>
          <div className="p-4  border-t">
            <button
              type="submit"
              className="px-[27px] py-[11px] bg-[#633CFF] rounded-lg hover:opacity-[25%] text-white w-full"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Profile;
