let user_score = 0;
let computer_score = 0;

const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#your-score");
const compScorePara = document.querySelector("#comp-score");

let msg=document.querySelector("#msg");

const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const draw_Game = () => {
    msg.innerText="its a draw";
    msg.style.backgroundColor = "#081b31";
}

const show_winner=(user_win)=>
    {
        if(user_win==true)
            {
                user_score++;
                userScorePara.innerText=user_score;
                msg.innerText="you won";
                msg.style.backgroundColor = "green";
            }
            else if(user_win==false)
            {
                computer_score++;
                compScorePara.innerText=computer_score;
                msg.innerText="you lose";
                msg.style.backgroundColor = "red";
            }
    };

const play_Game = (user_choice) => {
    console.log("user choice is =", user_choice);
    //generate computer choice
    const computer_choice = gencompchoice();
    console.log("computer choice is =", computer_choice);
    //draw game
    if (user_choice == computer_choice) {
        draw_Game();
    }
    else {
        let user_win = true;
        if (user_choice === "rock") {
            //scissors, paper
            user_win = computer_choice === "paper" ? false : true;
        }
        else if (user_choice === "paper") {
            //rock, scissors
            user_win = computer_choice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            user_win = computer_choice === "rock" ? false : true;
        }
        show_winner(user_win);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const user_choice = choice.getAttribute("id");
        play_Game(user_choice);
    });
});