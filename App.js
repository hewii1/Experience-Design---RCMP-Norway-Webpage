import React, { useState, useEffect } from 'react';

// IKEA Fargepalett
const colors = {
  ikeaBlue: '#0058AB',
  ikeaYellow: '#FFCC00',
  softGray: '#F5F5F5',
  textBlack: '#111111'
};

const Dashboard = () => {
  const [view, setView] = useState('dashboard'); // Enkel navigasjon

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar - IKEA-inspirert ren navigasjon */}
      <nav className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-10">
          <h1 className="text-xl font-bold tracking-tight" style={{ color: colors.ikeaBlue }}>
            RCMP <span className="font-normal text-gray-500">Experience Design</span>
          </h1>
        </div>

        <ul className="space-y-4 flex-1">
          <NavItem label="Dashboard" active={view === 'dashboard'} onClick={() => setView('dashboard')} />
          <NavItem label="New Request" active={view === 'new'} onClick={() => setView('new')} />
          <NavItem label="Report Error" active={view === 'error'} onClick={() => setView('error')} />
          <NavItem label="My Tasks" active={view === 'tasks'} onClick={() => setView('tasks')} />
        </ul>

        <button className="mt-auto p-2 bg-gray-100 rounded text-sm hover:bg-gray-200 transition">
          Admin Panel
        </button>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-800">
            {view.charAt(0).toUpperCase() + view.slice(1)}
          </h2>
        </header>

        {/* Eksempel på innhold: Task Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 bg-blue-100 text-blue-700 rounded">New</span>
              <span className="text-gray-400 text-sm">2 timer siden</span>
            </div>
            <h3 className="text-lg font-bold mb-2">Salgstall Dashboard Q1</h3>
            <p className="text-gray-600 text-sm mb-4">Behov for ny oversikt over fjernsalg for Oslo-området...</p>
            <button className="text-sm font-bold underline" style={{ color: colors.ikeaBlue }}>Se detaljer</button>
          </div>
        </div>
      </main>
    </div>
  );
};

const NavItem = ({ label, active, onClick }) => (
  <li 
    onClick={onClick}
    className={`cursor-pointer p-3 rounded-md font-medium transition-all ${
      active ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-600 hover:bg-gray-100'
    }`}
  >
    {label}
  </li>
);

export default Dashboard;