import { Router } from 'express'
import controllers from './item.controllers'
const router = Router()

// const mockController = (req, res) => {
//   res.json({ message: 'ok' })
// }

// /api/item
router
  .route('/')
  .get(controllers.getOne)
  .post(controllers.createOne)
// .get(mockController)
// .post(mockController)

// /api/item/:id
router
  .route('/:id')
  // .get(mockController)
  // .put(mockController)
  // .delete(mockController)
  .get(controllers.getOne)
  .put(controllers.updateOne)
  .delete(controllers.removeOne)

export default router
