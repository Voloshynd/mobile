'use strict';

window.addEventListener('DOMContentLoaded', ()=>{
    let count = 0; 
const box = document.querySelector('.box');
box.addEventListener('touchstart', (e)=>{
 
    console.log('Start')
    e.touches[0].target.innerHTML = `<span>Touched</span> ${count++}`;
    
})

// box.addEventListener('touchmove', ()=>{
//     console.log('Move')
// })

// box.addEventListener('touchend', ()=>{
//     console.log('End')
// })

// box.addEventListener('touchleave', ()=>{
//     console.log('Leave')
// })
});