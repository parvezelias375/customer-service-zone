import React from 'react';

const ResolvedTask = ({ resolvedTasks, getStatusStyles }) => {
  return (
    <div className="border-2 p-4 rounded-xl shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Resolved Task</h3>
      
      {resolvedTasks.length === 0 ? (
        <p className="text-gray-500">No resolved tasks yet.</p>
      ) : (
        <div className="space-y-3 max-h-64 overflow-y-auto">
          {resolvedTasks.slice(0, 3).map(task => ( // Show top 3 resolved
            <div 
              key={task.id} 
              className={`p-3 rounded-lg border text-sm ${getStatusStyles('Resolved')}`}
            >
              <div className="font-medium">{task.title}</div>
            </div>
          ))}
          {resolvedTasks.length > 3 && (
            <p className="text-sm text-gray-500 mt-2">...and {resolvedTasks.length - 3} more resolved tasks.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ResolvedTask;