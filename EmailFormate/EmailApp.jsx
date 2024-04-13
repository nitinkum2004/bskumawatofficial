let welEmail = document.querySelector('.welcome-email')
let nameUser = '---'
welEmail.innerHTML = `<div class="email-section">
                <div class="copy-img">
                    <img src="../img/icons8-copy-96.png" alt="" title="copy" />
                </div>
                <div class="content">
                    <code >
              Dear ${nameUser},
              <br />
              We are thrilled to welcome you to DS Financial Services. As a new
              member, you are now a part of our family, and we want to make sure
              you feel it like a familier. We know that every member is unique,
              so we want to learn more about you and your needs.
              <br />
              Our team will contact you asap.
              <br />
              Thank You,

              <br />
              <br />
              प्रिय ${nameUser},
              <br />
              हम डीएस फाइनेंशियल सर्विसेज में आपका स्वागत करते हुए रोमांचित हैं।
              एक नए सदस्य के रूप में, अब आप हमारे परिवार का हिस्सा हैं, और हम यह
              सुनिश्चित करना चाहते हैं कि आप इसे एक परिवार की तरह महसूस करें। हम
              जानते हैं कि प्रत्येक सदस्य अद्वितीय है, इसलिए हम आपके और आपकी
              आवश्यकताओं के बारे में और अधिक जानना चाहते हैं।
              <br />
              हमारी टीम यथाशीघ्र आपसे संपर्क करेगी।
              <br />
              धन्यवाद,
            </code>
                </div>
            </div>`

let coming = document.querySelector(".coming")

let copyBtn = document.querySelector('.copy-img');


let getNameBtn = document.querySelector('.submit-name-btn');
let nameInput = document.querySelector('#input-name')


function translateToHindi(text) {
  const apiKey = 'AIzaSyCwIHz-PkYl41NsW8ketgay8sr4ZRp7uRY'; // Replace with your actual API key
  const url = `https://www.googleapis.com/language/translate/v2?key=${apiKey}`;

  const data = {
    q: text,
    target: 'hi' // Hindi language code
  };

  return fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(response => response.json())
  .then(data => data.data.translations[0].translatedText)
  .catch(error => console.error('Error translating text:', error));
}





copyBtn.addEventListener('click', async()=>{
    
    try {
        let copyText = document.querySelector('.content').textContent
        await navigator.clipboard.writeText(copyText)
        alert("Copy text!!")
    } catch (err) {
        alert("Failed To Copy");
    }
})

// getNameBtn.addEventListener('click', ()=>{
//     console.log(nameInput.value);
//     nameUser = nameInput.value
    
//     // translateToHindi('nitin Kumawat')
//     // .then(hindiText => {
//     //   console.log(hindiText);;
//     // });
// })

    
