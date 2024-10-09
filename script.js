let firstCard = null;
let secondCard = null;
let lockBoard = false;

function createDeck() {
    const totalCards = 24;
    const exclude = ["Y", "O", "S", "H", "I", "E"]; // 除外する文字
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('').filter(letter => !exclude.includes(letter));
    const deck = [];

    exclude.forEach(letter => {
        deck.push(letter); // 除外する文字1枚追加
    });

    while (deck.length < totalCards) {
        const randomLetter = letters[Math.floor(Math.random() * letters.length)];
        deck.push(randomLetter, randomLetter); // 足りない分はランダムに追加
    }
    console.log(deck);

    return deck.sort(() => Math.random() - 0.5); // シャッフル
}

function createCard(letter) {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <div class="card-inner">
            <div class="card-front"></div>
            <div class="card-back">${letter}</div>
        </div>
    `;
    card.flipped = false; // カードの状態を管理するフラグ

    card.addEventListener('click', () => {
        if (lockBoard || card.flipped) return;

        card.classList.add('flipped');
        card.flipped = true;

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            lockBoard = true;

            if (firstCard.querySelector('.card-back').textContent === secondCard.querySelector('.card-back').textContent) {
                resetBoard();
            } else {
                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    firstCard.flipped = false;
                    secondCard.flipped = false;
                    resetBoard();
                }, 1000);
            }
        }
    });

    return card;
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

function startGame() {
    const deck = createDeck();
    const board = document.getElementById('game-board');

    deck.forEach(letter => {
        const card = createCard(letter);
        board.appendChild(card);
    });
}

startGame();