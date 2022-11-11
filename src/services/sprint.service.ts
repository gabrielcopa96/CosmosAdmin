// Path: src\services\sprint.service.ts
import SprintModel from "../models/sprint.schema";
import BacklogModel from '../models/backlog.schema';

const createSprint = async (body: any) => {

    // const sprint = {
    //     name: 'Sprint 1',
    //     description: 'Sprint 1',
    //     task: [],
    //     status: 'active',
    //     start_data: '2020-10-15',
    //     end_data: '2020-10-15',
    //     created_at: '5f7e9b9d8c8b1f1c2c2b2c2c'
    //     id_backlog: 'sdfsdf324edfsv234f
    // };
    const {name, description, status, start_date, end_date, id_backlog} = body;
   
    const sprint = new SprintModel({
        name,
        description,
        status,
        start_date,
        end_date,
    });

    await sprint.save();

    await BacklogModel.findByIdAndUpdate(id_backlog, {
        $push: {
            sprints: sprint._id
        }
    }, { new: true })

    return sprint;
}

const getOneSprint = async (id: string) => {

    const sprint = await SprintModel.findById(id).populate('tasks');

    if(!sprint) {
        return `No hay sprint con ese id`;
    }


    return sprint;
}


const updateSprint = async (id: string, body: any) => {

    const {name, description, status, start_date, end_date} = body;

    const sprint = await SprintModel.findByIdAndUpdate(id, {
        name,
        description,
        status,
        start_date,
        end_date,
    }, { new: true });

    if(!sprint) {
        return `No hay sprint con ese id, y por esa razon no se logro`;
    }

    return sprint;
}

const deleteOneSprint = async (id: string) => {

    const sprint = await SprintModel.findByIdAndDelete(id);

    if(!sprint) {
        return `No hay sprint con ese id, y por esa razon no se logro`;
    }

    return sprint;
}


export { createSprint, getOneSprint, updateSprint, deleteOneSprint }