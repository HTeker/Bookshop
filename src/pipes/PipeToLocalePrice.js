const PipeToLocalePrice = (val) => {
	return '€ ' + val.toFixed(2).toString().replace('.', ',');
}

export default PipeToLocalePrice;