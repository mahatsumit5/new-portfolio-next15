import { Schema, models, model } from "mongoose";
const tagsSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});
const Tags = models.Tags || model("Tags", tagsSchema);
export default Tags;
