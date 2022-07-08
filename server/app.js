√import express from 'express'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import cors from 'cors'
import filesRouter from './routes/files.router.js'
import { options } from '../swaggerOptions.js'

const app = express()

const swaggerSpec = swaggerJSDoc(options)

app.use(express.json())
app.use(cors({ origin: true, credentials: true }))
app.use(filesRouter)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))

export default app
