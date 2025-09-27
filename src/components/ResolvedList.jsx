const ResolvedList = ({ resolved }) => {
  return (
    <section className="w-full mt-6 px-4 mb-10">
      <h2 className="text-2xl font-bold text-[#34485A] mb-4">Resolved Tickets</h2>
      {resolved.length === 0 && (
        <p className="text-base font-medium text-[#627382]">No resolved tickets yet</p>
      )}
      {resolved.map((task) => (
        <div
          key={task.id}
          className="bg-[#E0E7FF] rounded-lg p-4 shadow-lg mb-3 flex justify-center items-center gap-2 text-sm text-[#627382] font-semibold"
        >
          <span>{task.id}</span>
          <h3>{task.title}</h3>
        </div>
      ))}
    </section>
  );
};

export default ResolvedList;