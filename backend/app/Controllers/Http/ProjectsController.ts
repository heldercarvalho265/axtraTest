import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Application from '@ioc:Adonis/Core/Application'

import {v4 as uuidv4} from 'uuid'

import Project from 'App/Models/Project'

export default class ProjectsController {
    private validationOptions = {
        extnames: ['jpg', 'png', 'gif','svg'],
        sizy: '2mb'
    }

    public async store({request,response}:HttpContextContract){
        const body = request.body() 

        const image = request.file('url', this.validationOptions)

        if (image) {
            const url = `${uuidv4()}.${image.extname}`

            await image.move(Application.tmpPath('uploads'),{
                name: url
            })

            body.url = url
        }
        const project = await Project.create(body)

        response.status(201)
        return {
           message: "Projeto criado com sucesso",
           data:project
        }
     }
 
     
     public async index() {
         //const teams = await Team.query().preload('comments')
         const project = await Project.query()
         return{
             data:project
         }
         
     }
 
     public async show({params}:HttpContextContract){
 
         const project = await Project.findOrFail(params.id)

         return{
             data:project
         }
     }
 
     public async destroy({params}:HttpContextContract){
 
         const project = await Project.findOrFail(params.id)
         await project.delete();
         return{
             message: "Projeto eliminado com sucesso",
             data:project
         }
     }
 
 
 
 
     public async update({params,request}:HttpContextContract){
         const project = await Project.findOrFail(params.id)
         const body = request.body()

         project.name = body.name
         project.description = body.description
 
         if (project.url!=body.url || ! project.url) {
             const image = request.file('url', this.validationOptions)
             if (image) {
                 const url = `${uuidv4()}.${image.extname}`
     
                 await image.move(Application.tmpPath('uploads'),{
                     name: url
                 })
     
                 project.url = url
             }
         }
 
         await project.save()
 
         return{
             message: "Projeto atualizado com sucesso",
             data:project
         }
         
     }
}
