import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo,  BelongsTo  } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'
import Team from 'App/Models/Team'
export default class Invite extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public user_id: number


  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  
  @column()
  public team_id: number

  @belongsTo(() => Team)
  public team: BelongsTo<typeof Team>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
