import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex h-screen bg-black font-sans text-white overflow-hidden selection:bg-indigo-500/30">
            <Sidebar />
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden bg-black relative">
                <Header />
                <main className="flex-1 overflow-y-auto px-8 py-6 scrollbar-hide">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
