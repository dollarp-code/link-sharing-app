import Image from 'next/image';
import Navbar from '../components/nav';

const Customize = () => {
  return (
    <main className="bg-[#FAFAFA]">
      <Navbar />
      <section className="p-4">
        <div className="p-6 flex flex-col gap-10 bg-white">
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold text-[#333]">
              Customize your links
            </h3>
            <p className="text-base font-normal text-[#737373]">
              Add/edit/remove links below and then share all your profiles with
              the world!
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <button className="px-[27px] py-[11px] border border-[#633CFF] rounded-lg text-center text-base font-semibold text-[#633CFF]">
              + Add new link
            </button>
            <div className="px-5 py-11 rounded-xl bg-[#FAFAFA]">
              <div className="flex flex-col items-center gap-6">
                <Image src={'/group.png'} alt="group" width={125} height={80} />
                <h3 className="text-2xl font-bold text-center text-[#333]">
                  Let’s get you started
                </h3>
                <p className="text-base font-normal text-center text-[#737373]">
                  Use the “Add new link” button to get started. Once you have
                  more than one link, you can reorder and edit them. We’re here
                  to help you share your profiles with everyone!
                </p>
              </div>
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
export default Customize;
