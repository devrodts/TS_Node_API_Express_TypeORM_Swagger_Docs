import 'dotenv/config'
import 'reflect-metadata'
import { app } from './app'
import { Datasource } from '../typeorm'

Datasource.initialize().then(() => {
  app.listen(process.env.PORT, () => {
    try {
      console.log(`Server Started on port: ${process.env.PORT}`)
    } catch (error) {
      console.error('Something went wrong', error)
    }
  })
})
