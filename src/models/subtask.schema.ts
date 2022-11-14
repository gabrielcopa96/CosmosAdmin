import { Schema, Types, model } from 'mongoose';

import { SubTasksModel } from '../interfaces/subtasks.interface';

// creo mi schema con el cual va a tener que cumplir mi base de datos de mongo
const subtaskSchema = new Schema<SubTasksModel>(
    {
        name: {
            type: String,
            required: [true, 'name is required'],
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        priority: {
            type: String,
            enum: ['low', 'medium', 'high'],
            required: [
                true,
                'priority is required, can be only low, medium and high',
            ],
        },
        comments: {
            type: [Types.ObjectId],
            ref: 'Comment',
            default: [],
        },
        user: {
            type: Types.ObjectId,
            ref: 'User',
            required: [true, 'user is required'],
            default: ''
        },
        status: {
            type: String,
            enum: ['unrealized', 'inprogress', 'completed'],
            default: 'unrealized',
            required: [true, 'status is required'],
        },
        task: {
            type: Types.ObjectId,
            ref: 'Task',
            required: [true, 'task is required'],
        }
    },
    {
        versionKey: false,
    }
)

const SubTaskModel = model('SubTask', subtaskSchema);
export default SubTaskModel;