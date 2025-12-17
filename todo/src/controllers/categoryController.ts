import Category from '../models/categories.js'
import { RequestHandler } from 'express'
import { parseErrorMessage } from '../types/index.js'

export const getListCategory: RequestHandler = async (req, res) => {
  try {
    // const page = req.query.page || 1;
    // const limit = req.query.limit || 10;
    // const skip = (page - 1) * limit;
    // const search = req.query.search || "";

    // const query = search ? { name: { $regex: search, $options: "i" } } : {};

    const categories = await Category.find()
    // query
    // .skip(skip).limit(limit);

    const total = await Category.countDocuments()
    // const totalPages = Math.ceil(total / limit);

    res.status(200).json({
      data: categories,
      total,
      // totalPages,
      message: 'Categories fetched successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Server Error' })
  }
}

export const getCategoryById: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const categoryById = await Category.findById(id)

    if (!categoryById) {
      return res.status(404).json({ message: 'Category is not defied' })
    }

    res.status(200).json({
      data: categoryById,
      message: 'Category fetched successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Server Error', error: parseErrorMessage(error) })
  }
}

export const createCategory: RequestHandler = async (req, res) => {
  try {
    const { name, description, color } = req.body
    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' })
    }

    const createdCategory = new Category({ name, description, color })
    await createdCategory.save()

    res.status(201).json({
      data: createdCategory,
      message: 'Category created successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Server Error', error: parseErrorMessage(error) })
  }
}

export const updateCategory: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const categoryById = await Category.findById(id)

    if (!categoryById) {
      return res.status(404).json({ message: 'Category is not defied' })
    }

    const { name, description, color } = req.body

    if (!name || !description) {
      return res.status(400).json({ message: 'Name and description are required' })
    }

    const updatedCategory = await Category.findByIdAndUpdate(id, { name, description, color }, { new: true })

    res.status(200).json({
      data: updatedCategory,
      message: 'Category updated successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Server Error', error: parseErrorMessage(error) })
  }
}

export const deleteCategory: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const categoryById = await Category.findById(id)

    if (!categoryById) {
      return res.status(404).json({ message: 'Category is not defied' })
    }

    await Category.findByIdAndDelete(id)

    res.status(200).json({
      message: 'Category deleted successfully'
    })
  } catch (error) {
    console.log('error', error)
    res.status(500).json({ message: 'Server Error', error: parseErrorMessage(error) })
  }
}
