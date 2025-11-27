import Tag from "../models/tag.js";

export const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json({
      message: "Tags fetched successfully",
      data: tags,
    });
  } catch (error) {
    console.log("Error fetching tags:", error);
    res.status(500).json({
      message: "Failed to fetch tags",
      error: error.message,
    });
  }
};

export const createTag = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status.json("Tag name is required");
    }

    const newTag = new Tag({ name });
    await newTag.save();

    res.status(201).json({
      message: "Tag created successfully",
      data: newTag,
    });
  } catch (error) {
    console.log("Error creating tag:", error);
    res.status(500).json({
      message: "Failed to create tag",
      error: error.message,
    });
  }
};

export const updateTag = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Tag is not found");
    }

    const updateTag = await Tag.findByIdAndUpdate(id, req.body, { new: true });

    res.status(200).json({
      message: "Tag updated successfully",
      data: updateTag,
    });
  } catch (error) {
    console.log("Error updating tag:", error);
    res.status(500).json({
      message: "Failed to update tag",
      error: error.message,
    });
  }
};

export const deleteTag = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json("Tag is not found");
    }

    await Tag.findByIdAndDelete(id);

    res.status(200).json({
      message: "Tag deleted successfully",
    });
  } catch (error) {
    console.log("Error deleting tag:", error);
    res.status(500).json({
      message: "Failed to delete tag",
      error: error.message,
    });
  }
};
