import { RolesRepository } from '@roles/repositories/RolesRepository'
import { AppError } from '@shared/errors/AppError'
import { Role } from '@roles/entities/Role'
import { StatusCodeError, StatusCodeErrorEnum } from '@shared/errors'

type CreateRoleDTO = {
  name: string
}

export class CreateRoleUseCase {
  constructor(private RolesRepository: RolesRepository) {}

  async execute({ name }: CreateRoleDTO): Promise<Role> {
    const roleAlreadyExistis = this.RolesRepository.findByName(name)
    if (roleAlreadyExistis) {
      throw new AppError('Role already exists', StatusCodeErrorEnum.BAD_REQUEST)
    }
    return this.RolesRepository.create({ name })
  }

}
