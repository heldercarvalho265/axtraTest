 import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Invite from 'App/Models/Invite'

export default class InvitesController {

    public async store({request,auth,response}:HttpContextContract){
        const invite = request.input('invites')
        const data = invite.map(email =>({
            email,
            user_id: auth.user?.id,
            team_id: request.team.id
        })) 

        const invites = await Invite.createMany(data)
         return {
            data: invites
         }
     }

     public async index() {
        //const teams = await Team.query().preload('comments')
        const teams = await Invite.all()
        return{
            data:teams
        }
        
    }
}
