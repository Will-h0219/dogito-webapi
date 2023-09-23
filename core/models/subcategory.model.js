const { Schema, model } = require('mongoose');

const SubcategorySchema = new Schema({
  name: {
    type: String,
    required: true
  } 
});

SubcategorySchema.method('toJSON', function() {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model('Subcategory', SubcategorySchema);