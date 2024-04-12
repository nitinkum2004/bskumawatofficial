
// Child section
let child = document.querySelector(".child");
const childObjects = [
  { 
    heading: "Education Banner", 
    src: "img/posts/child/Education.png", 
    type: "ADD | POST",
    category: "Child Education"
  },
  { 
    heading: "Child Education", 
    src: "img/posts/child/AddChildEducationEng.jpg", 
    type: "ADD",
    category: "Child Education"
  },
  { 
    heading: "Child Education", 
    src: "img/posts/child/AddChildEducationHn.jpg", 
    type: "ADD",
    category: "Child Education"
  },
  { 
    heading: "Child Education", 
    src: "img/posts/child/AddPostChildEducationEng.jpg",  
    type: "ADD | POST",
    category: "Child Education"
  },
  { 
    heading: "Child Education", 
    src: "img/posts/child/AddPostChildEducationHn.jpg",  
    type: "ADD | POST",
    category: "Child Education"
  },
  
];


childObjects.forEach(object => {
  const listItem = document.createElement("div");
  listItem.innerHTML = `<div class="img-container">\
        <div class="top">\
          <img src="${object.src}" alt="" class="img-ad" loading="lazy" />\
        </div>\
        <div class="img-footer">\
          <div class="heading-subheading">\
            <h2>${object.heading}</h2>\
            <h5>${object.type}</h5>\
          </div>\
          <a\
            href="${object.src}"\
            download="${object.src}"\
            class="download-section"\
            >Download <img src="img/down.png" alt="" class="down"\
          /></a>\
        </div>\
      </div>`
  // listItem.innerHTML = `<div><img src="${object.color}" alt="" /><h1>${object.name}</h1>Price: $${object.price.toFixed(2)}</div>`
  child.appendChild(listItem);
});

/**************************************************************************** */
// financial section
let financial = document.querySelector(".financial");
const financialObjects = [
  { 
    heading: "Financial Dream English", 
    src: "img/posts/fine/PostAddDreamFineEng.jpg", 
    type: "ADD | POST",
    category: "Financial"
  },
  { 
    heading: "Financial Dream Hindi", 
    src: "img/posts/fine/PostAddDreamFineHn.jpg", 
    type: "ADD | POST",
    category: "Financial"
  },
  { 
    heading: "Financial Specialist English", 
    src: "img/posts/fine/PostAddFineSpeacialistEng.jpg", 
    type: "ADD | POST",
    category: "Financial"
  },
  { 
    heading: "Financial Specialist Hindi", 
    src: "img/posts/fine/PostAddFineSpeacialistHn.jpg", 
    type: "ADD | POST",
    category: "Financial"
  },
 
  
];
financialObjects.forEach(object => {
  const listItem = document.createElement("div");
  listItem.innerHTML = `<div class="img-container">\
        <div class="top">\
          <img src="${object.src}" alt="" class="img-ad" loading="lazy" />\
        </div>\
        <div class="img-footer">\
          <div class="heading-subheading">\
            <h2>${object.heading}</h2>\
            <h5>${object.type}</h5>\
          </div>\
          <a\
            href="${object.src}"\
            download="${object.src}"\
            class="download-section"\
            >Download <img src="img/down.png" alt="" class="down"\
          /></a>\
        </div>\
      </div>`
  // listItem.innerHTML = `<div><img src="${object.color}" alt="" /><h1>${object.name}</h1>Price: $${object.price.toFixed(2)}</div>`
  financial.appendChild(listItem);
});

/**************************************************************************** */
// Tax section
let tax = document.querySelector(".tax");
const taxObjects = [
  { 
    heading: "Tax Saving English", 
    src: "img/posts/tax/AddPostTaxSavingEng.jpg", 
    type: "ADD | POST",
    category: "Tax"
  },
  { 
    heading: "Tax Saving Hindi", 
    src: "img/posts/tax/AddPostTaxSavingHindi.jpg", 
    type: "ADD | POST",
    category: "Tax"
  },
  { 
    heading: "Tax Saving Hindi", 
    src: "img/posts/tax/AddPostTaxtSavingEngHn.jpg", 
    type: "ADD | POST",
    category: "Tax"
  },
  { 
    heading: "Tax Saving Hindi", 
    src: "img/posts/tax/PostAddFinePlannerEngHn.jpg", 
    type: "ADD | POST",
    category: "Tax"
  },
  
 
  
];
taxObjects.forEach(object => {
  const listItem = document.createElement("div");
  listItem.innerHTML = `<div class="img-container">\
        <div class="top">\
          <img src="${object.src}" alt="" class="img-ad" loading="lazy" />\
        </div>\
        <div class="img-footer">\
          <div class="heading-subheading">\
            <h2>${object.heading}</h2>\
            <h5>${object.type}</h5>\
          </div>\
          <a\
            href="${object.src}"\
            download="${object.src}"\
            class="download-section"\
            >Download <img src="img/down.png" alt="" class="down"\
          /></a>\
        </div>\
      </div>`
  // listItem.innerHTML = `<div><img src="${object.color}" alt="" /><h1>${object.name}</h1>Price: $${object.price.toFixed(2)}</div>`
  tax.appendChild(listItem);
});

/**************************************************************************** */

/**************************************************************************** */
// Tax section
let kanya_dan = document.querySelector(".kanya-dan");
const kanyaDanObjects = [
  { 
    heading: "Kanya-Dan English", 
    src: "img/posts/Kanyadan/AddKanyaDanEng.jpg", 
    type: "ADD",
    category: "Tax"
  },
  { 
    heading: "Kanya-Dan Hindi", 
    src: "img/posts/Kanyadan/AddKanyaDanHn.jpg", 
    type: "ADD",
    category: "Tax"
  },
    
];
kanyaDanObjects.forEach(object => {
  const listItem = document.createElement("div");
  listItem.innerHTML = `<div class="img-container">\
        <div class="top">\
          <img src="${object.src}" alt="" class="img-ad" loading="lazy" />\
        </div>\
        <div class="img-footer">\
          <div class="heading-subheading">\
            <h2>${object.heading}</h2>\
            <h5>${object.type}</h5>\
          </div>\
          <a\
            href="${object.src}"\
            download="${object.src}"\
            class="download-section"\
            >Download <img src="img/down.png" alt="" class="down"\
          /></a>\
        </div>\
      </div>`
  // listItem.innerHTML = `<div><img src="${object.color}" alt="" /><h1>${object.name}</h1>Price: $${object.price.toFixed(2)}</div>`
  kanya_dan.appendChild(listItem);
});

/**************************************************************************** */

let btnChild = document.querySelector("#btn-child")
let btnFinance = document.querySelector("#btn-finance")
let btnTax = document.querySelector("#btn-tax")
let btnKanyaDan = document.querySelector("#btn-kanya-dan")

function removeSelect(btn ,divName) {
  btn.classList.remove("btn-select");
  divName.classList.add('hide')
}

btnChild.addEventListener("click",()=>{
  removeSelect(btnFinance,financial)
  removeSelect(btnTax, tax)
  removeSelect(btnKanyaDan,kanya_dan)
  btnChild.classList.add("btn-select");
  child.classList.remove("hide");
})
btnFinance.addEventListener("click",()=>{
  removeSelect(btnChild,child)
  removeSelect(btnTax, tax)
  removeSelect(btnKanyaDan,kanya_dan)
  btnFinance.classList.add("btn-select");
  financial.classList.remove("hide");
})
btnTax.addEventListener("click",()=>{
  removeSelect(btnFinance,financial)
  removeSelect(btnChild, child)
  removeSelect(btnKanyaDan,kanya_dan)
  btnTax.classList.add("btn-select");
  tax.classList.remove("hide");
})
btnKanyaDan.addEventListener("click",()=>{
  removeSelect(btnFinance,financial)
  removeSelect(btnChild, child)
  removeSelect(btnTax, tax)
  btnKanyaDan.classList.add("btn-select");
  kanya_dan.classList.remove("hide");
})
