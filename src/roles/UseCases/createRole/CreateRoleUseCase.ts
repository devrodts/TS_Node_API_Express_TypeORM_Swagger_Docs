import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'
import { Role } from '@roles/entities/Role'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private RolesRepository: RolesRepository) {}

  execute({ name }: CreateRoleDTO): Role {
    const roleAlreadyExistis = this.RolesRepository.findByName(name)
    if (roleAlreadyExistis) {
      throw new AppError('Role already exists')
    }
    return this.RolesRepository.create({ name })
  }
}
