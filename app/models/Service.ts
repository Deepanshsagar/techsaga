// models/Service.ts

import mongoose from "mongoose";

const CustomFieldSchema = new mongoose.Schema({
  label: String,
  key: String,
  type: String,
  value: mongoose.Schema.Types.Mixed,
  required: Boolean,
});

const ServiceSchema = new mongoose.Schema(
  {
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },

    subCategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory",
    },

    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    shortDescription: String,

    customFields: [CustomFieldSchema],

    seo: {
      metaTitle: String,
      metaDescription: String,
    },
  },
  { timestamps: true }
);

const Service =
  mongoose.models.Service ||
  mongoose.model("Service", ServiceSchema);

export default Service;