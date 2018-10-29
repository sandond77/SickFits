const Query = {
	dogs(parent, args, ctx, info){ //parent schema, arguments, context, info
		return [{ name: 'Snickers '}, { name: 'Sunny'}];
	}
};

module.exports = Query;
 