let numberOfButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //play audio
        //show animation
        let buttonInnerHtml=this.innerHTML;
        makeSound(buttonInnerHtml);
        buttonAnimation(buttonInnerHtml)
    });

}

document.addEventListener("keypress", function(event){
    //play audio
    //show animation
    makeSound(event.key);

    buttonAnimation(event.key);
})


function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./Assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("./Assets/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("./Assets/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("./Assets/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let kick = new Audio("./Assets/sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            let crash = new Audio("./Assets/sounds/crash.mp3");
            crash.play();
            break;
        case "l":
            let snare = new Audio("./Assets/sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log("key pressed", key);
    }
}

function buttonAnimation(key)
{
    let activeButton = document.querySelector("."+key);
    activeButton.classList.add("pressed");

    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100)
    
}