// models/meta.model.ts

import mongoose, {
  Schema,
  model,
  models,
} from "mongoose";

const metaSchema = new Schema(
  {
    url: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    keywords: {
      type: String,
      default: "",
    },

    twitterCard: {
      type: String,
      default: "summary_large_image",
    },

    twitterSite: {
      type: String,
      default: "",
    },

    twitterCreator: {
      type: String,
      default: "",
    },

    schemaData: {
      type: String,
      default: "",
    },

    ogImage: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const MetaModel =
  models.Meta ||
  model("Meta", metaSchema);

export default MetaModel;