import { Router } from 'express'
import controllers from './item.controllers'

const router = Router()

// const mockController = (req, res) => {
//   res.json({ message: 'ok' })
// }

// /api/item
router
  .route('/')
  .get(controllers.getMany)
  .post(controllers.createOne)
// .get(mockController)
// .post(mockController)

// /api/item/:id
router
  .route('/:id')
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)
// .get(mockController)
// .put(mockController)
// .delete(mockController)

export default router
