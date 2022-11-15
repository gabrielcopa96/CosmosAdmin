import CommentModel from "../models/comment.schema"
import TaskModel from '../models/task.schema';
import SubTaskModel from '../models/subtask.schema';


const createCommentByTask = (task: any) => {

    const { user, content, task_id } = task;

    const commentNew = new CommentModel({
        content,
        user: user,
    })

    commentNew.save();

    TaskModel.findByIdAndUpdate(task_id, {
        $push: {
            comments: commentNew._id
        }
    }, { new: true })

    return commentNew;
}

const createCommentBySubTask = async (task: any) => {

    const { user, content, subtask_id } = task;

    const commentNew = new CommentModel({
        content,
        user: user,
    });

    await commentNew.save();

    await SubTaskModel.findByIdAndUpdate(subtask_id, {
        $push: {
            comments: commentNew._id
        }
    }, { new: true })
    
}

const getAllCommentsByTask = async (id: string) => {

    const comments = await CommentModel
        .find
        ({ task: id })
        .populate('user', 'name');
    
    if (!comments) {
        return `No hay comentarios`;
    }

    return comments;
}

const getAllCommentsBySubtask = async (id: string) => {

    const comments = await CommentModel
        .find
        ({ subtask: id })
        .populate('user', 'name');
    
    if (!comments) {
        return `No hay comentarios`;
    }

    return comments;
}

const getOneComment = async (id: string) => {

    const comment = await CommentModel
        .findById(id)
        .populate('user', 'name');

    if (!comment) {
        return `No hay comentario con ese id`;
    }

    return comment;
}

const updateOneComment = async (id: string, body: any) => {

    const comment = await CommentModel.findByIdAndUpdate(id, body, { new: true });

    if (!comment) {
        return `No hay comentario con ese id`;
    }

    return comment;
}

const deleteOneComment = async (id: string) => {

    const comment = await CommentModel.findByIdAndDelete(id);

    if (!comment) {
        return `No hay comentario con ese id`;
    }

    return comment;
}

export {
    createCommentByTask,
    createCommentBySubTask,
    getAllCommentsByTask,
    getAllCommentsBySubtask,
    getOneComment,
    updateOneComment,
    deleteOneComment
}