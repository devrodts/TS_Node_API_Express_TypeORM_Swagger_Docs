import { Role } from '@roles/entities/Role'
import { RolesRepository } from '@roles/repositories/RolesRepository'
import { IRequestPage } from './interface'

export class ListRolesUseCase {
  constructor(private rolesRepository: RolesRepository) {}

  async execute({ page }: IRequestPage): Promise<Role[]> {
    const roles = await this.rolesRepository.findAll({ page, skip: 0, take: 10 })
    return roles.data
  }

}
