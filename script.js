
// ========================================
// BROTHER SURVIVAL CHALLENGE 🎮😂
// ========================================


// ----------------------------------------
// SCREEN MANAGEMENT
// ----------------------------------------

function showScreen(screenId) {
  const screens = document.querySelectorAll(".screen");

  screens.forEach((screen) => {
    screen.classList.remove("active");
  });

  const nextScreen = document.getElementById(screenId);

  nextScreen.classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}


// ----------------------------------------
// START GAME
// ----------------------------------------

function startGame() {
  showScreen("level1");
}


// ========================================
// LEVEL 1 - SISTER QUIZ 🧠
// ========================================

const questions = [
  {
    question: "Who is always right? 😌",
    answers: [
      "Brother 😎",
      "Sister 👑",
      "Both 😂",
      "Nobody 🤨"
    ],
    correct: 1
  },
  {
    question: "Who is the favourite child? 😏",
    answers: [
      "Obviously Sister 😌",
      "Brother 😂",
      "The neighbour 💀",
      "The pet 🐶"
    ],
    correct: 0
  },
  {
    question: "If your sister says 'I'm fine', what does it actually mean? 🤨",
    answers: [
      "She is actually fine 😌",
      "RUN. Something is coming. 🏃💨",
      "She wants chocolate 🍫",
      "Game over 💀"
    ],
    correct: 1
  },
  {
    question: "What is the correct answer when your sister asks, 'Who is prettier?' 😈",
    answers: [
      "My sister 👑",
      "Let me think 🤔",
      "Someone else 💀",
      "I refuse to answer 😂"
    ],
    correct: 0
  },
  {
    question: "What should a good brother give on Rakshabandhan? 🎁",
    answers: [
      "A random stone 🪨",
      "Nothing 😂",
      "A nice gift + money 💸",
      "His old socks 🧦"
    ],
    correct: 2
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const questionData = questions[currentQuestion];

  document.getElementById("question").innerText =
    questionData.question;

  const answersContainer =
    document.getElementById("answers");

  answersContainer.innerHTML = "";

  questionData.answers.forEach((answer, index) => {
    const button = document.createElement("button");

    button.innerText = answer;

    button.addEventListener("click", () => {
      checkAnswer(index, button);
    });

    answersContainer.appendChild(button);
  });

  document.getElementById("progress-fill").style.width =
    `${(currentQuestion / questions.length) * 100}%`;
}


function checkAnswer(selectedIndex, button) {
  const questionData = questions[currentQuestion];

  const message =
    document.getElementById("funny-message");

  if (selectedIndex === questionData.correct) {

    button.classList.add("correct");

    message.innerText =
      "🎉 Correct! Okay... you know your sister better than expected 😂";

    createConfetti(20);

    setTimeout(() => {

      currentQuestion++;

      if (currentQuestion < questions.length) {
        loadQuestion();
      } else {

        document.getElementById("progress-fill").style.width =
          "100%";

        message.innerText =
          "🏆 LEVEL 1 COMPLETE! Moving to the next challenge...";

        createConfetti(60);

        setTimeout(() => {
          showScreen("level2");
          startRakhiGame();
        }, 1500);
      }

    }, 1000);

  } else {

    button.classList.add("wrong");

    const wrongMessages = [
      "😂 WRONG! Are you even my brother?",
      "🚨 Incorrect answer detected. Sister is disappointed.",
      "😭 Mummy! Look what he answered!",
      "🤨 Think again, brother.",
      "💀 That answer was dangerous. Try again!"
    ];

    message.innerText =
      wrongMessages[
        Math.floor(
          Math.random() * wrongMessages.length
        )
      ];

    setTimeout(() => {
      button.classList.remove("wrong");
    }, 500);
  }
}


// Load first quiz question
loadQuestion();


// ========================================
// LEVEL 2 - CATCH THE RAKHI 🎀
// ========================================

let rakhiScore = 0;

function startRakhiGame() {

  rakhiScore = 0;

  document.getElementById("rakhi-score").innerText =
    rakhiScore;

  moveRakhi();
}


function catchRakhi() {

  rakhiScore++;

  document.getElementById("rakhi-score").innerText =
    rakhiScore;

  const message =
    document.getElementById("rakhi-message");

  const rakhiMessages = [
    "😂 Nice! But don't celebrate yet...",
    "🏃 Faster! The Rakhi is escaping!",
    "😈 Okay okay... you're getting good.",
    "🔥 Almost there, brother!",
    "🎉 You caught it!"
  ];

  message.innerText =
    rakhiMessages[
      Math.min(rakhiScore - 1, rakhiMessages.length - 1)
    ];

  createConfetti(10);

  if (rakhiScore >= 5) {

    message.innerText =
      "🎉 LEVEL 2 COMPLETE! You are officially faster than expected 😂";

    createConfetti(70);

    setTimeout(() => {
      showScreen("level3");
    }, 1500);

    return;
  }

  moveRakhi();
}


function moveRakhi() {

  const area =
    document.getElementById("rakhi-area");

  const rakhi =
    document.getElementById("rakhi");

  const maxX =
    area.clientWidth - rakhi.offsetWidth;

  const maxY =
    area.clientHeight - rakhi.offsetHeight;

  const randomX =
    Math.random() * maxX;

  const randomY =
    Math.random() * maxY;

  rakhi.style.left = `${randomX}px`;

  rakhi.style.top = `${randomY}px`;
}


// ========================================
// LEVEL 3 - DON'T CLICK WRONG BUTTON 😈
// ========================================

const giftButton =
  document.getElementById("gift-button");

const wrongButton =
  document.getElementById("wrong-button");

const buttonMessage =
  document.getElementById("button-message");

let escapeCount = 0;


// Gift button runs away 😂

giftButton.addEventListener("mouseenter", () => {

  if (escapeCount < 4) {

    const gameArea =
      document.querySelector(".button-game");

    const maxX =
      gameArea.clientWidth - giftButton.offsetWidth;

    const maxY =
      gameArea.clientHeight - giftButton.offsetHeight;

    const randomX =
      Math.random() * Math.max(maxX, 50);

    const randomY =
      Math.random() * Math.max(maxY, 50);

    giftButton.style.position = "absolute";

    giftButton.style.left =
      `${randomX}px`;

    giftButton.style.top =
      `${randomY}px`;

    const escapeMessages = [
      "😂 Too slow!",
      "😈 Nice try!",
      "🏃 Catch me first!",
      "🤣 One more time!"
    ];

    buttonMessage.innerText =
      escapeMessages[escapeCount];

    escapeCount++;
  }

});


// Wrong button

wrongButton.addEventListener("click", () => {

  const messages = [
    "💀 Congratulations! You clicked absolutely nothing.",
    "😂 Wrong button! But at least you tried.",
    "🤨 This is why sisters have trust issues.",
    "😭 That was clearly not the gift!"
  ];

  buttonMessage.innerText =
    messages[
      Math.floor(Math.random() * messages.length)
    ];

  wrongButton.classList.add("wrong-click");

  setTimeout(() => {
    wrongButton.classList.remove("wrong-click");
  }, 500);

});


// When gift button is finally clicked

giftButton.addEventListener("click", () => {

  if (escapeCount >= 4) {

    buttonMessage.innerText =
      "🎉 LEVEL 3 COMPLETE! You finally caught the button 😂";

    createConfetti(70);

    setTimeout(() => {
      showScreen("level4");
    }, 1500);

  } else {

    buttonMessage.innerText =
      "😂 Hey! You're not supposed to catch it yet!";
  }

});


// ========================================
// LEVEL 4 - MONEY CALCULATOR 💸
// ========================================

function checkMoney() {

  const amount =
    Number(
      document.getElementById("money-input").value
    );

  const result =
    document.getElementById("money-result");

  if (!amount || amount < 0) {

    result.innerText =
      "🤨 Please enter a valid amount, brother.";

    return;
  }


  if (amount <= 100) {

    result.innerText =
      "😡 ₹" + amount +
      "? INSULT DETECTED! Try again with more respect 😂";

  } else if (amount <= 500) {

    result.innerText =
      "🤨 Hmm... seriously? We can do better.";

  } else if (amount < 1000) {

    result.innerText =
      "😐 Not bad... but sister expected more.";

  } else if (amount < 5000) {

    result.innerText =
      "😍 Now we're talking! Sister happiness increased.";

    createConfetti(30);

  } else {

    result.innerText =
      "👑 BEST BROTHER ALERT! ₹" +
      amount +
      " is an impressive choice!";

    createConfetti(70);
  }


  // Complete level if amount is ₹1000 or more

  if (amount >= 1000) {

    setTimeout(() => {

      result.innerText +=
        " 🎉 LEVEL 4 COMPLETE!";

      setTimeout(() => {
        showScreen("level5");
      }, 1500);

    }, 800);

  }

}


// ========================================
// LEVEL 5 - GIFT CHALLENGE 🎁
// ========================================

function wrongGift(gift) {

  const message =
    document.getElementById("gift-message");

  const giftMessages = {

    "🧸":
      "🧸 Aww, cute... but where is the REAL gift? 😏",

    "🍫":
      "🍫 Chocolate is nice, but sister's expectations are bigger 😂",

    "🧦":
      "🧦 SOCKS?! After all 5 levels?! 😭",

    "🪨":
      "🪨 A stone? Congratulations. You have been disowned. 💀",

    "🎁":
      "🎁 Mystery gift detected... suspicious 🤨"
  };

  message.innerText =
    giftMessages[gift] ||
    "😂 Wrong choice!";

  showPopup(message.innerText);

}


function correctGift() {

  const message =
    document.getElementById("gift-message");

  message.innerText =
    "🚨 CORRECT ANSWER DETECTED! 💰 SISTER APPROVES! 👑😂";

  createConfetti(150);

  showPopup(
    "🏆 CONGRATULATIONS! YOU CHOSE WISELY 😂"
  );

  setTimeout(() => {
    showScreen("final-screen");
  }, 1800);

}


// ========================================
// FINAL PROMISE 😂
// ========================================

function finalPromise() {

  const message =
    document.getElementById("promise-message");

  message.innerText =
    "📸 PROMISE RECORDED! Screenshot stored in Sister's Evidence Folder 😂💸";

  createConfetti(150);

  showPopup(
    "😈 You cannot escape this promise now!"
  );

}


// ========================================
// CONFETTI 🎉
// ========================================

function createConfetti(amount) {

  const container =
    document.getElementById("confetti-container");

  const emojis = [
    "🎉",
    "✨",
    "🎊",
    "💖",
    "😂",
    "🏆"
  ];

  for (let i = 0; i < amount; i++) {

    const confetti =
      document.createElement("div");

    confetti.classList.add("confetti");

    confetti.innerText =
      emojis[
        Math.floor(
          Math.random() * emojis.length
        )
      ];

    confetti.style.left =
      Math.random() * 100 + "vw";

    confetti.style.fontSize =
      Math.random() * 20 + 15 + "px";

    confetti.style.animationDuration =
      Math.random() * 2 + 2 + "s";

    container.appendChild(confetti);

    setTimeout(() => {
      confetti.remove();
    }, 4500);

  }

}


// ========================================
// POPUP
// ========================================

function showPopup(message) {

  const popup =
    document.getElementById("popup");

  popup.innerText = message;

  popup.classList.add("show");

  setTimeout(() => {
    popup.classList.remove("show");
  }, 2500);

}
