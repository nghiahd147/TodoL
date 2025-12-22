import Tag from '../models/tag.js'
import { RequestHandler } from 'express'
import { parseErrorMessage } from '../types/index.js'

export const getAllTags: RequestHandler = async (req, res) => {
  try {
    const tags = await Tag.find()
    res.status(200).json({
      message: 'Tags fetched successfully',
      data: tags
    })
  } catch (error) {
    console.log('Error fetching tags:', error)
    res.status(500).json({
      message: 'Failed to fetch tags',
      error: parseErrorMessage(error)
    })
  }
}

export const createTag: RequestHandler = async (req, res) => {
  try {
    const { name, color } = req.body

    if (!name) {
      return res.status(400).json({ message: 'Tag name is required' })
    }

    const newTag = new Tag({ name, color })
    await newTag.save()

    res.status(201).json({
      message: 'Tag created successfully',
      data: newTag
    })
  } catch (error) {
    console.log('Error creating tag:', error)
    res.status(500).json({
      message: 'Failed to create tag',
      error: parseErrorMessage(error)
    })
  }
}

export const updateTag: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const tag = await Tag.findById(id)

    if (!tag) {
      return res.status(400).json({
        message: 'Tag is not found'
      })
    }

    const { name, color } = req.body

    const updateTag = await Tag.findByIdAndUpdate(id, { name, color }, { new: true })

    res.status(200).json({
      message: 'Tag updated successfully',
      data: updateTag
    })
  } catch (error) {
    console.log('Error updating tag:', error)
    res.status(500).json({
      message: 'Failed to update tag',
      error: parseErrorMessage(error)
    })
  }
}

export const deleteTag: RequestHandler = async (req, res) => {
  try {
    const { id } = req.params

    const tagById = await Tag.findById(id)

    if (!tagById) {
      return res.status(404).json({
        message: 'Tag is not found'
      })
    }

    await Tag.findByIdAndDelete(id)

    res.status(200).json({
      message: 'Tag deleted successfully'
    })
  } catch (error) {
    console.log('Error deleting tag:', error)
    res.status(500).json({
      message: 'Failed to delete tag',
      error: parseErrorMessage(error)
    })
  }
}
