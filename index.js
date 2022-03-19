// const elem =document.querySelectorAll('.box')
// let anim= elem.forEach((animation)=>{
//     animation.animate([
    
//         {transform:'scale(0)'},
        
//         {transform:'scale(1.1)'},
//         {transform:'scale(0)'},
        
//     ],{
//         duration:1500,
//         iterations:Infinity,
//         direction:"normal",//alternate reverse
//         fill:"backwards",//forwards,backwards,both,none
//         easing:"ease"
//         // iterations:Infinity
//     })
//     // anim.currentTime=200
    
    
    
//     console.log()
// })
// anim.playbackRate=10
const box1=document.querySelector(".box1")
const box2=document.querySelector(".box2")
const box3=document.querySelector(".box3")
const heading=document.querySelectorAll('.inst>h4')

heading.forEach((elem)=>{
    elem.animate([
        {color:"purple" ,transform:"sacle(0)"},
        {color:"grey",transform:"sacle(1.2)"},
        {color:"crimson",transform:"sacle(0)"}
    ],{
        duration:1900,
        easing:"ease-in-out",
        iterations:Infinity,
        direction:"normal"
    })
    elem.playbackRate=0.2
})


let anim1=box1.animate([
    
    {transform:"translateY(-150px)"},
    {transform:"scale(0.2)"},
    {transform:"translateY(150px)"},
    
    
],{
    duration:1000,
    direction:"alternate",
    iterations:Infinity,
    easing:"ease-in"
})

let anim2=box2.animate([
    {transform:"translateY(-150px)"},
    {transform:"scale(0.2)"},
    {transform:"translateY(150px)"},
],{
    duration:1000,
    direction:"alternate",
    iterations:Infinity,
    easing:"ease-in"
})
let anim3=box3.animate([
    {transform:"translateX(-150px)",opacity:"0"},
    {transform:"scale(0.2)" ,opacity:"1"},
    {transform:"translateX(150px)",opacity:"1"},
],{
    duration:1300,
    direction:"alternate",
    iterations:Infinity,
    easing:"ease-in"
})
anim1.playbackRate=0.75
anim2.playbackRate=0.50

let animarr=[anim1,anim2,anim3]
document.addEventListener('click',()=>{
    animarr.forEach((elem=>{
        if(true){
            elem.pause()
        }
    }))
})
document.addEventListener('keypress',()=>{
    animarr.forEach((elem=>{
        if(true){
            elem.play()
        }
    }))
})


