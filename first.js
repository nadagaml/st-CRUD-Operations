
var productNameInp = document.getElementById("productNameInp"),//input 
    productPriceInp = document.getElementById("productPriceInp"),//input
    productCategoryInp = document.getElementById("productCategoryInp"),
    productDescInp = document.getElementById("productDescInp"),
    productsList,
    addBtn =  document.getElementById('addBtn'),
    currentIndex = 0, 
    demo = document.getElementById('demo');

if (localStorage.getItem("myProducts") == null)
{
    productsList = [];
}
else
{
    productsList = JSON.parse(localStorage.getItem("myProducts"));
    displayProducts();
}
var regex = /^[A-Z]/;
productNameInp.addEventListener('keyup', function (){

    if (regex.test(this.value))
    {
        this.classList.add('is-valid');
        this.classList.remove('is-invalid');
    } else {
    
        this.classList.remove('is-valid');
        this.classList.add('is-invalid');
    }

});

function addProduct() {
    var product =
    {
        name: productNameInp.value,
        price: productPriceInp.value,
        category: productCategoryInp.value,
        desc: productDescInp.value,
    }
    //console.log(product);
    productsList.push(product);
    localStorage.setItem("myProducts",JSON.stringify(productsList));
    displayProducts();
    //clearForm();


}

function displayProducts() {
    var cont = ``;

    for (var i = 0; i < productsList.length; i++) {
        cont += `<tr>
                <td>` + i + `</td>
                <td>` + productsList[i].name + `</td>
                <td>`+ productsList[i].price + `</td>
                <td>`+ productsList[i].category + `</td>
                <td>`+ productsList[i].desc + `</td>
                <td> <button id="updateBtn" onclick='updateForm(`+i+`)' class="btn btn-info">Update</button> </td>
                <td> <button id="deleteBtn" onclick='deleteProducts(`+i+`)' class="btn btn-danger">Delete</button> </td> 
            </tr>`;
    }

    document.getElementById("tableBody").innerHTML = cont;
}

function clearForm() {
    productNameInp.value = "";
    productPriceInp.value = "";
    productDescInp.value = "";
    productCategoryInp.value = "";
}
function updateForm(index)
{
    currentIndex = index;
    productNameInp.value = productsList[index].name;
    productPriceInp.value = productsList[index].price;
    productCategoryInp.value = productsList[index].category;
    productDescInp.value = productsList[index].desc;
    addBtn.innerHTML = "Update";
    document.body.scrollTop = demo.scrollTop;
}
addBtn.addEventListener('click', function ()
{

    if (addBtn.innerHTML == "Update")
    {
        updateProducts();
    }
    else
    {
        addProduct();
    }
});
function updateProducts()
{
    var product =
    {
        name: productNameInp.value,
        price: productPriceInp.value,
        category: productCategoryInp.value,
        desc: productDescInp.value,
    }
    productsList[currentIndex] = product;
    localStorage.setItem("myProducts", JSON.stringify(productsList));
    clearForm();
    addBtn.innerHTML = "Add Product";
    displayProducts();

}
function searchProducts(term)
{

    var searchResults = ``;

    for (var i = 0; i <productsList.length; i++)
    {
        if (productsList[i].name.toLowerCase().trim().includes(term.toLowerCase().trim()))
        {
            searchResults += `<tr>
                                <td>`+i+`</td>
                                <td>`+productsList[i].name+`</td>
                                <td>`+productsList[i].price+`</td>
                                <td>`+productsList[i].category+`</td>
                                <td>`+productsList[i].desc+`</td>
                                <td> <button id="updateBtn" class="btn btn-info">Update</button> </td>
                                <td> <button id="deleteBtn" class="btn btn-danger">Delete</button> </td>
                              </tr>`;
        }
        document.getElementById("tableBody").innerHTML = searchResults;
    }
}
function deleteProducts(index)
{
    productsList.splice(index, 1);
    localStorage.setItem("myProducts", JSON.stringify(productsList));
    displayProducts();
}
/*
var myImg = document.getElementById("myImg");

document.body.addEventListener('click', function (e) {


    myImg.style.left = e.clientX;
    myImg.style.top = e.clientY;

    console.log(myImg.style);

    /*var r = Math.round( Math.random()*255),
        g = Math.round( Math.random()*255),
        b = Math.round( Math.random()*255);

    this.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});

*/





