/* =========================================
   BROTHER SURVIVAL CHALLENGE
   LIVE CHARACTER REACTION SYSTEM
========================================= */


/* =========================================
   CHARACTER ELEMENTS
========================================= */

const brotherImage = document.getElementById("brother-image");
const sisterImage = document.getElementById("sister-image");

const brotherBubble = document.getElementById("brother-bubble");
const sisterBubble = document.getElementById("sister-bubble");

const brotherCharacter = document.getElementById("brother-character");
const sisterCharacter = document.getElementById("sister-character");


/* =========================================
   IMAGE PATHS
========================================= */

const brotherImages = {
  normal: "images/brother-normal.jpeg",
  thinking: "images/brother-thinking.jpeg",
  scared: "images/brother-scared.jpeg",
  crying: "images/brother-crying.jpeg",
  running: "images/brother-running.jpeg",
  happy: "images/brother-happy.jpeg"
};

const sisterImages = {
  normal: "images/sister-normal.jpeg",
  happy: "images/sister-happy.jpeg",
  angry: "images/sister-angry.jpeg",
  judging: "images/sister-judging.jpeg",
  attack: "images/sister-attack.jpeg"
};


/* =========================================
   PRELOAD IMAGES
   Prevents delay when reaction changes
========================================= */

Object.values(brotherImages).forEach(src => {
  const img = new Image();
  img.src = src;
});

Object.values(sisterImages).forEach(src => {
  const img = new Image();
  img.src = src;
});


/* =========================================
   REMOVE REACTION CLASSES
========================================= */

function clearCharacterClasses() {

  brotherCharacter.classList.remove(
    "happy",
    "sad",
    "scared",
    "crying",
    "running",
    "thinking",
    "celebrate"
  );

  sisterCharacter.classList.remove(
    "happy",
    "angry",
    "judging",
    "attack",
    "celebrate"
  );
}


/* =========================================
   LIVE BROTHER REACTION
========================================= */

function brotherReact(reaction, message) {

  if (!brotherImage) return;

  brotherImage.src =
    brotherImages[reaction] || brotherImages.normal;

  clearCharacterClasses();

  if (reaction === "happy") {
    brotherCharacter.classList.add("happy");
  }

  if (reaction === "scared") {
    brotherCharacter.classList.add("scared");
  }

  if (reaction === "crying") {
    brotherCharacter.classList.add("sad");
  }

  if (reaction === "running") {
    brotherCharacter.classList.add("running");
  }

  if (reaction === "thinking") {
    brotherCharacter.classList.add("thinking");
  }

  if (message) {
    brotherBubble.textContent = message;
  }
}


/* =========================================
   LIVE SISTER REACTION
========================================= */

function sisterReact(reaction, message) {

  if (!sisterImage) return;

  sisterImage.src =
    sisterImages[reaction] || sisterImages.normal;

  clearCharacterClasses();

  if (reaction === "happy") {
    sisterCharacter.classList.add("happy");
  }

  if (reaction === "angry") {
    sisterCharacter.classList.add("angry");
  }

  if (reaction === "judging") {
    sisterCharacter.classList.add("judging");
  }

  if (reaction === "attack") {
    sisterCharacter.classList.add("attack");
  }

  if (message) {
    sisterBubble.textContent = message;
  }
}


/* =========================================
   BOTH CHARACTERS
========================================= */

function reactTogether(
  brotherReaction,
  sisterReaction,
  brotherMessage,
  sisterMessage
) {

  brotherImage.src =
    brotherImages[brotherReaction] || brotherImages.normal;

  sisterImage.src =
    sisterImages[sisterReaction] || sisterImages.normal;

  brotherBubble.textContent =
    brotherMessage || "";

  sisterBubble.textContent =
    sisterMessage || "";

  clearCharacterClasses();

  if (brotherReaction === "happy") {
    brotherCharacter.classList.add("happy");
  }

  if (brotherReaction === "scared") {
    brotherCharacter.classList.add("scared");
  }

  if (brotherReaction === "crying") {
    brotherCharacter.classList.add("sad");
  }

  if (brotherReaction === "running") {
    brotherCharacter.classList.add("running");
  }

  if (brotherReaction === "thinking") {
    brotherCharacter.classList.add("thinking");
  }

  if (sisterReaction === "happy") {
    sisterCharacter.classList.add("happy");
  }

  if (sisterReaction === "angry") {
    sisterCharacter.classList.add("angry");
  }

  if (sisterReaction === "judging") {
    sisterCharacter.classList.add("judging");
  }

  if (sisterReaction === "attack") {
    sisterCharacter.classList.add("attack");
  }
}


/* =========================================
   GAME VARIABLES
========================================= */

let currentQuestion = 0;
let rakhiScore = 0;
let gameStarted = false;


/* =========================================
   LEVEL 1 QUESTIONS
========================================= */

const questions = [

  {
    question: "Who is always right? 😌",

    answers: [
      "Brother 😎",
      "Sister 👑",
      "Both 😂",
      "Nobody 🤔"
    ],

    correct: 1
  },

  {
    question: "Who steals the TV remote? 📺",

    answers: [
      "Brother 😎",
      "Sister 👑",
      "Mom 😂",
      "Nobody"
    ],

    correct: 1
  },

  {
    question: "Who deserves the bigger Rakhi gift? 🎁",

    answers: [
      "Brother 😎",
      "Sister 👑",
      "The dog 🐶",
      "Nobody 😂"
    ],

    correct: 1
  },

  {
    question: "Who gets blamed first? 😂",

    answers: [
      "Brother 😭",
      "Sister",
      "Nobody",
      "The neighbor"
    ],

    correct: 0
  },

  {
    question: "Who is the queen of the house? 👑",

    answers: [
      "Brother 😎",
      "Sister 👑",
      "Dad",
      "The cat 🐱"
    ],

    correct: 1
  }

];


/* =========================================
   SCREEN SWITCHING
========================================= */

function showScreen(id) {

  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  const target = document.getElementById(id);

  if (target) {
    target.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


/* =========================================
   START GAME
========================================= */

function startGame() {

  gameStarted = true;

  currentQuestion = 0;

  reactTogether(
    "thinking",
    "judging",
    "Hmm... think carefully 🤔",
    "I am watching you 👀"
  );

  showScreen("level1");

  loadQuestion();
}


/* =========================================
   LOAD QUESTION
========================================= */

function loadQuestion() {

  const question = questions[currentQuestion];

  const questionElement =
    document.getElementById("question");

  const answersElement =
    document.getElementById("answers");

  const progress =
    document.getElementById("progress-fill");

  if (!questionElement || !answersElement) return;

  questionElement.textContent =
    question.question;

  answersElement.innerHTML = "";

  question.answers.forEach((answer, index) => {

    const button = document.createElement("button");

    button.textContent = answer;

    button.addEventListener("click", function () {
      checkAnswer(index, button);
    });

    answersElement.appendChild(button);
  });

  if (progress) {

    const percentage =
      (currentQuestion / questions.length) * 100;

    progress.style.width =
      percentage + "%";
  }

  reactTogether(
    "thinking",
    "judging",
    "Hmm... I need to think 🤔",
    "Choose carefully, bro 👀"
  );
}


/* =========================================
   CHECK ANSWER
========================================= */

function checkAnswer(selectedIndex, clickedButton) {

  const question = questions[currentQuestion];

  const buttons =
    document.querySelectorAll("#answers button");

  /* Disable buttons temporarily */

  buttons.forEach(button => {
    button.disabled = true;
  });


  /* =====================================
     CORRECT ANSWER
  ===================================== */

  if (selectedIndex === question.correct) {

    clickedButton.classList.add("correct");

    reactTogether(
      "happy",
      "happy",
      "YES! I knew that! 😎🎉",
      "Okayyy... you actually know me! 😌❤️"
    );

    const message =
      document.getElementById("funny-message");

    if (message) {
      message.textContent =
        "Correct! Your sister is impressed... for now 😏❤️";
    }

    currentQuestion++;

    const progress =
      document.getElementById("progress-fill");

    if (progress) {
      progress.style.width =
        (currentQuestion / questions.length) * 100 + "%";
    }

    setTimeout(() => {

      if (currentQuestion >= questions.length) {

        showPopup("LEVEL 1 COMPLETE! 🎉");

        setTimeout(() => {
          startLevel2();
        }, 1000);

      } else {

        loadQuestion();

      }

    }, 1300);

  }


  /* =====================================
     WRONG ANSWER
  ===================================== */

  else {

    clickedButton.classList.add("wrong");

    reactTogether(
      "scared",
      "angry",
      "OH NOOO! 😨",
      "WRONG ANSWER! 😡"
    );

    const message =
      document.getElementById("funny-message");

    if (message) {

      message.textContent =
        "BROTHER IS IN DANGER! 🚨 Sister is angry! 😡😂";

    }

    /* After 2 seconds return to thinking */

    setTimeout(() => {

      buttons.forEach(button => {
        button.disabled = false;
      });

      reactTogether(
        "thinking",
        "judging",
        "Okay... let me try again 🤔",
        "Try again... carefully 👀"
      );

    }, 1800);
  }
}


/* =========================================
   LEVEL 2
========================================= */

function startLevel2() {

  rakhiScore = 0;

  const score =
    document.getElementById("rakhi-score");

  if (score) {
    score.textContent = "0";
  }

  showScreen("level2");

  reactTogether(
    "running",
    "happy",
    "I am going to catch it! 🏃",
    "Go bro! 😂🎀"
  );

  moveRakhi();
}


/* =========================================
   MOVE RAKHI
========================================= */

function moveRakhi() {

  const rakhi =
    document.getElementById("rakhi");

  const area =
    document.getElementById("rakhi-area");

  if (!rakhi || !area) return;

  const maxX =
    area.clientWidth - rakhi.offsetWidth;

  const maxY =
    area.clientHeight - rakhi.offsetHeight;

  const x =
    Math.random() * Math.max(maxX, 0);

  const y =
    Math.random() * Math.max(maxY, 0);

  rakhi.style.left = x + "px";
  rakhi.style.top = y + "px";
}


/* =========================================
   CATCH RAKHI
========================================= */

function catchRakhi() {

  rakhiScore++;

  const score =
    document.getElementById("rakhi-score");

  const message =
    document.getElementById("rakhi-message");

  if (score) {
    score.textContent = rakhiScore;
  }


  /* SUCCESS */

  reactTogether(
    "happy",
    "happy",
    "GOT IT! 😎🎀",
    "Not bad, bro! 😂❤️"
  );


  if (message) {

    message.textContent =
      "Nice! " + rakhiScore + "/5 caught! 🎀🔥";

  }


  if (rakhiScore >= 5) {

    setTimeout(() => {

      showPopup("RAKHI CAUGHT 5 TIMES! 🎉");

      setTimeout(() => {
        startLevel3();
      }, 1000);

    }, 500);

  } else {

    setTimeout(() => {

      reactTogether(
        "running",
        "happy",
        "Where did it go?! 🏃😂",
        "Catch it, bro! 😏"
      );

      moveRakhi();

    }, 700);
  }
}


/* =========================================
   LEVEL 3
========================================= */

function startLevel3() {

  showScreen("level3");

  reactTogether(
    "thinking",
    "judging",
    "Which button should I press? 🤔",
    "Don't make a mistake... 👀"
  );

  const giftButton =
    document.getElementById("gift-button");

  const wrongButton =
    document.getElementById("wrong-button");

  if (giftButton) {

    giftButton.onclick = function () {

      reactTogether(
        "happy",
        "happy",
        "I GOT THE GIFT! 😎🎁",
        "Good choice, bro! 😌❤️"
      );

      const message =
        document.getElementById("button-message");

      if (message) {
        message.textContent =
          "Correct! You survived the trap! 🎉";
      }

      setTimeout(() => {
        startLevel4();
      }, 1500);
    };
  }


  if (wrongButton) {

    wrongButton.onclick = function () {

      reactTogether(
        "scared",
        "attack",
        "WAIT WAIT WAIT! 😨😭",
        "YOU CLICKED THE WRONG BUTTON! 😡💥"
      );

      const message =
        document.getElementById("button-message");

      if (message) {
        message.textContent =
          "OH NO! RUN BROTHER! 🏃💨😂";
      }

      setTimeout(() => {

        reactTogether(
          "crying",
          "judging",
          "I am sorryyyyy 😭",
          "Try again, genius... 🙄"
        );

      }, 1200);
    };
  }
}


/* =========================================
   LEVEL 4
========================================= */

function startLevel4() {

  showScreen("level4");

  reactTogether(
    "scared",
    "happy",
    "How much money should I give? 😰💸",
    "Let's see what you have for me 😏💰"
  );

  const input =
    document.getElementById("money-input");

  if (input) {
    input.value = "";
  }
}


/* =========================================
   CHECK MONEY
========================================= */

function checkMoney() {

  const input =
    document.getElementById("money-input");

  const result =
    document.getElementById("money-result");

  const amount =
    Number(input.value);


  if (!amount || amount <= 0) {

    reactTogether(
      "scared",
      "angry",
      "I don't have any money! 😭",
      "ENTER AN AMOUNT! 😡💸"
    );

    if (result) {
      result.textContent =
        "Bro... you need to enter some money 😂";
    }

    return;
  }


  /* =====================================
     VERY LOW
  ===================================== */

  if (amount < 100) {

    reactTogether(
      "scared",
      "angry",
      "Please don't kill me 😨",
      "₹" + amount + "? SERIOUSLY?! 😡"
    );

    if (result) {
      result.textContent =
        "Sister has entered ANGRY MODE 😡💸";
    }

    return;
  }


  /* =====================================
     MEDIUM
  ===================================== */

  if (amount < 500) {

    reactTogether(
      "thinking",
      "judging",
      "Is this enough? 🤔",
      "Hmm... I expected more 👀"
    );

    if (result) {
      result.textContent =
        "Not terrible... but sister is still judging 😂";
    }

    return;
  }


  /* =====================================
     GOOD MONEY
  ===================================== */

  reactTogether(
    "happy",
    "happy",
    "I'M SAFE! 😎💰",
    "Now THAT is what I wanted! 😍💰"
  );

  if (result) {
    result.textContent =
      "Sister is HAPPY! ❤️💰";
  }

  setTimeout(() => {

    showPopup("MONEY ACCEPTED! 😂💰");

    setTimeout(() => {
      startLevel5();
    }, 1000);

  }, 1200);
}


/* =========================================
   LEVEL 5
========================================= */

function startLevel5() {

  showScreen("level5");

  reactTogether(
    "thinking",
    "judging",
    "What gift does she want? 🤔",
    "Choose correctly, bro... 👀"
  );
}


/* =========================================
   WRONG GIFT
========================================= */

function wrongGift(gift) {

  reactTogether(
    "scared",
    "angry",
    "Oh no... 😨",
    "WHAT IS THIS?! 😡"
  );

  const message =
    document.getElementById("gift-message");

  if (message) {

    message.textContent =
      gift +
      "?! BROTHER, ARE YOU SERIOUS?! 😂😡";

  }

  setTimeout(() => {

    reactTogether(
      "crying",
      "attack",
      "I'm sorry! 😭",
      "RUN! 😡💥"
    );

  }, 1000);
}


/* =========================================
   CORRECT GIFT
========================================= */

function correctGift() {

  reactTogether(
    "happy",
    "happy",
    "I KNEW MONEY WAS THE ANSWER! 😎💰",
    "FINALLY! A SMART BROTHER! 😍💰"
  );

  const message =
    document.getElementById("gift-message");

  if (message) {

    message.textContent =
      "CORRECT! You actually understand your sister! 😂❤️";

  }

  createConfetti();

  setTimeout(() => {

    showPopup("BEST BROTHER UNLOCKED! 🏆");

    setTimeout(() => {
      showFinalScreen();
    }, 1200);

  }, 1000);
}


/* =========================================
   FINAL SCREEN
========================================= */

function showFinalScreen() {

  showScreen("final-screen");

  reactTogether(
    "happy",
    "happy",
    "WE SURVIVED! 😎🎉",
    "Okay... you're not completely useless 😂❤️"
  );

  createConfetti();
}


/* =========================================
   FINAL PROMISE
========================================= */

function finalPromise() {

  reactTogether(
    "happy",
    "happy",
    "I PROMISE! 😎❤️",
    "I'll be checking your wallet! 👀💰"
  );

  const message =
    document.getElementById("promise-message");

  if (message) {

    message.textContent =
      "Promise accepted! Screenshot this before he changes his mind 😂💸";

  }

  createConfetti();

  showPopup("PROMISE ACCEPTED ❤️🎁");
}


/* =========================================
   POPUP
========================================= */

function showPopup(text) {

  const popup =
    document.getElementById("popup");

  if (!popup) return;

  popup.textContent = text;

  popup.classList.add("show");

  setTimeout(() => {

    popup.classList.remove("show");

  }, 2200);
}


/* =========================================
   CONFETTI
========================================= */

function createConfetti() {

  const container =
    document.getElementById("confetti-container");

  if (!container) return;

  const emojis = [
    "🎉",
    "🎊",
    "❤️",
    "🎀",
    "💰",
    "😂",
    "🏆"
  ];

  for (let i = 0; i < 35; i++) {

    const piece =
      document.createElement("div");

    piece.className = "confetti";

    piece.textContent =
      emojis[Math.floor(Math.random() * emojis.length)];

    piece.style.left =
      Math.random() * 100 + "vw";

    piece.style.animationDelay =
      Math.random() * 1.5 + "s";

    piece.style.fontSize =
      (12 + Math.random() * 18) + "px";

    container.appendChild(piece);

    setTimeout(() => {
      piece.remove();
    }, 4000);
  }
}


/* =========================================
   INITIAL STATE
========================================= */

window.addEventListener("DOMContentLoaded", () => {

  reactTogether(
    "normal",
    "normal",
    "Ready for the challenge? 😎",
    "Let's see how well you know me 👀"
  );

});
