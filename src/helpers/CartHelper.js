class CartHelper{
	static addProduct(product){
		var cart = CartHelper.getAllProducts();

		for(var i = 0; i < cart.length; i++){
			if(cart[i].product.id == product.id){
				cart[i].quantity++;
				localStorage.setItem('cart', JSON.stringify(cart));
				return;
			}
		}

		cart.push({product: product, quantity: 1});
		localStorage.setItem('cart', JSON.stringify(cart));
	}

	static removeProduct(product){
		var cart = CartHelper.getAllProducts();

		for(var i = 0; i < cart.length; i++){
			if(cart[i].product.id == product.id){
				cart.splice(i, 1);
			}
		}

		localStorage.setItem('cart', JSON.stringify(cart));
	}

	static getAllProducts(){
		return JSON.parse(localStorage.getItem('cart')) || [];
	}
}

export default CartHelper;