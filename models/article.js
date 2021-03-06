const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

var ArticleSchema = new mongoose.Schema({
	publicationID: {
		type: Number,
		required: true
	},
	title: {
		type: String,
		trim: true,
		required: true
	},
	author: {
		type: String,
		trim: true,
		required: true
	},
	published: {
		type: Date,
		required: true
	},
	timestamp: {
		type: Number,
		required: true
	},
	url: {
		type: String,
		trim: true,
		required: true
	}
}, {collection: 'article'});

ArticleSchema.plugin(mongoosePaginate);

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;

