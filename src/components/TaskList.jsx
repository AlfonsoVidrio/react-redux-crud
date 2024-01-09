import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../app/features/tasks/taskSlice";
import { Link } from "react-router-dom";

export const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteTask(id));
    };

    return (
        <div className="w-4/6 mx-auto">
            <header className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Tasks ({tasks.length})</h1>
                <Link
                    to="/create-task"
                    className="bg-indigo-600 py-2 px-4 rounded-md text-white"
                >
                    Create Task
                </Link>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tasks.map((task) => (
                    <div key={task.id} className="bg-neutral-800 p-4 rounded-md">
                        <header className="flex justify-between">
                            <h3 className="text-lg font-semibold">{task.title}</h3>
                            <div className="flex space-x-2">
                                <Link
                                    to={`/edit-task/${task.id}`}
                                    className="bg-zinc-600 px-2 py-1 text-sm rounded-md"
                                >
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(task.id)}
                                    className="bg-red-500 px-2 py-1 text-sm rounded-md"
                                >
                                    Delete
                                </button>
                            </div>
                        </header>
                        <p className="mt-2">{task.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
