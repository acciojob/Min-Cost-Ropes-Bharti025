function mincost(arr)
{ 
//write your code here
// return the min cost
let mincost=0;
	arr.sort((a,b)=>
		a-b);
	let totalcost=0;
	while(arr.length>1){
		let min1=arr.shift();
		let min2=arr.shift();
		let cost=min1+min2;
		arr.push(min1+min2);
		arr.sort((a,b)=>
		a-b);
		mincost+=cost;
	}
return mincost;
}

module.exports=mincost;
