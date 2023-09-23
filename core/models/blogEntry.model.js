const { Schema, Types, model } = require('mongoose');

const BlogEntrySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  metadescription: {
    type: String
  },
  body: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true
  }
});

BlogEntrySchema.method('toJSON', function() {
  const { __v, ...object } = this.toObject();
  return object;
});

module.exports = model('BlogEntry', BlogEntrySchema);