import React from 'react';
import DashboardHeader from './DashboardHeader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <DashboardHeader />

      {/* Main Content Area */}
      <main className="headercontainer sm:px-6 lg:px-[25px]">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
