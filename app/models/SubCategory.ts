// models/SubCategory.ts

import mongoose from "mongoose";

const CustomFieldSchema = new mongoose.Schema({
  label: String,
  key: String,
  type: String,
  value: mongoose.Schema.Types.Mixed,
  required: Boolean,
});

const SubCategorySchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    title: String,

    slug: String,

    customFields: [CustomFieldSchema],
  },
  { timestamps: true }
);

const SubCategory =
  mongoose.models.SubCategory ||
  mongoose.model(
    "SubCategory",
    SubCategorySchema
  );

export default SubCategory;