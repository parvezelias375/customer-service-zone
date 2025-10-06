import React from 'react';

const TaskStatus = ({ task, onComplete, getStatusStyles }) => {
  const baseClasses = "border-2 p-4 rounded-xl shadow-md";

  if (!task) {
    return (
      <div className={`${baseClasses} text-center text-gray-500 bg-white`}>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Task Status</h3>
        <p>Select a ticket to add to Task Status</p>
      </div>
    );
  }

  const statusClasses = getStatusStyles(task.status);

  return (
    <div className={`${baseClasses} bg-white`}>
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Task Status</h3>
      
      <div className={`p-4 rounded-lg ${statusClasses} mb-4`}>
        <div className="text-lg font-medium text-gray-800">{task.title}</div>
      </div>
      
      <button 
        onClick={onComplete}
        className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 rounded-lg transition duration-200"
      >
        Complete
      </button>
    </div>
  );
};

export default TaskStatus;