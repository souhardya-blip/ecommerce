// <!-- ------------------------- * navbar * ---------------------------- -->

let country= document.getElementById('country');
let list1= document.getElementById('list');
let moving1= document.getElementById('arrow');
let text= document.getElementById('text');
let logo= document.getElementById('drop-downid');
let service= document.getElementById('service');
let model= document.getElementById('model-bg');
let body= document.getElementById('body1');
country.addEventListener('click', ()=>{
    list1.classList.toggle('hidden');
    moving1.classList.toggle('rotated');
});
function mycountry(selectcountry){
text.innerHTML=selectcountry;
}
function myaccount(){
logo.classList.toggle('hid-logo')
}
function yourdoctor(e){
  
model.classList.toggle('hid-model')
service.innerText=document.getElementById('doctor').innerHTML;

}
function yourrepair(event){
service.innerText=document.getElementById('repair').innerHTML;

}
function cross_Model(){
    model.classList.remove('hid-model');
}
function submitform(){
    localStorage.setItem()
}
