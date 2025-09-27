const Hero = ({ inProgressCount, resolvedCount }) => {
  return (
    <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 sm:px-6 md:px-8 mb-10 min-h-[30vh] items-stretch">
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-xl p-6">
        <h2 className="text-lg font-semibold">In-Progress</h2>
        <p className="text-4xl font-bold">{inProgressCount}</p>
      </div>
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl p-6">
        <h2 className="text-lg font-semibold">Resolved</h2>
        <p className="text-4xl font-bold">{resolvedCount}</p>
      </div>
    </section>
  );
};

export default Hero;