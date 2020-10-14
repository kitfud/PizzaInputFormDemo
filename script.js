var size = parseInt(document.getElementById('size-input').value)

var crust = document.getElementById('crust-input').value

var sauce = document.getElementsByName('sauce')
//sauce.forEach(node => console.log(node.checked))

var toppings = document.getElementsByName('topping')
//toppings.forEach(node=>console.log(node.checked))

var extra = document.getElementById('extra-cheese-input')
//console.log(extra.checked)



function onSubmit(){

if(validate()){
  alert(JSON.stringify(buildOrder()));
}

}

function validate(){

var zip = parseInt(document.getElementById('zip-input').value)
var inputStyle = document.getElementById('topping')

  if(zip !== 98102){
    alert("you need to order from 98102")
    return false;
  }
  var numToppings = []
 for(var i= 0; i<toppings.length;i++){
   if(toppings[i].checked){
     numToppings.push(toppings[i])
   }
 }

if(numToppings.length >2){
  alert("you can only have 2 or less toppings")
  return false;
}

return true;
}

function checkInput(){
  var value = parseInt(document.getElementById('zip-input').value)
  var inputField = document.getElementById('zip-input')

if( value !== 98102){
inputField.setAttribute("style", "background: red;");
  }
  else{
inputField.setAttribute("style", "background: green;");
  }

}

function buildOrder(){
var order = {}

order.size = parseInt(document.getElementById('size-input').value);
order.crust = document.getElementById('crust-input').value;
/* Get radio button input */
var sauceRadios = document.getElementsByName('sauce');
for (var i = 0; i < sauceRadios.length; i++) {
if (sauceRadios[i].checked) {
order.sauce = sauceRadios[i].value;
break;
}
}
/* Get toppings as an array */
order.toppings = []; /* Start with empty array */
var toppingCheckboxes = document.getElementsByName('topping');


for (i = 0; i < toppingCheckboxes.length; i++) {

if (toppingCheckboxes[i].checked) {
order.toppings.push(toppingCheckboxes[i].value);
}

}
/* Lets get the extras individually */
order.extraCheese = document.getElementById('extra-cheese-input').checked;
order.zip = parseInt(document.getElementById('zip-input').value);
return order;

}