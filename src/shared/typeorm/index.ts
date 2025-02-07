import { DataSource } from 'typeorm'
import { CreateRolesTable1693576070181 } from './migrations/1693576070181-CreateRolesTable'
import { Role } from '@roles/entities/Role'

export const Datasource = new DataSource({
  type: 'sqlite',
  database: './db.sqlite',
  entities: [Role],
  migrations: [CreateRolesTable1693576070181],
})
