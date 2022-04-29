import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Team from 'App/Models/Team'

export default class TeamsController {

    public async store({request,auth,response}:HttpContextContract){
       const body = request.body() 
       const team = await auth.user?.related('teams').create(body)
        return {
           data: team
        }
    }

    
    public async index({params}: HttpContextContract) {
        //const teams = await Team.query().preload('comments')
        const teams = await Team.query().where('user_id',params.user_id)
        return{
            data:teams
        }
        
    }

    public async show({params}:HttpContextContract){

        const team = await Team.findOrFail(params.id)
        //const team = await Team.query().where('user_id',params.user_id).andWhere('id',params.id)
        //await team.load('users')
        return{
            data:team
        }
    }

    public async destroy({params}:HttpContextContract){

        const team = await Team.findOrFail(params.id)
        await team.delete();
        return{
            message: "Team sucessfully deleted",
            data:team
        }
    }




    public async update({params,request}:HttpContextContract){
        const team = await Team.findOrFail(params.id)
        const body = request.body()

        team.name = body.title
        team.userId = body.params.user_id

        await team.save()

        return{
            message: "Team sucessfully upadet",
            data:team
        }
    }
    
}
