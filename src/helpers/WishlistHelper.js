const token = sessionStorage.getItem('token') || null;

class WishlistHelper{
	static getWishlists(){
		if(token){

		}else{
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
	}

	static createWishlist(){

	}

	static getWishlistById(id){

	}

	static deleteWishlistById(wishlist){
		if(token){

		}else{
			var wishlists = WishlistHelper.getWishlists();

			for(var i = 0; i < wishlists.length; i++){
				if(wishlists[i].id == wishlist.id){
					wishlists.splice(i, 1);
					localStorage.setItem('wishlists', JSON.stringify(wishlists));
					return;
				}
			}
		}
	}

	static updateWishlistById(wishlist){

	}

	static searchWishlists(query){

	}

	static addProductsToWishlist(wishlist, products){

	}

	static getProductsOfWishlist(wishlist){

	}

	static removeProductsFromWishlist(wishlist, products){

	}
}


export default WishlistHelper;