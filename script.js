let turn = "X";
let isgameover = false;
let id = (id_call) => document.getElementById(id_call);
let play1 = id("NAME1");
let play2 = id("NAME2");
const changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

const checkWin = () => {
  let boxtext = document.getElementsByClassName("boxtext");
  let wins = [
    [0, 1, 2, 5, 5, 0],
    [3, 4, 5, 5, 15, 0],
    [6, 7, 8, 5, 25, 0],
    [0, 3, 6, -5, 15, 90],
    [1, 4, 7, 5, 15, 90],
    [2, 5, 8, 15, 15, 90],
    [0, 4, 8, 5, 15, 45],
    [2, 4, 6, 5, 15, 135],
  ];
  wins.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[2]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      isgameover = true;
      if (boxtext[e[0]].innerText === "X") {
        document.getElementsByClassName("info")[0].innerText = "I Won,Haha ✌️";
        document.getElementsByClassName("info")[1].innerText = "I lost 😢";
      } else {
        document.getElementsByClassName("info")[0].innerText = "I lost 😢";
        document.getElementsByClassName("info")[1].innerText = "I Won,Haha ✌️";
      }
      document.querySelector(
        ".line"
      ).style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
      document.querySelector(".line").style.width = "20vw";
    }
  });
};

let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
  let boxtext = element.querySelector(".boxtext");
  element.addEventListener("click", () => {
    if (boxtext.innerText === "") {
      boxtext.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameover) {
        if (turn === "X") {
          document.getElementsByClassName("info")[0].innerText = "My Turn";
          document.getElementsByClassName("info")[1].innerText = "I'm done";
        } else {
          document.getElementsByClassName("info")[1].innerText = "My Turn";
          document.getElementsByClassName("info")[0].innerText = "I'm done";
        }
      }
    }
  });
});

reset.addEventListener("click", () => {
  let boxtexts = document.querySelectorAll(".boxtext");
  Array.from(boxtexts).forEach((element) => {
    element.innerText = "";
  });
  if (turn === "X") {
    document.getElementsByClassName("info")[1].innerText = "OK";
    document.getElementsByClassName("info")[0].innerText = "Let me Start";
  } else {
    turn = "0";
    document.getElementsByClassName("info")[1].innerText = "Let me Start";
    document.getElementsByClassName("info")[0].innerText = "OK";
  }
  isgameover = false;
  document.querySelector(".line").style.width = "0vw";
});

id("start").addEventListener("click", (e) => {
  id("block1").style.opacity = "0";
  id("block1").style.height = "0";
  id("block1").style.position = "absolute";
  id("block1").style.left = "-1000000px";
  document.querySelector(".player1").innerHTML = `${play1.value} 'X'`;
  document.querySelector(".player2").innerHTML = `${play2.value} '0'`;

  id("block2").style.opacity = "1";
  id("block2").style.opacity = "0.89";
  //   id("block2").style.backgroundColor = "black";
  id("block2").style.left = "0px";
});
