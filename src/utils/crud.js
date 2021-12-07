// import { modelNames } from 'mongoose'
export const getOne = model => async (req, res) => {
  const id = req.params.id
  const user = req.user._id
  try {
    const doc = await model
      .findOne({ _id: id, createdBy: user })
      .lean()
      .exec()
    if (!doc) {
      return res.status(404).end()
    }
    return res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getMany = model => async (req, res) => {
  const user = req.user._id
  try {
    const doc = await model
      .find({ createdBy: user })
      .lean()
      .exec()
    if (!doc) {
      return res.status(404).end()
    }
    return res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const createOne = model => async (req, res) => {
  const createdBy = req.user._id
  try {
    const doc = await model.create({ ...req.body, createdBy })
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const updateOne = model => async (req, res) => {
  const id = req.params.id
  const user = req.user._id
  try {
    const doc = await model
      .findOneAndUpdate(
        { createdBy: user, _id: id },
        req.body,
        { new: true } // to send back the new updated object
      )
      .lean()
      .exec()
    if (!doc) {
      return res.status(400).end()
    }
    return res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const removeOne = model => async (req, res) => {
  const id = req.params.id
  const user = req.user._id
  try {
    const doc = await model.findOneAndRemove({ createdBy: user, _id: id })
    if (!doc) {
      return res.status(400).end()
    }
    return res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const crudControllers = model => ({
  removeOne: removeOne(model),
  updateOne: updateOne(model),
  getMany: getMany(model),
  getOne: getOne(model),
  createOne: createOne(model)
})
