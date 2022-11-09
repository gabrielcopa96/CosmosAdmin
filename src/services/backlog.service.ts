import BacklogModel from "../models/backlog.schema"
import { BacklogsModeloInput } from '../interfaces/backlog.interface';
import ProjectModel from "../models/project.schema";

const createBacklog = async (body: BacklogsModeloInput) => {

        const newBacklog = new BacklogModel(body);
        
        await newBacklog.save();
        
        
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