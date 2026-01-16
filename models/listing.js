const mongoose = require("mongoose");
const Review = require("./review.js");
const review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    url: String,
    filename: String
  },
  price: {
    type: Number,
    min: 0,
  },
  location:String,
  country: String,
  review: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },
  geometry:{
     lat:Number,
     lng:Number
  },
  category: { 
    type: String, 
    required: true, 
    enum: ['trending', 'rooms', 'iconic-cities', 'mountain','castles','pools','camping','farms','artic']
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.review } });
  }
});

const Listing = new mongoose.model("Listing", listingSchema);

module.exports = Listing;
