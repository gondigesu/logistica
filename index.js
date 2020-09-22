// import wait from 'waait';
const menu=document.querySelector('.menu')
const fotos=['foto1', 'foto2', 'foto3', 'foto4']

const sticky=menu.offsetTop;

// async function changeImage(){
//     const img=document.querySelector('.img-razones')
//     await wait()
//     img.src=require("./img/foto2.jpg")
//     await wait(5000)
//     img.src=require("./img/foto3.jpg")
//     await wait(5000)
//     img.src=require("./img/foto1.jpg")
//     await wait(5000)
//     changeImage();
// }


function stickyMenu() {
    if (window.pageYOffset >= sticky) {
      menu.classList.add("sticky")
    } else {
      menu.classList.remove("sticky");
    }
}

window.addEventListener('scroll', stickyMenu);


changeImage();