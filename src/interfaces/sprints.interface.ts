import { ObjectId } from "mongoose";

export interface SprintsModel {
    name: string;
    description?: string;
    tasks: ObjectId[];
    status: 'active' | 'completed' | 'standby',
    created_at: Date;
    start_date: Date;
    end_date: Date;
}

// created_at -> fecha de creacion de este sprint
// start_date -> el inicio del sprint
// end_date -> finalizacion del sprint