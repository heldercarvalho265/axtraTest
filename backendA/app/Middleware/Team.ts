import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Team from 'App/Models/Team'

export default class TeamTeste {
  public async handle({request,response,auth}: HttpContextContract, next: () => Promise<Team>) {
    const slug = request.header('TEAM')

    let team: any = null


    if (slug) {
       team = auth.user?.related('teams').query().where('slug',slug).first()
    }

    if (!team) {
      return response.status(401).send
    }
    auth.user?.team_id; Number = team.id
     
    request.types= team
    
    // code for middleware goes here. ABOVE THE NEXT CALL
    await next()
  }
}
