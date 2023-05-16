// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBYJRUNq3rA3agZDW_OF-U2F4qNAGMvepo",
//   authDomain: "ayj-logistica.firebaseapp.com",
//   projectId: "ayj-logistica",
//   storageBucket: "ayj-logistica.appspot.com",
//   messagingSenderId: "522746583780",
//   appId: "1:522746583780:web:64663c284241cd30ba2af1",
//   measurementId: "G-7FMW6GLPG4"
// };



const menu = document.querySelector(".navegacion");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");


function toggleMenu(){
    menu.classList.toggle("opened-menu");
}
const menuLinks = document.querySelectorAll('.navegacion a[href^="#"]');
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        const id = entry.target.getAttribute('id');
        const menuLink = document.querySelector(`.navegacion a[href="#${id}"]`);
        if(entry.isIntersecting){
            menuLink.classList.add("selected")
        } else{
            menuLink.classList.remove("selected");
        }
    })
}, {rootMargin: "-40% 0px -60% 0px"});

menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", function(){
        menu.classList.remove("opened-menu");
    })

    const hash = menuLink.getAttribute('href');
    const target = document.querySelector(hash);
    if (target){
        observer.observe(target)
    }
})

function alerta(){
    swal("Gracias por su mensaje!!"," Una persona de nuestro equipo se pondrá en contacto con usted a la brevedad", "success")
}



openMenuBtn.addEventListener("click", toggleMenu)
closeMenuBtn.addEventListener("click", toggleMenu)





envio.addEventListener("click", alerta)
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);