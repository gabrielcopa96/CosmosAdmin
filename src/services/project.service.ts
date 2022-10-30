import { ProjectsModel } from "../interfaces/projects.interface";
import ProjectModel from "../models/project.schema";


const createProject = async (body: ProjectsModel) => {

    const project = ProjectModel.create(body);

    if(!project) {
        return `No se pudo crear el project`;
    }

    return project;

}

const getAllProjects = async () => {

    // aqui nos va a faltar poner los populate
    const projects = await ProjectModel.find({});

    if(!projects.length) {
        return `No hay proyectos actualmente`
    }

    return projects;

}

interface AddMembers {
    members: string[];   
}

const addMember = async(id: string, body: AddMembers) => {

    const mapMembers = body.members

    let members;

    mapMembers.forEach( async (member: string) => {
        members = await ProjectModel.findByIdAndUpdate(id, { $push: { members: member } }, { new: true })
    })
    
    return members;
}

export { createProject, getAllProjects, addMember }