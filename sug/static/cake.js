var down=document.getElementById('cw');
var cake = document.getElementById('do');

cake.addEventListener('click',()=>{
    down.classList.toggle('hides')
})
var test = document.getElementById('open');
var too = document.getElementById('nu');

too.addEventListener('click',()=>{
    test.classList.toggle('close')
})

var filterBox =document.getElementById('fps')
var filterClose =document.getElementById('ccc')
var filterOpen =document.getElementById('filterby')

filterOpen.addEventListener('click',(event)=>{
    filterBox.classList.add('hidden')
    event.stopPropagation()
})
filterClose.addEventListener('click',(event)=>{
    if (filterBox.classList.contains('hidden')) {
        filterBox.classList.remove('hidden')
    }
})
filterBox.addEventListener('click',(event)=>{
    event.stopPropagation()
})

var icon = document.getElementById('mobilemenu-2')
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
    if (filterBox.classList.contains('hidden')) {
        filterBox.classList.remove('hidden')
    }
})