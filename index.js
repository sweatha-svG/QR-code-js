const wrapper=document.querySelector('.wrapper'),
qrInput=wrapper.querySelector('.form Input'),
generateBtn=wrapper.querySelector('.form button'),
qrImg=wrapper.querySelector('.qr-code img');
generateBtn.addEventListener("click",()=>{
    let qrValue=qrInput.value;
    if(!qrValue) return;//if the input is empty then return from here
    //getting
    generateBtn.innerText="Generating QR code ....";
    //getting a QR code of user entered value using the qrserver
    //api and passing the api returned img src to qrImg
    qrImg.src= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.addEventListener("load",()=>{
    wrapper.classList.add('active');
    generateBtn.innerText="Generate QR code";
});
});
qrInput.addEventListener("keyup",()=>{
    if(!qrInput.value){
        wrapper.classList.remove("active");
    }
})