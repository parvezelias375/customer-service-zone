import React from 'react';

const getPriorityClasses = (priority) => {
  switch (priority) {
    case 'HIGH PRIORITY': return 'text-red-600 bg-red-100';
    case 'MEDIUM PRIORITY': return 'text-yellow-600 bg-yellow-100';
    case 'LOW PRIORITY': return 'text-green-600 bg-green-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

const getStatusClasses = (status) => {
  switch (status) {
    case 'Open': return 'bg-green-500 hover:bg-green-600';
    case 'In-Progress': return 'bg-yellow-500 hover:bg-yellow-600';
    default: return 'bg-gray-500 hover:bg-gray-600';
  }
};

const TicketCard = ({ ticket, onClick }) => {
  const { id, title, description, customer, priority, status, createdAt } = ticket;
  const priorityClasses = getPriorityClasses(priority);
  const statusClasses = getStatusClasses(status);

  return (
    <div 
      className="bg-white p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 cursor-pointer flex flex-col justify-between"
      onClick={onClick}
    >
      <div>
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 leading-tight">{title}</h3>
          <button className={`text-white text-xs font-bold py-1 px-3 rounded-full ml-4 ${statusClasses}`}>
            {status}
          </button>
        </div>
        
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center text-xs space-x-2 mb-4">
          <span className={`font-semibold py-0.5 px-2 rounded-full ${priorityClasses}`}>
            #{id} {priority}
          </span>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <span className="font-medium text-gray-700">{customer}</span>
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-xs">{createdAt}</span>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;