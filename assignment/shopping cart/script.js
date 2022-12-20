let itemInput = document.getElementById('item-name-input');
let priceInput = document.getElementById('item-price-input');

let button = document.getElementById('add');

let table = document.getElementById('table');
let total = document.getElementById('total');

let priceArr = [];
function addItem() {
    let item = itemInput.value;
    let price = priceInput.value;
    let sum = 0;

    if (item !== '' && price !== "") {
        // you can start items to the screen
        let row = document.createElement('tr');
        priceArr.push(parseInt(price));
        // console.log(priceArr);
        row.innerHTML = `<td>${item} </td> <td>${price}</td> `
        
        for (let i = 0; i < priceArr.length; i++) {
            sum += priceArr[i];
        }
        
        console.log(sum);
        table.append(row);
        total.innerText = sum;
        
        itemInput.value = '';
        priceInput.value = '';
    }
}

button.addEventListener('click', addItem)