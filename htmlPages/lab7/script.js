document.addEventListener("DOMContentLoaded", function()
{
    let MainDiv = document.createElement("div");
    MainDiv.id="MainDiv";

    let h1 = document.createElement("h1");
    h1.textContent = "Магічна куля";
    h1.id = "H1";

    let imgOfBall = document.createElement("img");
    imgOfBall.id = "ImgBall";
    imgOfBall.src = "Magic_eight_ball.png";

    let inputQuestion = document.createElement("input");
    inputQuestion.type = "text";
    inputQuestion.name = "questionInput";
    inputQuestion.id = "InputQuestion";
    inputQuestion.placeholder = "Введіть ваше запитання...";

    let pAnswer = document.createElement("p");
    pAnswer.id = "PAnswer";
    pAnswer.innerHTML = "";

    let body = document.body;

    body.appendChild(MainDiv);
    MainDiv.appendChild(h1);
    MainDiv.appendChild(imgOfBall);
    MainDiv.appendChild(inputQuestion);
    MainDiv.appendChild(pAnswer);

    imgOfBall.addEventListener("click", function()
    {
        let textInput = inputQuestion.value;
        if(textInput == "")
            pAnswer.innerHTML = "Введіть <br> питання...";
        else
        {
            pAnswer.innerHTML = "";
            imgOfBall.classList.add("shake-animation");
            setTimeout(function() {
                pAnswer.innerHTML = generateRandomAnswer();
                inputQuestion.value = "";
                inputQuestion.placeholder = "Введіть ваше запитання...";
                
                imgOfBall.classList.remove("shake-animation");
            }, 2500);
        }
    });

    function generateRandomAnswer() {
        const answers = [
            "Так",
            "Ні",
            "Можливо"
        ];
    
        const randomIndex = Math.floor(Math.random() * answers.length);
        return answers[randomIndex];
    }
});