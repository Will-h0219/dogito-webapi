const { Schema, model } = require('mongoose');

const CategorySchema = new Schema({
  name: {
    type: String,
    require: true
  },
  subcategories: [{
    type: Schema.Types.ObjectId,
    ref: 'Subcategory'
  }]
});

CategorySchema.method('toJSON', function() {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model('Category', CategorySchema);