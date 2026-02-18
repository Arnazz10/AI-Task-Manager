import React from 'react';
import { LayoutDashboard, ListTodo, BarChart3, Settings, BrainCircuit } from 'lucide-react';

const Sidebar = () => {
    const menuItems = [
        { icon: LayoutDashboard, label: 'Dashboard', active: true },
        { icon: ListTodo, label: 'My Tasks', active: false },
        { icon: BarChart3, label: 'Analytics', active: false },
        { icon: Settings, label: 'Settings', active: false },
    ];

    return (
        <aside className="w-[280px] h-screen bg-[#09090b] flex flex-col px-6 py-8 border-r border-[#27272a]">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-12 px-2">
                <div className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <BrainCircuit className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold tracking-tight text-white">TaskAI</span>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-1">
                <div className="text-xs font-medium text-zinc-500 px-4 mb-2 uppercase tracking-wider">Menu</div>
                {menuItems.map((item, index) => (
                    <button
                        key={index}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 group ${item.active
                                ? 'bg-white text-black shadow-lg shadow-white/5'
                                : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                            }`}
                    >
                        <item.icon size={18} className={item.active ? 'text-black' : 'text-zinc-400 group-hover:text-white'} />
                        {item.label}
                    </button>
                ))}
            </nav>

            {/* Bottom Profile */}
            <div className="mt-auto pt-6 border-t border-[#27272a]">
                <div className="flex items-center gap-3 p-2 rounded-xl hover:bg-zinc-800 transition-colors cursor-pointer">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 ring-2 ring-black"></div>
                    <div className="flex flex-col">
                        <span className="text-sm font-medium text-white">Guest User</span>
                        <span className="text-xs text-zinc-500">Free Plan</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
