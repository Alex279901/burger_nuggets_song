var numberOfDaftPunkButtons = document.querySelectorAll(".DF").length;

for (var i = 0; i < numberOfDaftPunkButtons; i++) {
    document.querySelectorAll(".DF")[i].addEventListener("click", function () {
        var buttonClass = this.className.split(' ')[0]; // usamos la primera clase: w, mi, d...

        switch (buttonClass) {
            case "w":
                new Audio("Assets/WorkIt.m4a").play();
                break;
            case "mi":
                new Audio("Assets/MakeIt.m4a").play();
                break;
            case "d":
                new Audio("Assets/Doit.m4a").play();
                break;
            case "mu":
                new Audio("Assets/MAkeUs.m4a").play();
                break;
            case "h":
                new Audio("Assets/Harder.m4a").play();
                break;
            case "bu":
                new Audio("Assets/BURGER.m4a").play();
                break;
            case "nu":
                new Audio("Assets/NUGETS.m4a").play();
                break;
            case "be":
                new Audio("Assets/Better.m4a").play();
                break;
            case "f":
                new Audio("Assets/Faster.m4a").play();
                break;
            case "s":
                new Audio("Assets/Stranger.m4a").play(); // no es "Stronger"
                break;
            case "song":
                new Audio("Assets/Daft_Punk_Song.mp3").play();
                break;
            case "ka":
                new Audio("Assets/Karaoke_Daft_Punk.mp3").play();
                break;
            case "noah":
                new Audio("Assets/SENTENCE.mp3").play();
                break;
            default:
                console.log("Clase no reconocida:", buttonClass);
        }
    });
}
