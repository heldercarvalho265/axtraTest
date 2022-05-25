import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Application from '@ioc:Adonis/Core/Application'

import {v4 as uuidv4} from 'uuid'
import Service from 'App/Models/Service'

export default class ServicesController {
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
        const service = await Service.create(body)

        response.status(201)
        return {
           message: "Serviço criado com sucesso",
           data:service
        }
     }
 
     
     public async index() {
         //const teams = await Team.query().preload('comments')
         const service = await Service.query()
         return{
             data:service
         }
         
     }
 
     public async show({params}:HttpContextContract){
 
         const service = await Service.findOrFail(params.id)

         return{
             data:service
         }
     }
 
     public async destroy({params}:HttpContextContract){
 
         const service = await Service.findOrFail(params.id)
         await service.delete();
         return{
             message: "Serviço eliminado com sucesso",
             data:service
         }
     }
 
 
 
 
     public async update({params,request}:HttpContextContract){
         const service = await Service.findOrFail(params.id)
         const body = request.body()

         service.name = body.name
         service.description = body.description
 
         if (service.url!=body.url || ! service.url) {
             const image = request.file('url', this.validationOptions)
             if (image) {
                 const url = `${uuidv4()}.${image.extname}`
     
                 await image.move(Application.tmpPath('uploads'),{
                     name: url
                 })
     
                 service.url = url
             }
         }
 
         await service.save()
 
         return{
             message: "Serviço atualizado com sucesso",
             data:service
         }
         
     }
}
