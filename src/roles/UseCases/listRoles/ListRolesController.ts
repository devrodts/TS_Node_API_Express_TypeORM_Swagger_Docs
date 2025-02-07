import { Request, Response } from 'express'
import { ListRolesUseCase } from './ListRolesUseCase'

export class ListRolesController {
  constructor(private listRolesUseCase: ListRolesUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { page = 1 } = request.query
    const roles = await this.listRolesUseCase.execute({ 
      page: Number(page),
      limit: 10
    })
    return response.json({ body: roles })

  }
}
