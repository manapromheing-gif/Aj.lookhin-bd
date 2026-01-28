let score = {1:0, 2:0, 3:0};
let q = 1;

function answer(type) {
  score[type]++;
  q++;

  const box = document.getElementById("questionBox");

  if (q === 2) {
    box.innerHTML = `
      <p>2. What matters most in a classroom?</p>
      <button onclick="answer(1)">Discipline and responsibility</button>
      <button onclick="answer(2)">Comfort and engagement</button>
      <button onclick="answer(3)">Purpose and direction</button>
    `;
  }
  else if (q === 3) {
    box.innerHTML = `
      <p>3. How do you prepare students for the future?</p>
      <button onclick="answer(1)">By building strong foundations</button>
      <button onclick="answer(2)">By encouraging self-expression</button>
      <button onclick="answer(3)">By training strategic thinking</button>
    `;
  }
  else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").style.display = "none";
  document.getElementById("result").style.display = "block";

  let type = Object.keys(score).reduce((a,b)=> score[a] > score[b] ? a : b);

  if (type == 1) {
    setResult(
      "images/teacher1.png",
      "The Responsible Homeroom Teacher",
      "You guide students with clarity, structure, and reliability."
    );
  }
  if (type == 2) {
    setResult(
      "images/teacher2.png",
      "The Supportive Homeroom Teacher",
      "You create a safe and engaging environment for every student."
    );
  }
  if (type == 3) {
    setResult(
      "images/teacher3.png",
      "The Visionary Homeroom Teacher",
      "You prepare students for the future with purpose and strategy."
    );
  }
}

function setResult(img, title, desc) {
  document.getElementById("resultImg").src = img;
  document.getElementById("resultTitle").innerText = title;
  document.getElementById("resultDesc").innerText = desc;
}
