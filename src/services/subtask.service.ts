import SubTaskModel from "../models/subtask.schema"


const createSubtask = (body: any) => {

    const { name, description, task_id, user, status, priority } = body

    const subtask = new SubTaskModel({
        name,
        description,
        task: task_id,
        user,
        status,
        priority
    })

    return subtask.save()


}