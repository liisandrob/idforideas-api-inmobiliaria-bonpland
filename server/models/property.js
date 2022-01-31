const mongoose = require('mongoose');

const { Schema } = mongoose;

const requiredString = {
  type: String,
  required: true
};

const defaultBoolean = {
  type: Boolean,
  default: false
};

const requiredNumber = {
  type: Number,
  required: true
};

const propertySchema = new Schema ({
  code: {
    type: String,
    required: true,
    unique: true
  },
  images: [String],
  highlight: defaultBoolean,
  rooms: requiredNumber,
  country: requiredString,
  city: requiredString,
  surface: requiredNumber,
  price: requiredNumber,
  contract: requiredString,
  status: requiredString
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;