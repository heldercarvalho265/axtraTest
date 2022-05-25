import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class DBseederSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
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

  }
}
