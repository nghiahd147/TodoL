import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: false
    },
    color: {
      type: String,
      required: false,
      default: '#000'
    }
  },
  {
    timestamps: true
  }
)

const Category = mongoose.model('Category', categorySchema)

export default Category
