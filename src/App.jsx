
import './app.css';
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import initialTickets from './data/tickets.json';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketCard from './components/TicketCard';
import TaskStatus from './components/TaskStatus';
import ResolvedTask from './components/ResolvedTask';
import Footer from './components/Footer'; 


// Helper function to get status-based styles for the task status section
const getStatusStyles = (status) => {
  switch (status) {
    case 'Open': return 'bg-green-100 text-green-700 border-green-300';
    case 'In-Progress': return 'bg-yellow-100 text-yellow-700 border-yellow-300';
    case 'Resolved': return 'bg-gray-100 text-gray-500 border-gray-300';
    default: return 'bg-gray-100 text-gray-700 border-gray-300';
  }
};

function App() {
  // Initialize state with tickets. Filter out tickets initially set as 'In-Progress' 
  // and load them into the inProgressTask state, as the UI is single-task focused.
  const initialInProgress = initialTickets.find(t => t.status === 'In-Progress');
  const initialOpenTickets = initialTickets.filter(t => t.status !== 'In-Progress');
    
  const [tickets, setTickets] = useState(initialOpenTickets);
  const [inProgressTask, setInProgressTask] = useState(initialInProgress || null);
  const [resolvedTasks, setResolvedTasks] = useState([]);

  // Calculate banner counts
  // The 'In Progress' count is 1 if there's an active task, plus any other initial 'In-Progress' tickets
  const inProgressCount = (inProgressTask ? 1 : 0) + tickets.filter(t => t.status === 'In-Progress').length;
  const resolvedCount = resolvedTasks.length;

  // Handles clicking on a ticket card
  const handleTicketClick = (ticket) => {
    if (inProgressTask && inProgressTask.id === ticket.id) {
      toast.info(`Ticket #${ticket.id} is already in Task Status.`, { position: "bottom-right" });
      return;
    }
    if (inProgressTask) {
      toast.warn(`Please complete the current task (#${inProgressTask.id}) first.`, { position: "bottom-right" });
      return;
    }
    
    // 1. Add to Task Status (right side)
    setInProgressTask(ticket);

    // 2. Remove from the Customer Tickets list
    setTickets(prev => prev.filter(t => t.id !== ticket.id));
    
    // 3. Show toast notification
    toast.success(`Ticket #${ticket.id} added to Task Status!`, { position: "bottom-right" });
  };

  // Handles clicking the 'Complete' button in Task Status
  const handleTaskComplete = () => {
    if (!inProgressTask) return;

    const completedTicket = inProgressTask;

    // 1. Remove from Task Status
    setInProgressTask(null);

    // 2. Add to Resolved List (right side)
    setResolvedTasks(prev => [{ ...completedTicket, status: 'Resolved' }, ...prev]);
    
    // 3. Show toast notification
    toast.success(`Ticket #${completedTicket.id} completed and resolved!`, { position: "bottom-right" });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <Banner inProgressCount={inProgressCount} resolvedCount={resolvedCount} />

        {/* RESPONSIVE LAYOUT (Desktop: 2/3 vs 1/3, Mobile: Stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
          
          {/* Left Column: Customer Tickets (Takes 2/3 space on large screens) */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Customer Tickets</h2>
            {/* TICKET GRID (Desktop: 2 columns, Mobile: 1 column) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tickets.map(ticket => (
                <TicketCard 
                  key={ticket.id} 
                  ticket={ticket} 
                  onClick={() => handleTicketClick(ticket)}
                />
              ))}
            </div>
          </div>
          
          {/* Right Column: Task Status & Resolved Tasks (Takes 1/3 space on large screens) */}
          <div className="lg:col-span-1 space-y-8">
            <TaskStatus 
              task={inProgressTask} 
              onComplete={handleTaskComplete} 
              getStatusStyles={getStatusStyles} 
            />
            <ResolvedTask 
              resolvedTasks={resolvedTasks} 
              getStatusStyles={getStatusStyles} 
            />
          </div>

        </div>
      </main>

      {/* React-Toastify Container */}
      <ToastContainer autoClose={3000} hideProgressBar newestOnTop />
   
  {/* THE FOOTER MUST BE HERE! */}
      <Footer />

    </div>
    
  );
}

export default App;