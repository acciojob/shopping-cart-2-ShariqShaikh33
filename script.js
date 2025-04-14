//your code here
let pricearray=[];
let btn = document.getElementById("addBtn");
btn.addEventListener('click',(event)=>{
	event.preventDefault();
	let input = document.getElementById("item-name-input");
	let price = document.getElementById("item-price-input");
	let tableBody=document.getElementById("tableBody"); 
	
	console.log(input.value);
	console.log(price.value);
	if(input.value=="" || price.value==""){
		alert("Please enter valid data");
	}

	tableBody.innerHTML+=`
	<tr>
		<td data-ns-test="item-name">${input.value}</td>
		<td data-ns-test="item-price">${price.value}</td>
	</tr>`
	
	handleTotal(pricearray, price.value);
	
	input.value="";
	price.value="";
})


function handleTotal(pricearray, price){
	let total=document.getElementById("totalPrice");
	pricearray.push(price);
	let totalsum=0;
	for(let i=0;i<pricearray.length;i++){
		totalsum+=parseInt(pricearray[i]);
	}
	total.innerHTML=totalsum
}