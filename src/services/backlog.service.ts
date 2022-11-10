import BacklogModel from "../models/backlog.schema"
import { BacklogsModel } from '../interfaces/backlog.interface';
import ProjectModel from "../models/project.schema";

const createBacklog = async (body: BacklogsModel) => {

        const newBacklog = new BacklogModel(body);
        
        await newBacklog.save();

        await ProjectModel.findOneAndUpdate({ owner: body.owner }, {
            $push: {
                backlogs: newBacklog._id
            }
        }, { new: true })
        
        return newBacklog;

}

const getBacklogByOwner = async (id: string, owner: string) => {

        const backlog = await BacklogModel.findOne({ _id: id, owner });

        if(!backlog) {
            return null;
        }

        return backlog;


}

const allsBacklogsByOwner = async (owner: string) => {
    
            const backlogs = await BacklogModel.find({ owner });
    
            if(!backlogs) {
                return null;
            }
    
            return backlogs;
    
}


export { createBacklog, getBacklogByOwner, allsBacklogsByOwner }