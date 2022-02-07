import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Veiculo extends BaseModel {
  @column({ isPrimary: true })
  public idGps: number

  @column()
  public longitude: Float32Array

  @column()
  public latitude: Float32Array

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
