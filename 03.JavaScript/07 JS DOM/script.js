console.log(document);

console.log(document.title);
document.title = "Changed Title Name";
console.log(document.title);

const h1Tag = document.querySelector("h1");
console.log(h1Tag);

h1Tag.innerText = "Hello How are You ?";
console.log(h1Tag.innerText);

h1Tag.innerHTML = `<span style = "color : red">DOM</span>`;


// Apply Styles

const h2Tag = document.querySelector("#msg");
h2Tag.style.backgroundColor = "gray";
h2Tag.style.color = "teal";
h2Tag.style.fontFamily = "Arial, sans-serif";
h2Tag.style.padding = "10px";


// Change Image Using OnClick

const changeImage = () => {
    const image = document.querySelector("#food");

    // Attribute change

    const imageUrl =
    "https://tse3.mm.bing.net/th?id=OIP.fBe1gguUHhEyZuradl-J6QAAAA&pid=Api&P=0&h=180";
    
    image.setAttribute("src", imageUrl);
}


// Change Password box to Text Box

const showPass = () => {
    const inputElem = document.querySelector("#inp");
    const btnElem = document.querySelector("#btn");

    if(inputElem.getAttribute("type") == "password"){
        btnElem.innerText = "Hide Password";
        inputElem.setAttribute("type", "text");
    }else{
        btnElem.innerText = "Show Password";
        inputElem.setAttribute("type", "password");
    } 
}


// Apply Styles Using OnClick

const changeStyle = () => {
  const message = document.querySelector("#msg2");
  message.style.backgroundColor = "gray";
  message.style.color = "teal";
  message.style.fontFamily = "Arial, sans-serif";
  message.style.padding = "10px";
};


