//your code here
let pricearray=[];
let btn = document.getElementById("addBtn");
btn.addEventListener('click',(event)=>{
	event.preventDefault();
	let input = document.getElementById("item-name-input").value;
	let price = document.getElementById("item-price-input").value;
	let tableBody=document.getElementById("tableBody"); 
	
	console.log(input);
	console.log(price);
	if(input=="" || price==""){
		alert("Please enter valid data");
	}

	tableBody.innerHTML+=`
	<tr>
		<td>${input}</td>
		<td>${price}</td>
	</tr>`
	
	handleTotal(pricearray, price);
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