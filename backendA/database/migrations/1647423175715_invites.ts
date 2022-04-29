import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Invites extends BaseSchema {
  protected tableName = 'invites'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
      .integer('user_id')
      .unsigned()
      .notNullable()
      .references('users.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      table
        .integer('team_id')
        .unsigned()
        .notNullable()
        .references('teams.id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')

      table.string('email').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
