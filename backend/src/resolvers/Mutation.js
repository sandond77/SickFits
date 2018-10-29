const Mutations = { 
	async createItem(parents, args, ctx, info){

		const item = await ctx.db.mutation.createItem ({
			data: {
				...args //using es6 to spread the arguments
			}
		}, info);

		console.log(item);
		
		return item;
	} 
	
};

module.exports =  Mutations;
