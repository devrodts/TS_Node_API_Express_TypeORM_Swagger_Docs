import express, { Response, Request } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { AppError } from '@shared/errors/AppError'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../swagger.json'

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.use((error: Error, request: Request, response: Response) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      body: {
        status: 'error',
        message: error.message,
      },
    })
  }
})

export { app }
