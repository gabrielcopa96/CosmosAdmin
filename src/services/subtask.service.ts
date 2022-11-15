import SubTaskModel from "../models/subtask.schema";
import TaskModel from "../models/task.schema";

const createSubtask = async (body: any) => {
  const { name, description, task_id, user, status, priority } = body;

  const subtask = new SubTaskModel({
    name,
    description,
    task: task_id,
    user,
    status,
    priority,
  });

  await subtask.save();

  await TaskModel.findByIdAndUpdate(
    task_id,
    {
      $push: {
        subtasks: subtask._id,
      },
    },
    { new: true }
  );

  return subtask;
};

const getSubtasks = async () => {
  const subtasks = await SubTaskModel.find({});

  if (!subtasks) {
    return `No hay subtareas`;
  }

  return subtasks;
};

const getOneSubtask = async (id: string) => {
  const subtask = await SubTaskModel.findById(id);

  if (!subtask) {
    return `No hay subtarea con ese id`;
  }

  return subtask;
};

const getAllSubtasksByTask = async (task_id: string) => {

    const subtasks = await SubTaskModel.find({ task: task_id });

    if(!subtasks) {
        return `No hay subtareas con ese id`;
    }

    return subtasks;
}

const updateOneSubtask = async (id: string, body: any) => {
  const { name, description, user, status, priority } = body;

  const subtask = await SubTaskModel.findByIdAndUpdate(
    id,
    {
      name,
      description,
      user,
      status,
      priority,
    },
    { new: true }
  );

  return subtask;
};

const deleteOneSubtask = async (id: string) => {
  const subtask = await SubTaskModel.findByIdAndDelete(id);

  return subtask;
};

export {
  createSubtask,
  getSubtasks,
  getOneSubtask,
  getAllSubtasksByTask,
  updateOneSubtask,
  deleteOneSubtask,
};
