import { toast } from "react-toastify";

const TaskStatus = ({ tasks, completeTask }) => {
  return (
    <section className="w-full px-4">
      <h2 className="text-2xl font-bold text-[#34485A] mb-4">Task Status</h2>
      {tasks.length === 0 && <p className="text-base font-medium text-[#627382]">Select a ticket to add to Task Status</p>}
      {tasks.map((task) => (
        <div
          key={task.id}
          className="border-4 border-white rounded-lg p-4 shadow-lg hover:shadow-xl mb-3 flex flex-col gap-2"
        >           
          <h3 className="font-semibold">{task.title}</h3>
          <button
            onClick={() => {
              completeTask(task);
              toast.info(`${task.title} marked as Complete`);
            }}
            className="bg-green-500 text-white px-3 py-1 rounded w-full cursor-pointer"
          >
            Complete
          </button>
        </div>
      ))}
    </section>
  );
};

export default TaskStatus;