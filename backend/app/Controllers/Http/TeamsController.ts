import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Application from '@ioc:Adonis/Core/Application'

import {v4 as uuidv4} from 'uuid'

import Team from 'App/Models/Team'

export default class TeamsController {
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
        const team = await Team.create(body)

        response.status(201)
        return {
           message: "Equipa criado com sucesso",
           data:team
        }
     }
 
     
     public async index() {
         //const teams = await Team.query().preload('comments')
         const teams = await Team.query()
         return{
             data:teams
         }
         
     }
 
     public async show({params}:HttpContextContract){
 
         const team = await Team.findOrFail(params.id)

         return{
             data:team
         }
     }
 
     public async destroy({params}:HttpContextContract){
 
         const team = await Team.findOrFail(params.id)
         await team.delete();
         return{
             message: "Equipa eliminado com sucesso",
             data:team
         }
     }
 
 
 
 
     public async update({params,request}:HttpContextContract){
         const team = await Team.findOrFail(params.id)
         const body = request.body()

         team.name = body.name
         team.cargo = body.cargo
         team.description = body.description
 
         if (team.url!=body.url || ! team.url) {
             const image = request.file('url', this.validationOptions)
             if (image) {
                 const url = `${uuidv4()}.${image.extname}`
     
                 await image.move(Application.tmpPath('uploads'),{
                     name: url
                 })
     
                team.url = url
             }
         }
 
         await team.save()
 
         return{
             message: "Equipa atualizado com sucesso",
             data:team
         }
         
     }
}
