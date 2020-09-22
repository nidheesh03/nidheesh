function about(){
    let about=document.getElementById("about-div");
    about.style.display="block";
    animate.from('#about-div',{
        duration: 2,
        rotationY: 360
    })
}

function skills(){
    let skills=document.getElementById("skills");
    skills.style.display="block";

    animate.to('#skills',{
        duration: 3, rotation: 360
    })
}
function contact(){
    let contact=document.getElementById("footer");
    contact.style.display="block";

    animate.from('#footer',{
        duration:1,
        x:-2000,
    })
}



let animate=gsap.timeline();


// animate.from('#navbar-1',{
//     duration:2,
//     x:100
// })
// animate.from('#navbar-2',{
//     duration:2,
//     x:100
// })
// animate.from('#navbar-3',{
//     duration:2,
//     x:100
// })
animate.from('#name-heading',{
    duration:2,
    y:1000,
})
animate.to('#name-heading',{
    duration:2,
    rotation:360
})

animate.from('#n-letter',{
    duration:3,
    x:-1500,
    opacity:0.7
})





