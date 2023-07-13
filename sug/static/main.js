var test = document.getElementById('open');
var too = document.getElementById('nu');

too.addEventListener('click',()=>{
    test.classList.toggle('close')
})

var icon = document.getElementById('mobilemenu')
var hiddenBox = document.getElementById('hidden-div')

icon.addEventListener('click',(event)=>{
    hiddenBox.classList.toggle('hidden')
    event.stopPropagation();
})
hiddenBox.addEventListener('click',(event)=>{
    event.stopPropagation();
})
var closeIcon = document.getElementById('mmm')
closeIcon.addEventListener('click',(event)=>{
    if(hiddenBox.classList.contains('hidden')){
        hiddenBox.classList.remove('hidden')
    }
    // event.stopPropagation();
})
document.addEventListener('click',()=>{
    if(hiddenBox.classList.contains('hidden')){
        hiddenBox.classList.remove('hidden')
    }
})