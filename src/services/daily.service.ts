import DailyModel from "../models/daily.schema"
import ProjectModel from '../models/project.schema';

const createDaily = async (body: any) => {

    const { task_id, user, status, title, project_id } = body

    const daily = new DailyModel({
        task: task_id,
        user,
        status,
        title
    })

    await daily.save();

    await ProjectModel.findByIdAndUpdate(project_id, {
        $push: {
            dailys: daily._id
        }
    }, { new: true })

    return daily;
}

const getAllDailysBySprint = async (id_sprint: string) => {

    const dailys = await DailyModel.find({sprint: id_sprint});

    if (!dailys) {
        return `No hay dailys`;
    }

    return dailys;
}

const getOneDaily = async (id: string) => {

    const daily = await DailyModel.findById(id);

    if (!daily) {
        return `No hay daily con ese id`;
    }

    return daily;
}

const updateOneDaily = async (id: string, body: any) => {

    const { task_id, user, status, title } = body

    const daily = await DailyModel.findByIdAndUpdate(id, {
        task: task_id,
        user,
        status,
        title
    }, { new: true })

    if (!daily) {
        return `No hay daily con ese id`;
    }

    return daily;
}

const deleteOneDaily = async (id: string) => {

    const daily = await DailyModel.findByIdAndDelete(id);

    if (!daily) {
        return `No hay daily con ese id`;
    }

    return daily;
}

export { createDaily, getAllDailysBySprint, getOneDaily, updateOneDaily, deleteOneDaily }