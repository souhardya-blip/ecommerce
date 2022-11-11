// <!-- ------------------------- * navbar * ---------------------------- -->

let country= document.getElementById('country');
let list1= document.getElementById('list');
let moving1= document.getElementById('arrow');
let text= document.getElementById('text');
let logo= document.getElementById('drop-downid');
let service= document.getElementById('service');
let model= document.getElementById('model-bg');
let body= document.getElementById('body1');
let tick= document.getElementById('tick');
let button1 = document.getElementById('button');
let name= document.getElementById('name').value;
let phone= document.getElementById('phone');
let address= document.getElementById('address');
let date= document.getElementById('date');
let time= document.getElementById('time');
country.addEventListener('click', ()=>{
    list1.classList.toggle('hidden');
    moving1.classList.toggle('rotated');
});
button1.addEventListener('click', ()=>{
   tick.classList.add('hid-accepted');
   localStorage.setItem('Name',document.getElementById('name').value);
   localStorage.setItem('Phone Number',document.getElementById('phone').value);
   localStorage.setItem('Address',document.getElementById('address').value);
   localStorage.setItem('Date',document.getElementById('date').value);
   localStorage.setItem('Time',document.getElementById('time').value);
});
// function submit(e){
// tick.classList.toggle('hid-accepted');
// // model.classList.toggle('hid-model')
// }
function mycountry(selectcountry){
text.innerHTML=selectcountry;
}
function myaccount(){
logo.classList.toggle('hid-logo')
}
function yourdoctor(e){
    // tick.classList.toggle('hid-accepted');
model.classList.toggle('hid-model')
service.innerText=document.getElementById('doctor').innerHTML;

}
function yourrepair(event){
model.classList.toggle('hid-model')
service.innerText=document.getElementById('repair').innerHTML;

}
function yourservice(event){
    model.classList.toggle('hid-model')
    service.innerText=document.getElementById('repair').innerHTML;
    
}
function yoursaloon(event){
        model.classList.toggle('hid-model')
        service.innerText=document.getElementById('repair').innerHTML;
        
}
function yourgrocery(event){
            model.classList.toggle('hid-model')
            service.innerText=document.getElementById('repair').innerHTML;
            
}
function cross_Model(){
    model.classList.remove('hid-model');
}
function submitform(){
    localStorage.setItem()
}
