import React, { useEffect, useState } from 'react';
import { api } from '../api';
import DashboardLayout from '../components/DashboardLayout';
import StatsCards from '../components/StatsCards';
import CreateTask from '../components/CreateTask';
import TaskCard from '../components/TaskCard';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [stats, setStats] = useState({ total: 0, pending: 0, completed: 0 });

    const fetchTasks = async () => {
        try {
            const data = await api.fetchTasks();
            setTasks(data);
            setStats({
                total: data.length,
                pending: data.filter(t => t.status === 'pending').length,
                completed: data.filter(t => t.status === 'completed').length
            });
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <DashboardLayout>
            <div className="max-w-6xl mx-auto">
                <header className="mb-8">
                    <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard</h1>
                    <p className="text-zinc-500 mt-2">Manage your projects and tasks.</p>
                </header>

                <StatsCards stats={stats} />

                <CreateTask onTaskCreated={fetchTasks} />

                <div className="mt-12">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold text-white">Your Tasks</h2>
                        <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300">View All</button>
                    </div>

                    {tasks.length === 0 ? (
                        <div className="text-center py-20 bg-[#18181b] rounded-[24px] border border-[#27272a] border-dashed">
                            <p className="text-zinc-500">No tasks found. Start by creating one!</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
                            {tasks.map(task => (
                                <TaskCard
                                    key={task.id}
                                    task={task}
                                    onUpdate={fetchTasks}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </DashboardLayout>
    );
};

export default TaskList;
