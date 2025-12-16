import mongoose from 'mongoose'

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      require: false,
      default: '#000'
    }
  },
  {
    timestamps: true
  }
)

const tag = mongoose.model('Tag', tagSchema)

export default tag
