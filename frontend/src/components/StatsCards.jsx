import React from 'react';
import { Layers, Clock, CheckCircle2 } from 'lucide-react';

const StatsCards = ({ stats }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Total Tasks - Dark Card */}
            <div className="bg-[#18181b] rounded-[24px] p-6 border border-[#27272a] relative overflow-hidden group hover:border-[#3f3f46] transition-colors">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layers size={80} />
                </div>
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center mb-4 text-white">
                        <Layers size={20} />
                    </div>
                    <p className="text-zinc-400 text-sm font-medium mb-1">Total Tasks</p>
                    <p className="text-4xl font-bold text-white tracking-tight">{stats.total}</p>
                </div>
            </div>

            {/* Pending - Orange Accent */}
            <div className="bg-[#18181b] rounded-[24px] p-6 border border-[#27272a] relative overflow-hidden group hover:border-orange-500/30 transition-colors">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl group-hover:bg-orange-500/20 transition-colors"></div>
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center mb-4 text-orange-400">
                        <Clock size={20} />
                    </div>
                    <p className="text-zinc-400 text-sm font-medium mb-1">In Progress</p>
                    <p className="text-4xl font-bold text-white tracking-tight">{stats.pending}</p>
                </div>
            </div>

            {/* Completed - Green Accent */}
            <div className="bg-[#18181b] rounded-[24px] p-6 border border-[#27272a] relative overflow-hidden group hover:border-emerald-500/30 transition-colors">
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-emerald-500/10 rounded-full blur-2xl group-hover:bg-emerald-500/20 transition-colors"></div>
                <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
                        <CheckCircle2 size={20} />
                    </div>
                    <p className="text-zinc-400 text-sm font-medium mb-1">Completed</p>
                    <p className="text-4xl font-bold text-white tracking-tight">{stats.completed}</p>
                </div>
            </div>
        </div>
    );
};

export default StatsCards;
