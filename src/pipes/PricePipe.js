const PricePipe = (val) => {
	return val.toFixed(2).toString().replace('.', ',');
}

export default PricePipe;