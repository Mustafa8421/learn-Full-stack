document.querySelectorAll("button")[0].addEventListener("click",sound0)
function sound0(){
         var audio=new Audio("sounds/crash.mp3")
         audio.play()
     }
     document.querySelectorAll("button")[1].addEventListener("click",sound1)
function sound1(){
         var audio=new Audio("sounds/kick-bass.mp3")
         audio.play()
     }
     document.querySelectorAll("button")[2].addEventListener("click",sound2)
function sound2(){
         var audio=new Audio("sounds/snare.mp3")
         audio.play()
     }
     document.querySelectorAll("button")[3].addEventListener("click",sound3)
function sound3(){
         var audio=new Audio("sounds/tom-1.mp3")
         audio.play()
     }
     document.querySelectorAll("button")[4].addEventListener("click",sound4)
function sound4(){
         var audio=new Audio("sounds/tom-2.mp3")
         audio.play()
     }
     document.querySelectorAll("button")[5].addEventListener("click",sound5)
function sound5(){
         var audio=new Audio("sounds/tom-3.mp3")
         audio.play()
     }
     document.querySelectorAll("button")[6].addEventListener("click",sound6)
function sound6(){
         var audio=new Audio("sounds/tom-4.mp3")
         audio.play()
     }
     document.addEventListener("keypress",keys)
     function keys(event){
        Sound(event.key);
     }
     function Sound(key) {

        switch (key) {
          case "w":
            sound0();
            break;
      
          case "a":
            sound1()
            break;
      
          case "s":
            sound2()
            break;
      
          case "d":
            sound3()
            break;
      
          case "j":
            sound4()
            break;
      
          case "k":
            sound5()
            break;
      
          case "l":
            sound6()
            break;
        }
      }