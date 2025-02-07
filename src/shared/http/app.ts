import express, { Response, Request, NextFunction } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { AppError } from '@shared/errors/AppError'
import { router } from './routes'
import swaggerUi from 'swagger-ui-express'
import swaggerFile from '../../swagger.json'

const app = express()


// Middlewares
app.use(express.json())
app.use(cors())

//API Routes 
app.use(router)

// Swagger Documentation
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))

// Error Handling
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      body: {
        status: 'error',
        message: error.message,
        statusCode: error.statusCode,
      },
    })
  }

  //Unknown Error
  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    statusCode: 500,
  })
})

export { app }
