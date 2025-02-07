import { Router } from 'express'
const personalityRouter = Router()

personalityRouter.get('/', (request, response) => {
  try {
    // return listRolesController.handle(request, response)
  } catch (error) {
    console.log(`Something went wrong: ${error}`)
    return response.status(400).json({ message: 'Bad Request' })
  }
})
