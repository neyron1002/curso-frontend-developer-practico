const navbarEmail = document.querySelector('#email');
const desktopMenu = document.querySelector('.desktop-menu');

const btnMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const btnShoppingCart = document.querySelector('.navbar-shopping-cart')
const asideProductDetail = document.querySelector('#shoppingCart');

const productDisplay = document.querySelector('#productDisplay')
const btnCloseProductDisplay = document.querySelector('.product-detail-close')

btnCloseProductDisplay.addEventListener('click', closeProductDisplay);
function closeProductDisplay(){
    productDisplay.classList.add('hidden');
}

//navbarEmail.addEventListener('mouseover', toggleDesktopMenu);
//navbarEmail.addEventListener('mouseout', toggleDesktopMenu);

navbarEmail.addEventListener('click', toggleDesktopMenu)

//desktopMenu.addEventListener('mouseover')

//console.log('js')
function toggleDesktopMenu(){
    
    // console.log('QUI')
    // const isHidden = desktopMenu.getAttribute('class').includes('hidden');

    // if(isHidden) 
    // {
    //     desktopMenu.setAttribute('class', 'desktop-menu')
    // }
    // else
    // {
    //     desktopMenu.setAttribute('class', 'desktop-menu hidden')
    // }    
  
    desktopMenu.classList.toggle('hidden');

    if (!asideProductDetail.classList.contains('hidden')){
        asideProductDetail.classList.add('hidden');
    }

    if(!productDisplay.classList.contains('hidden')){
        productDisplay.classList.add('hidden');
    }

}


//btnMobileMenu.addEventListener('click', toggleMobileMenu);
btnMobileMenu.onclick = toggleMobileMenu;

function toggleMobileMenu(){
    mobileMenu.classList.toggle('hidden');

    if(!asideProductDetail.classList.contains('hidden'))
    {
        asideProductDetail.classList.add('hidden');
    }

    if(!productDisplay.classList.contains('hidden')){
        productDisplay.classList.add('hidden');
    }
}

btnShoppingCart.addEventListener('click', toggleAsideProductDetail);

function toggleAsideProductDetail(){
    
    if (!desktopMenu.classList.contains('hidden'))
    {
        desktopMenu.classList.add('hidden');
    }  

    if(!mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.add('hidden');
    }

    if(!productDisplay.classList.contains('hidden')){
        productDisplay.classList.add('hidden');
    }

    asideProductDetail.classList.toggle('hidden');

}

function toogleAsideProductDisplay(event){
        
    if (!desktopMenu.classList.contains('hidden'))
    {
        desktopMenu.classList.add('hidden');
    }  

    if(!mobileMenu.classList.contains('hidden')){
        mobileMenu.classList.add('hidden');
    }

    if (!asideProductDetail.classList.contains('hidden')){
        asideProductDetail.classList.add('hidden');
    }

    productDisplay.classList.toggle('hidden');


    const product = event.srcElement;

    const prName = document.querySelector('#prName');
    prName.innerHTML = product.prName;

    const prImg = document.querySelector('#prImg');
    prImg.setAttribute('src',product.prImg);

    const prPrice = document.querySelector('#prPrice');
    prPrice.innerText = product.prPrice;
    
}

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>


function createComponentProductCard({ price, name, img })
{
    const divProductCard = document.createElement('div');
    divProductCard.classList.add('product-card');

    const imgProductCard = document.createElement('img');
    imgProductCard.setAttribute('src',img);

    const divProductInfo = document.createElement('div');
    divProductInfo.classList.add('product-info');

    const divProductInfoDetais = document.createElement('div');

    const pProductInfoPrice = document.createElement('p')
    pProductInfoPrice.innerText = `$ ${price}`;

    const pProductInfoName = document.createElement('p');
    pProductInfoName.innerText = name;

    const figureProductInfo = document.createElement('figure');

    const imgProductInfoAddToCart = document.createElement('img');
    imgProductInfoAddToCart.setAttribute('src','./icons/bt_add_to_cart.svg');

    imgProductInfoAddToCart.prName = name;
    imgProductInfoAddToCart.prPrice = price;
    imgProductInfoAddToCart.prImg = img;

    imgProductInfoAddToCart.addEventListener('click', toogleAsideProductDisplay);

    divProductCard.appendChild(imgProductCard);
    divProductCard.appendChild(divProductInfo);

    divProductInfo.appendChild(divProductInfoDetais);
    divProductInfoDetais.appendChild(pProductInfoPrice);
    divProductInfoDetais.appendChild(pProductInfoName);

    divProductInfo.appendChild(figureProductInfo);
    figureProductInfo.appendChild(imgProductInfoAddToCart);

    figureProductInfo.appendChild(imgProductInfoAddToCart);
    
    return divProductCard;

}

function listProduct(arrayProduct){

    const cardsContainer = document.querySelector('.cards-container');

    for(product of arrayProduct){
        const productCard = createComponentProductCard(product);
        cardsContainer.appendChild(productCard);     
    }

}


const products = [
    { name: 'Jordar Air', price : '520.000', img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_600.jpg' },
    { name: 'Vive 100', price : '2.000', img: 'https://jumbocolombiaio.vtexassets.com/arquivos/ids/184952-800-600?v=637813976397100000&width=800&height=600&aspect=true' },
    { name: 'Six Pack Coronita', price : '28.000', img: 'https://dislicoresqa.vtexassets.com/arquivos/ids/243085/370049-CERVEZA_CORONITA_EXTRA_SIXPACK_10.png?v=637888779315930000' },
    { name: 'Jordar Air', price : '520.000', img: 'https://cdn-images.farfetch-contents.com/14/43/69/43/14436943_21290505_600.jpg' },

]

listProduct(products);