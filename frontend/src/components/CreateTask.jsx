import React, { useState } from 'react';
import { api } from '../api';
import { Plus, Sparkles } from 'lucide-react';

const CreateTask = ({ onTaskCreated }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title.trim()) return;

        setLoading(true);
        try {
            await api.createTask({ title, description });
            setTitle('');
            setDescription('');
            onTaskCreated();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-[#18181b] rounded-[24px] p-1 mt-8 border border-[#27272a] shadow-xl shadow-black/50">
            <div className="flex flex-col md:flex-row gap-0">
                <div className="flex-1 p-2">
                    <input
                        type="text"
                        placeholder="What's your next task?"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                        className="w-full bg-transparent text-white text-lg font-medium placeholder:text-zinc-600 px-4 py-3 focus:outline-none"
                    />
                    <div className="border-t border-[#27272a] mx-4"></div>
                    <input
                        type="text"
                        placeholder="Add notes or context for AI..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full bg-transparent text-sm text-zinc-400 placeholder:text-zinc-700 px-4 py-3 focus:outline-none"
                    />
                </div>

                <div className="p-3 flex items-center justify-end md:border-l border-[#27272a]">
                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="h-12 w-12 md:h-full md:w-auto md:px-6 bg-white hover:bg-zinc-200 text-black rounded-[20px] font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-white/5 active:scale-95"
                    >
                        {loading ? <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div> : (
                            <>
                                <Plus size={20} />
                                <span className="hidden md:inline">Create</span>
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateTask;
