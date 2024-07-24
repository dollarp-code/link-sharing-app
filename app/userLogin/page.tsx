import Link from 'next/link';
import Header from '../components/header';
import Image from 'next/image';

const Login = () => {
  return (
    <main className="px-6 py-4 flex min-h-screen flex-col md:items-center md:justify-center mx-auto w-screen bg-white">
      <Header />
      <section className="mt-16">
        <div className="w-[100%] mb-9">
          <h3 className="text-2xl font-bold text-[#333] mb-2">Login</h3>
          <p className="text-base font-normal">
            Add your details below to get back into the app
          </p>
        </div>
        <form action="#" className="flex flex-col gap-7">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-xs font-normal text-[#333]"
            >
              Email address
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                className=" pl-9 pr-4 py-3 gap-3 border border-[#D9D9D9] rounded-lg w-full placeholder:text-base placeholder:font-normal placeholder:text-[#333] placeholder:opacity-[50%]"
                placeholder="e.g. alex@email.com"
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <Image
                  src="/Envelope.png"
                  alt="envelope"
                  width={13}
                  height={10}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="block text-xs font-normal text-[#333]"
            >
              password
            </label>
            <div className="relative">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                className=" pl-9 pr-4 py-3 gap-3 border border-[#D9D9D9] rounded-lg w-full placeholder:text-base placeholder:font-normal placeholder:text-[#333] placeholder:opacity-[50%]"
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <Image src="/lock.png" alt="lock" width={13} height={10} />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="block px-7 py-3 bg-[#633CFF] text-white rounded-lg"
          >
            Login
          </button>
          <div className="text-center text-base font-normal text-[#737373]">
            <h5>Don&apos;t have an account?</h5>
            <Link href={'/userSignup'} className="text-[#633CFF]">
              Create account
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};
export default Login;
