// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import 'bootstrap';

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// auto text

let textType = document.querySelector('.typeing')
let textArray = textType.dataset.typeingtext.split("")
let typeCount = 0;

let autoTypeText = () => {
    if(typeCount < textType.dataset.typeingtext.length){
        textType.innerHTML += textType.dataset.typeingtext.charAt(typeCount)
        typeCount++
        textArray = textType.dataset.typeingtext.split("")
    }else {
        textArray.pop()
        textType.innerHTML = textArray.join("")
        if(textArray.length == 0){
            typeCount = 0
        }
    }  
}
setInterval(() => {
    autoTypeText()
},150)

console.log("hello world")