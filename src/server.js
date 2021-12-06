import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

// middleware
// const log = (req, res, next) => {
//   console.log('logging')
//   req.mydata = 'hello'
//   next()
// }

router.get('/me', (req, res) => {
  res.send({ message: 'hi' })
})

// use a sub route /api/me
app.use('/api', router)

// const routes = ['get /cat', 'get /cat/:id', 'post /cat', 'put /cat/:id', 'delete /cat/:id']

router.route('/cat')
  .get()
  .post()

router.route('cat /:id')
  .get()
  .put()
  .delete()

// app.get('/data', log, (req, res) => {
app.get('/data', (req, res) => {
  res.send({ message: req.mydata })
})

app.post('/data', (req, res) => {
  res.send(req.body)
})

export const start = () => {
  app.listen(3000, () => {
    console.log('server is on 3000')
  })
}
