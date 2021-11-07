// const whos_turn = document.getElementById("whos_turn");
const btn_who = document.getElementById("btn_who");
btn_who.onclick = function () {
        btn_who.firstElementChild.classList.toggle("d-none");
        btn_who.lastElementChild.classList.toggle("d-none");
}
let p1win = false;
let p2win = false;

const board = {
    btn1: [0, document.getElementById("btn1")],
    btn2: [0, document.getElementById("btn2")],
    btn3: [0, document.getElementById("btn3")],
    btn4: [0, document.getElementById("btn4")],
    btn5: [0, document.getElementById("btn5")],
    btn6: [0, document.getElementById("btn6")],
    btn7: [0, document.getElementById("btn7")],
    btn8: [0, document.getElementById("btn8")],
    btn9: [0, document.getElementById("btn9")],
};

const noP1 = (btnX) => btnX.firstElementChild.classList.contains("d-none");
const toggleP1 = (btnX) => btnX.firstElementChild.classList.toggle("d-none");
const noP2 = (btnX) => btnX.lastElementChild.classList.contains("d-none");
const toggleP2 = (btnX) => btnX.lastElementChild.classList.toggle("d-none");

function toggleBtn(btnx) {
    btnx[1].onclick = function () {
        if (noP1(btnx[1]) && noP2(btnx[1])) {
            if (noP2(btn_who)) {
                toggleP1(btnx[1]);
                toggleP1(btn_who);
                toggleP2(btn_who);
                btnx[0] = 1;
            } else {
                toggleP2(btnx[1]);
                toggleP1(btn_who);
                toggleP2(btn_who);
                btnx[0] = 10;
            }
            btn_who.setAttribute("disabled", true);
            btnx[1].setAttribute("disabled", true);
            checkWinner(board);
        }
    };
}

for (b in board) {
    toggleBtn(board[b]);
}

function checkWinner(board) {
    for (let i = 1; i <= 3; i++) {
        if (
            board["btn" + (i * 3 - 2)][0] +
                board["btn" + (i * 3 - 1)][0] +
                board["btn" + i * 3][0] ==
            3
        ) {
            showWinner(
                board["btn" + (i * 3 - 2)][1],
                board["btn" + (i * 3 - 1)][1],
                board["btn" + i * 3][1]
            );
            p1win = true;
        } else if (
            board["btn" + (i * 3 - 2)][0] +
                board["btn" + (i * 3 - 1)][0] +
                board["btn" + i * 3][0] ==
            30
        ) {
            showWinner(
                board["btn" + (i * 3 - 2)][1],
                board["btn" + (i * 3 - 1)][1],
                board["btn" + i * 3][1]
            );
            p2win = true;
        } else if (
            board["btn" + i][0] +
                board["btn" + (i + 3)][0] +
                board["btn" + (i + 6)][0] ==
            3
        ) {
            showWinner(
                board["btn" + i][1],
                board["btn" + (i + 3)][1],
                board["btn" + (i + 6)][1]
            );
            p1win = true;
        } else if (
            board["btn" + i][0] +
                board["btn" + (i + 3)][0] +
                board["btn" + (i + 6)][0] ==
            30
        ) {
            showWinner(
                board["btn" + i][1],
                board["btn" + (i + 3)][1],
                board["btn" + (i + 6)][1]
            );
            p2win = true;
        }
    }
    if (board["btn3"][0] + board["btn5"][0] + board["btn7"][0] == 3) {
        showWinner(board["btn3"][1], board["btn5"][1], board["btn7"][1]);
        p1win = true;
    } else if (board["btn3"][0] + board["btn5"][0] + board["btn7"][0] == 30) {
        showWinner(board["btn3"][1], board["btn5"][1], board["btn7"][1]);
        p2win = true;
    }
    if (board["btn1"][0] + board["btn5"][0] + board["btn9"][0] == 3) {
        showWinner(board["btn1"][1], board["btn5"][1], board["btn9"][1]);
        p1win = true;
    } else if (board["btn1"][0] + board["btn5"][0] + board["btn9"][0] == 30) {
        showWinner(board["btn1"][1], board["btn5"][1], board["btn9"][1]);
        p2win = true;
    }
}

function finish() {
    for (b in board) {
        board[b][1].setAttribute("disabled", true);
    }
}

function showWinner(btnx1, btnx2, btnx3) {
    btnx1.classList.add("winner");
    btnx2.classList.add("winner");
    btnx3.classList.add("winner");
    finish();
}
