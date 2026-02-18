import React, { useState } from 'react';
import { Sparkles, Circle, CheckCircle2, Trash2, Calendar, MoreHorizontal } from 'lucide-react';
import { api } from '../api';

const TaskCard = ({ task, onUpdate }) => {
    const [loading, setLoading] = useState(false);

    const handleToggle = async () => {
        setLoading(true);
        try {
            await api.updateTask(task.id, { status: task.status === 'pending' ? 'completed' : 'pending' });
            onUpdate();
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };

    const handleDelete = async () => {
        if (!window.confirm("Delete?")) return;
        setLoading(true);
        try {
            await api.deleteTask(task.id);
            onUpdate();
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };

    const handleCategorize = async () => {
        setLoading(true);
        try {
            await api.categorizeTask(task.id);
            onUpdate();
        } catch (e) { console.error(e); }
        finally { setLoading(false); }
    };

    return (
        <div className="group bg-[#18181b] hover:bg-[#202024] rounded-[24px] p-5 border border-[#27272a] hover:border-[#3f3f46] transition-all duration-300 flex flex-col h-full relative">

            {/* Header */}
            <div className="flex justify-between items-start mb-3">
                <div className={`p-2 rounded-xl ${task.category === 'Work' ? 'bg-orange-500/10 text-orange-400' :
                        task.category === 'Personal' ? 'bg-blue-500/10 text-blue-400' :
                            task.category === 'Study' ? 'bg-purple-500/10 text-purple-400' :
                                'bg-zinc-800 text-zinc-400'
                    }`}>
                    {task.category === 'Work' ? '💼' :
                        task.category === 'Personal' ? '🏠' :
                            task.category === 'Study' ? '📚' : '📝'}
                </div>

                <button className="text-zinc-600 hover:text-white transition-colors">
                    <MoreHorizontal size={20} />
                </button>
            </div>

            {/* Content */}
            <div className="mb-6 flex-1">
                <h3 className={`font-semibold text-lg text-white mb-2 leading-snug ${task.status === 'completed' ? 'line-through opacity-40' : ''}`}>
                    {task.title}
                </h3>
                <p className="text-sm text-zinc-500 line-clamp-2">
                    {task.description || "No details added."}
                </p>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between pt-4 border-t border-[#27272a] mt-auto">
                <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
                    <Calendar size={14} />
                    {new Date(task.created_at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
                </div>

                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <button
                        onClick={handleCategorize}
                        disabled={loading || task.category}
                        className={`p-2 rounded-lg transition-colors ${task.category ? 'text-indigo-400/30' : 'text-zinc-400 hover:text-indigo-400 hover:bg-indigo-500/10'
                            }`}
                        title="Auto Categorize"
                    >
                        <Sparkles size={18} />
                    </button>
                    <button
                        onClick={handleToggle}
                        disabled={loading}
                        className={`p-2 rounded-lg transition-colors ${task.status === 'completed' ? 'text-emerald-500' : 'text-zinc-400 hover:text-emerald-400 hover:bg-emerald-500/10'
                            }`}
                    >
                        {task.status === 'completed' ? <CheckCircle2 size={18} /> : <Circle size={18} />}
                    </button>
                    <button
                        onClick={handleDelete}
                        disabled={loading}
                        className="p-2 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-red-500/10 transition-colors"
                    >
                        <Trash2 size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;
