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
            <h3>Profile picture</h3>
            <div className="flex flex-col items-center gap-6">
              <Image src={'/group.png'} alt="group" width={125} height={80} />
              <h3 className="text-2xl font-bold text-center text-[#333]">
                Let’s get you started
              </h3>
              <p className="text-base font-normal text-center text-[#737373]">
                Use the “Add new link” button to get started. Once you have more
                than one link, you can reorder and edit them. We’re here to help
                you share your profiles with everyone!
              </p>
            </div>
          </div>

          <div className="p-4  border-t">
            <button className="px-[27px] py-[11px] bg-[#633CFF] rounded-lg hover:opacity-[25%] text-white w-full">
              Save
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Profile;
