import { toast } from "react-toastify";
import dot from "../assets/Ellipse 22.png";

const Issues = ({ tickets, addTask }) => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full px-6">
      {tickets.map((ticket) => (
        <div
          key={ticket.id}
          className="border-4 border-white rounded-lg p-4 shadow-lg hover:shadow-xl cursor-pointer"
          onClick={() => {
            addTask(ticket);
            toast.success(`${ticket.title} added to Task Status`);
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center mb-2">
            <h3 className="text-lg font-bold text-[#001931]">{ticket.title}</h3>
            <span className="bg-[#B9F8CF] p-2 rounded-full flex justify-center items-center gap-2"><img src={dot} alt="" />{ticket.status}</span>
          </div>
          <p className="text-base text-[#627382]">{ticket.description}</p>
          <div className="flex justify-between text-sm text-[#627382] mt-2">
            <div className="flex justify-center items-center gap-4 font-medium">
              <span>{ticket.id}</span>
              <span className="text-red-500">{ticket.priority} PRIORITY</span>
            </div>
            <div className="flex gap-4">
              <span className="font-medium">{ticket.customer}</span>
              <span className="flex gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"> <path fill="currentColor" d="M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z"/>
                </svg>{ticket.createdAt}
                </span>
                </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Issues;