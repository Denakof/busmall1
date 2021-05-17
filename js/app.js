'use strict';
let attempts = 0;
let maxAttempts = 25;
let attemptsEl = document.getElementById('attempts');
let product = [];
function Busmall(productName) {
    //'cruisin-goat.jpg'.split('.') >>['cruisin-goat','jpg']
    this.productName = productName.split('.')[0];
    this.source = 'images/' + productName;
    this.clicks = 0;
    this.views = 0;
    product.push(this);
}

// let goat1 = new Busmall('cruisin-goat', 'images/cruisin-goat.jpg');
// let goat2 = new Busmall('float-your-goat.jpg', 'images/float-your-goat.jpg');


let productImages = ['bag.jpg', 'banana.jpg', 'bathroom.jpg',
'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg',
'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg',
'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'water-can.jpg',
'wine-glass.jpg'];

for (let i = 0; i < productImages.length; i++) {
    new Busmall(productImages[i]);
}

function generateImage() {
    //0-1 >> 0-7
    return Math.floor(Math.random() * product.length);
}
// console.log(product);
// generateImage();

let lImgEl = document.getElementById('leftImg');
let rImgEl = document.getElementById('rightImg');
let mImgEl = document.getElementById('middleImg');


let leftImgIndex;
let rightImgIndex;
let middleImgIndex;

function renderImg() {
    leftImgIndex = generateImage();
    rightImgIndex = generateImage();
    middleImgIndex = generateImage();


    while (leftImgIndex === rightImgIndex || middleImgIndex === rightImgIndex || leftImgIndex === middleImgIndex ){
        leftImgIndex = generateImage();
        rightImgIndex = generateImage();
        middleImgIndex = generateImage();
    }

    lImgEl.setAttribute('src', product[leftImgIndex].source);
    lImgEl.setAttribute('title', product[leftImgIndex].source);
    product[leftImgIndex].views++;

    rImgEl.setAttribute('src', product[rightImgIndex].source);
    rImgEl.setAttribute('title', product[rightImgIndex].source);
    product[rightImgIndex].views++;

    mImgEl.setAttribute('src', product[middleImgIndex].source);
    mImgEl.setAttribute('title', product[middleImgIndex].source);
    product[middleImgIndex].views++;

    attemptsEl.textContent = attempts;
 
}
renderImg();

lImgEl.addEventListener('click', handelClicks);
rImgEl.addEventListener('click', handelClicks);
mImgEl.addEventListener('click', handelClicks);


function handelClicks(event) {
    attempts++;
    if (attempts <= maxAttempts) {
        console.log(event.target.id)
        if (event.target.id === 'leftImg') {
            product[leftImgIndex].clicks++;
        } else if (event.target.id === 'rightImg') {
            product[rightImgIndex].clicks++;
        }
        else if (event.target,id === 'middleImg'){
        product[middleImgIndex].clicks++;}
        renderImg();
    } else {
        let ulEl = document.getElementById('results');
        let liEl;
        for (let i = 0; i < product.length; i++) {
            liEl = document.createElement('li');
            ulEl.appendChild(liEl);
            liEl.textContent = `${product[i].productName} has ${product[i].views} views and has ${product[i].clicks} clicks.`
        
    }
        lImgEl.removeEventListener('click', handelClicks);
        rImgEl.removeEventListener('click', handelClicks);
        mImgEl.removeEventListener('click', handelClicks);

    }

}
let button1 = getElementById('CLICKBUTTON');
button1.addEventListener('click', BUTTONFUNCTION);

function BUTTONFUNCTION (){
    let ulEl = document.getElementById('results');
    let liEl;
    for (let i = 0; i < product.length; i++) {
        liEl = document.createElement('li');
        ulEl.appendChild(liEl);
        liEl.textContent = `${product[i].productName} has ${product[i].views} views and has ${product[i].clicks} clicks.`
    } 
    button1.removeEventListener('click', BUTTONFUNCTION);

}