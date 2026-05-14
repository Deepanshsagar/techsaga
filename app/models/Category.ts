import mongoose from "mongoose";

const CustomFieldSchema = new mongoose.Schema({
  label: String,
  key: String,
  type: String,
  value: mongoose.Schema.Types.Mixed,
  required: Boolean,
});

const CategorySchema = new mongoose.Schema(
  {
    title: String,
    slug: String,
    description: String,

    bannerImage: String,

    customFields: [CustomFieldSchema],

    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Category ||
  mongoose.model("Category", CategorySchema);