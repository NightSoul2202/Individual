document.addEventListener("DOMContentLoaded", function()
{
    let buttonOK = document.getElementById("ButtonOk");
    let inputNick = document.getElementById("InputNick");
    let modal = document.getElementById("Modal");

    let userName = document.getElementById("UserName");
    let countUser = document.getElementById("UserCount");
    let countComputer = document.getElementById("ComputerCount");
    let generateUser = document.getElementById("UserGen");
    let generateComputer = document.getElementById("CompGen");
    let buttonGen = document.getElementById("ButtonGen");

    let winnerModal = document.getElementById("WinnerWindow");
    let labetWinner = document.getElementById("LabelWinner");
    let buttorRestart = document.getElementById("ButtonRestart");

    buttonOK.addEventListener("click", function()
    {
        let inputNickValue = inputNick.value;
        if (inputNickValue == "")
            alert("Рядок з нікнеймом не може бути пустим!");
        else
        {
            modal.style.display = "none";
            userName.innerHTML = inputNick.value;
        }
            
    });

    buttonGen.addEventListener("click", function()
    {
        let userScore = parseInt(countUser.innerHTML, 10);
        let compScore = parseInt(countComputer.innerHTML, 10);

        generateUser.innerHTML = Math.round(Math.random() * 100);
        generateComputer.innerHTML = Math.round(Math.random() * 100);

        if(generateUser.innerHTML > generateComputer.innerHTML)
            countUser.innerHTML = `${++userScore}`;
        else
            countComputer.innerHTML = `${++compScore}`;

        if(userScore == 3 || compScore == 3)
        {
            let winner = userScore > compScore ? inputNick.value : "Комп'ютер";
            winnerModal.style.display = "flex";
            labetWinner.innerHTML = `Переможець: ${winner}. Вітаємо!!!!! Переграти?`;
        }
    });

    buttorRestart.addEventListener("click", function()
    {
        winnerModal.style.display = "none";
        countUser.innerHTML = "0";
        countComputer.innerHTML = "0";
        generateUser.innerHTML = "";
        generateComputer.innerHTML = "";
    });
});