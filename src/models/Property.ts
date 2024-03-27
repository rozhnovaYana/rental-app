import { Schema, model } from "mongoose";

const PropertySchema = new Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  description: String,
  location: {
    street: String,
    city: String,
    state: String,
    zipcode: String,
  },
  beds: {
    type: Number,
    required: true,
  },
  baths: {
    type: Number,
    required: true,
  },
  square_feet: {
    type: Number,
    required: true,
  },
  amenities: [String],
  rates: {
    weekly: Number,
    monthly: Number,
  },
  seller_info: {
    name: String,
    email: String,
    phone: String,
  },
  images: [String],
  is_featured: Boolean,
});
export default model("Property", PropertySchema);
