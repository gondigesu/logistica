const menu=document.querySelector('.menu')

const sticky=menu.offsetTop;

function changeImage(){
    const img=document.querySelector('.img-razones')
    setTimeout(function(){
      img.src=require('./img/foto2.jpg')
      setTimeout(function(){
        img.src=require('./img/foto3.jpg')
        setTimeout(function(){
          img.src=require('./img/foto1.jpg')
          changeImage();
        }, 3000)
      }, 3000)
    }, 3000)
    
}

function stickyMenu() {
    if (window.pageYOffset >= sticky) {
      menu.classList.add("sticky")
    } else {
      menu.classList.remove("sticky");
    }
}

window.addEventListener('scroll', stickyMenu);

changeImage();