const Query = {
	dogs(parent, args, ctx, info){ //parent schema, arguments, context, info
		global.dogs = global.dogs || [];
		return global.dogs;
	}
};

module.exports = Query;
 