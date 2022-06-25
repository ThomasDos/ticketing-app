import express, { json } from 'express'
import { NotFoundError } from './errors/not-found-error'
import { errorHandler } from './middlewares/error-handler'

import { currentUserRouter } from './routes/current-user'
import { signinRouter } from './routes/signin'
import { signoutRouter } from './routes/signout'
import { signupRouter } from './routes/signup'

const app = express()

app.use(json())
app.use(signupRouter)
app.use(signinRouter)
app.use(signoutRouter)
app.use(currentUserRouter)

app.all('*', () => {
  throw new NotFoundError()
})

app.use(errorHandler)

app.listen(3000, () => {
  console.log('Auth is listening on port 3000 !!')
})
