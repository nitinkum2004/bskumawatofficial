
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


