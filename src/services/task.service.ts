// Path: src\services\task.service.ts
// { getTaskById, getTasksByBacklog, createTask, updateTask, deleteTask }
import SprintModel from "../models/sprint.schema";
import TaskModel from "../models/task.schema";


const getOneTask = async (id: string) => {
    
        const task = await TaskModel.findById(id);
    
        if(!task) {
            return `No hay tarea con ese id`;
        }
    
        return task;
    
}

const getAllTasksByBacklog = async (id: string) => {

    const tasks = await TaskModel.find({backlog: id});

    if(!tasks) {
        return `No hay tareas con ese id`;
    }

    return tasks;

}

const newTask = async (body: any) => {

    const {name, description, priority, comments, pm, status, members, backlog, id_sprint} = body;

    const task = new TaskModel({
        name,
        description,
        priority,
        comments,
        pm,
        status,
        members,
        backlog
    });

    await task.save();

    await SprintModel.findByIdAndUpdate(id_sprint, {
        $push: {
            tasks: task._id
        }
    }, { new: true })

    return task;

}

const updateOneTask = async (id: string, body: any) => {

    const {name, description, priority, comments, pm, status, members, backlog} = body;

    const task = await TaskModel.findByIdAndUpdate(id, {
        name,
        description,
        priority,
        comments,
        pm,
        status,
        members,
        backlog
    }, { new: true });

    return task;

}

const deleteOneTask = async (id: string) => {

    const task = await TaskModel.findByIdAndDelete(id);

    return task;

}

export { getOneTask, getAllTasksByBacklog, newTask, updateOneTask, deleteOneTask }