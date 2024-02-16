
let drop = document.querySelector('label');
let file = document.querySelector('input');
let imgHere = document.querySelector('div');

inputFile.addEventListener("change", ()=>{

    let imgLink = URL.createObjectURL(inputFile.files[0]);
    imgHere.style.backgroundImage = `url(${imgLink})`;
    imgHere.textContent = "";

});


drop.addEventListener('dragover',function(e){
    e.preventDefault();
});

drop.addEventListener('drop',function(e){
    e.preventDefault();
    inputFile.files = e.dataTransfer.files;
    uploadImage();
});