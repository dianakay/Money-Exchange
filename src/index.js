// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
	var result;
	if (currency>10000) {
		result={error: "You are rich, my friend! We don't have so much coins for exchange"};
	} else if (currency<1) {
		result={};
	} else {
		H=Math.trunc(currency/50);
		Q=Math.trunc((currency-H*50)/25);
		D=Math.trunc((currency-(H*50+Q*25))/10);
		N=Math.trunc((currency-(H*50+Q*25+D*10))/5);
		P=Math.trunc((currency-(H*50+Q*25+D*10+N*5))/1);
		resMass=[H,Q,D,N,P];
		result={};
		if (H!==0) {result.H=H;}
		if (Q!==0) {result.Q=Q;}
		if (D!==0) {result.D=D;}
		if (N!==0) {result.N=N;}
		if (P!==0) {result.P=P; }
	}
	
	return result;
}
