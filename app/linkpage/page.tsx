const LinkPage = () => {
  return (
    <main>
      <nav className="py-4 pl-6 pr-4">
        <div className="flex gap-4">
          <button className="px-[27px] py-[11px] w-[160px] rounded-lg border border-[#633CFF] text-[#633CFF] text-base">
            Back to Editor
          </button>
          <button className="px-[27px] py-[11px] w-[160px] rounded-lg border border-[#633CFF] text-white bg-[#633CFF] text-base">
            Share Link
          </button>
        </div>
      </nav>
    </main>
  );
};
export default LinkPage;
