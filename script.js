const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	let totalSum = document.createElement('tr');
	let table = document.querySelector('table');
	let prices =  document.querySelectorAll('.price');

	let sum = Array.from(prices).reduce((acc,price) => {
		return acc + (parseInt(price.textContent) || 0); 
	},0);
	totalSum.textContent = `total price ${sum}`;
	totalSum.setAttribute("colspan",3);
	totalSum.setAttribute('id','ans');
	totalSum.style.cssText = 'text-align:right';
	table.appendChild(totalSum);
    
};

getSumBtn.addEventListener("click", getSum);

