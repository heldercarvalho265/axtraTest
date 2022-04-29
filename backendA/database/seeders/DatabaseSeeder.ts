import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'
import Team from 'App/Models/Team'

export default class DatabaseSeederSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
   
  const uniqueKey = 'email'

    const user = await User.createMany([
      {
        name: 'Helder Carvalho',
        email: 'helder@gmail.com',
        password: 'secret',
      },
      {
        name: 'Ariana Horta',
        email: 'ariana@gmail.com',
        password: '12345',
      },
    ])

    await user[0]?.related('teams').create(
      {
        name:'Rapaz Brabo'
      }
    )
    await user[0]?.related('teams').create(
      {
        name:'Barcelona'
      }
    )
    await user[1]?.related('teams').create(
      {
        name:'Real Madrid'
      }
    )
  }
}
