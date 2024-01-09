import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../app/features/tasks/taskSlice";
import { v4 as uuid } from 'uuid';
import { useNavigate, useParams } from "react-router-dom";


export const TaskForm = () => {

    const [task, setTask] = useState({
        title: '',
        description: ''
    })

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)

    const handleChange = e => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (params.id) {
            dispatch(editTask(task))
        } else {
            dispatch(addTask({
                ...task,
                id: uuid(),
            }));
        }

        navigate('/')
    }

    useEffect(() => {
        if (params.id) {
            setTask(tasks.find(task => task.id === params.id))
        }
    }, [params.id, task])



    return (
        <div className="flex items-center justify-center h-screen">
            <form onSubmit={handleSubmit} className="bg-zinc-800 max-w-md p-6 rounded-md shadow-md">
                <label htmlFor="title" className="block text-sm font-bold mb-2">Task</label>
                <input
                    name='title'
                    type="text"
                    placeholder="Title"
                    onChange={handleChange}
                    value={task.title}
                    className="w-full p-2 rounded-md bg-zinc-600 mb-4 focus:outline-none focus:ring focus:border-blue-300"
                    required
                />

                <label htmlFor="description" className="block text-sm font-bold mb-2">Description</label>
                <textarea
                    name="description"
                    placeholder="Description"
                    onChange={handleChange}
                    value={task.description}
                    className="w-full p-2 rounded-md bg-zinc-600 mb-4 focus:outline-none focus:ring focus:border-blue-300"
                    required
                />

                <button
                    type="submit"
                    className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-blue-300"
                >
                    Save
                </button>
            </form>
        </div>
    );
};