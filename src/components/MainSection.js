
const MainSection = () => {
  return (
    <div className="absolute flex flex-col justify-center items-center h-screen text-center p-16">
      <h1 className="text-4xl font-bold text-black mb-4">
        We've really sped up our workflow
      </h1>
      <div className="flex flex-col gap-4 text-gray-400 mb-8">
        <p className="font-bold">We've just released a new update!</p>
        <p className="text-black">
          Check out the all-new dashboard view. Pages now load faster. You can try us for free for 30 days.
        </p>
      </div>
      <p className="text-gray-500 mb-8">Join 40,000+ companies already growing</p>
      <div className="flex justify-center items-center w-full">
        <button className="mx-4 py-3 px-8 rounded bg-purple-700 text-white transition-colors duration-200 hover:bg-purple-800">
          Start Learning Today
        </button>
        <button className="mx-4 py-3 px-8 rounded bg-teal-400 text-white transition-colors duration-200 hover:bg-teal-500">
          Join now
        </button>
      </div>
    </div>
  );
};

export default MainSection;
