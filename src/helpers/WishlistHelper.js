class WishlistHelper{
	static getWishlists(){
		const wishlists = [{
			id: 1,
			name: 'Wishlist #1',
			UserEmail: 'h.teker@live.nl'
		},{
			id: 2,
			name: 'Wishlist #2',
			UserEmail: 'h.teker@live.nl'
		},{
			id: 3,
			name: 'Wishlist #3',
			UserEmail: 'h.teker@live.nl'
		}];

		// Remove part above, is only for testing

		return JSON.parse(localStorage.getItem('wishlists')) || wishlists;
	}

	static createWishlist(form){
		var wishlists = WishlistHelper.getWishlists();
		wishlists.push({id: wishlists.length, name: form.name});
		localStorage.setItem('wishlists', JSON.stringify(wishlists));

		return {status: 201};
	}

	static getWishlistById(id){
		var wishlists = WishlistHelper.getWishlists();

		for(var i = 0; i < wishlists.length; i++){
			if(wishlists[i].id == id){
				return wishlists[i];
			}
		}
	}

	static deleteWishlistById(wishlist){
		var wishlists = WishlistHelper.getWishlists();

		for(var i = 0; i < wishlists.length; i++){
			if(wishlists[i].id == wishlist.id){
				wishlists.splice(i, 1);
				localStorage.setItem('wishlists', JSON.stringify(wishlists));
				return;
			}
		}
	}

	static updateWishlistById(id, form){
		var wishlists = WishlistHelper.getWishlists();

		for(var i = 0; i < wishlists.length; i++){
			if(wishlists[i].id == id){
				wishlists[i].name = form.name;
				localStorage.setItem('wishlists', JSON.stringify(wishlists));
			}
		}

		return {status: 200};
	}

	static searchWishlists(query){

	}

	static addProductToWishlistById(id, product){
		var wishlistProducts = JSON.parse(localStorage.getItem('wishlistProducts')) || [];

		// Check if wishlist exists or create
		for(var i = 0; i < wishlistProducts.length; i++){
			if(wishlistProducts[i].id == id){
				// Wishlist exists
				// Check if product exists or create
				for(var j = 0; j < wishlistProducts[i].products.length; j++){
					if(wishlistProducts[i].products[j].id == product.id){
						return;
					}
				}

				wishlistProducts[i].products.push(product);
				localStorage.setItem('wishlistProducts', JSON.stringify(wishlistProducts));
				return;
			}
		}

		wishlistProducts.push({
			id: id,
			products: [product]
		});
		localStorage.setItem('wishlistProducts', JSON.stringify(wishlistProducts));
	}

	static getProductsOfWishlistById(id){
		var wishlistProducts = JSON.parse(localStorage.getItem('wishlistProducts')) || [];

		for(var i = 0; i < wishlistProducts.length; i++){
			if(wishlistProducts[i].id == id){
				return wishlistProducts[i].products || [];
			}
		}

		return [];
	}

	static removeProductFromWishlist(wishlist, products){

	}
}


export default WishlistHelper;