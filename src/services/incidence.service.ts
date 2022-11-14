import IncidenceModel from "../models/incidence.schema"


const newIncidence = (body: any) => {

    const { description, task_id, user, status, title } = body

    const incidence = new IncidenceModel({
        description,
        task: task_id,
        user,
        status,
        title
    })
    // const incidence = new Incidence({
    //     description,
    //     task_id,
    //     user_id
    // })

    // return incidence.save()
    
}