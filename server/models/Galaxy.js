import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Galaxy = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true},
  imgUrl: { type: String, required: false}
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Galaxy;