import dotenv from 'dotenv'
import express from 'express'
import genresRouter from './src/genres'
import createAccountsRouter from './src/accounts/routes'
import buildDependencies from './src/config/dependencies'
import createMoviesRouter from './src/movies/routes'

dotenv.config()

const app = express()

const port = process.env.PORT

const dependencies = buildDependencies()

app.use(express.json())
app.use('/api/genres', genresRouter)
app.use('/api/accounts', createAccountsRouter(dependencies))
app.use('/api/movies', createMoviesRouter(dependencies))

app.listen(port, () => {
  console.info(`Server running at ${port}`)
})
