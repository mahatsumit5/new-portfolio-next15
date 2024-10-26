import { Schema, models, model, Document } from "mongoose";
const stringAndReq = { type: String, required: true };
const projectSchema = new Schema({
  status: { ...stringAndReq },
  image: stringAndReq,
  name: stringAndReq,
  description: stringAndReq,
  chrome: stringAndReq,
  tags: [
    {
      _id: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: "Tags",
        index: 1,
      },
      name: { type: String, required: true },
    },
  ],
  githubUrl: stringAndReq,
});
const Project =
  models.PersonalProject || model("PersonalProject", projectSchema);
export default Project;

// Define the project interface
export interface IProject extends Document {
  status: string;
  image: string;
  name: string;
  description: string;
  chrome: string;
  tags: ITag[];
  githubUrl: string;
}
// Define the tag interface
interface ITag {
  _id: Schema.Types.ObjectId;
  name: string;
}
