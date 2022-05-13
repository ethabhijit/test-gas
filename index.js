const Web3 = require("web3");

const web3 = new Web3("https://mainnet-rpc.brisescan.com");

web3.eth.getGasPrice(function (e, gasPrice) {
	if(e) {
		console.log(e)
	}
	console.log(`gas price: ${gasPrice}`)
})