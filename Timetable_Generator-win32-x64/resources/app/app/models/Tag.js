const { model , Schema} = require('mongoose')

const newTagSchema = new Schema({
  tagSelect: {
    type: String,
  },
  tagCodeSelect: {
    type: String,
  },
  relatedTagSelect: {
    type: String,
  },
  
})

module.exports = model('Tag', newTagSchema);
