import { createRolesController } from '@roles/UseCases/createRole'
import { listRolesController } from '@roles/UseCases/listRoles'
import { Router } from 'express'

const rolesRouter = Router()

rolesRouter.post('/', (request, response) => {
  return createRolesController.handle(request, response)
})

rolesRouter.get('/', (request, response) => {
  try {
    return listRolesController.handle(request, response)
  } catch (error) {
    console.log(`Something went wrong: ${error}`)
    return response.status(400).json({ message: 'Bad Request' })
  }
})

export { rolesRouter }
