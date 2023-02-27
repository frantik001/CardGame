import '../css/style.css';
import { templateEngine } from './templateEngine.js';
import {
    startTemplate,
    topDiv,
    easyCardsTemplate,
    mediumCardsTemplate,
    hardCardsTemplate,
    endGame,
} from './templates.js';
window.application = {
    blocks: {},
    screens: {},
    renderScreen: function (screenName) {
        if (!(screenName in window.application.screens)) {
            console.log('Такого экрана cуществует');
            return;
        }

        window.application.screens[`${screenName}`]();
    },
    renderBlock: function (blockName, container, ...args) {
        if (!(blockName in window.application.blocks)) {
            console.log('Такого блока не cуществует');
            return;
        }

        window.application.blocks[blockName](container, ...args);
    },
};

const app: HTMLElement = document.querySelector('.app');
let difficult: number;

window.addEventListener('DOMContentLoaded', function () {
    window.application.renderScreen('startScreen');
});

function startBlock(container: Element) {
    container.appendChild(templateEngine(startTemplate));
    const startForm: Element = document.querySelector('.startForm');

    startForm.addEventListener('submit', function (event: SubmitEvent) {
        event.preventDefault();
        difficult = Number(
            (
                document.querySelector(
                    '.startForm__div_btn:checked'
                ) as HTMLInputElement
            ).value
        );

        if (difficult === 0) {
            return;
        }
        window.application.renderScreen('gameScreen');
    });
}

function startScreen() {
    app.textContent = '';
    window.application.renderBlock('startBlock', app);
}

function gameBlock(container: Element) {
    container.appendChild(templateEngine(topDiv));

    const gameButton = document.querySelector('.topDiv__restartButton');

    gameButton.addEventListener('click', function (event) {
        event.preventDefault();

        gameScreen();
    });

    if (difficult === 6) {
        container.appendChild(templateEngine(easyCardsTemplate));
    }
    if (difficult === 12) {
        container.appendChild(templateEngine(mediumCardsTemplate));
    }
    if (difficult === 18) {
        container.appendChild(templateEngine(hardCardsTemplate));
    }
    const card = document.querySelectorAll('.game__card');
    const time: Element = document.querySelector('.topDiv__timerDiv__timer');
    let timer: NodeJS.Timer;
    let min = 0;
    let sec = 0;

    function setTimer(): void {
        timer = setInterval(() => {
            sec++;
            if (sec === 59) {
                min++;
                time.childNodes[0].textContent = min.toString();
                time.childNodes[2].textContent = '0';
                sec = 0;
            } else {
                time.childNodes[2].textContent = sec.toString();
            }
        }, 1000);
    }

    shuffle();

    setTimeout(() => {
        card.forEach((element) => {
            element.classList.remove('is-flipped');
            element.addEventListener('click', flipCard);
        });
        setTimer();
    }, 5000);

    type Card = HTMLDivElement;

    let hasFlippedCard = false;
    let lockBoard = false;
    let firstCard: Card | null = null;
    let secondCard: Card | null = null;

    function flipCard() {
        if (lockBoard) return;
        if (this === firstCard) return;
        this.classList.add('is-flipped');

        if (!hasFlippedCard) {
            hasFlippedCard = true;
            firstCard = this as Card;
            return;
        }

        secondCard = this as Card;

        checkForMatch();
    }

    function checkForMatch() {
        const isMatch = firstCard!.id === secondCard!.id;
        isMatch ? disableCards() : unflipCards();
        const number = document.querySelectorAll('.is-flipped').length;
        if (number === difficult) {
            clearInterval(timer);
            setTimeout(() => {
                container.appendChild(templateEngine(endGame));
                let gameTime = document.querySelector('.endGame__div_time');
                gameTime.textContent = time.textContent;
                const endGameBtn = document.querySelector('.endGame__div_btn');
                endGameBtn.addEventListener('click', function (event) {
                    event.preventDefault();
                    startScreen();
                });
            }, 500);
        }
    }

    function disableCards() {
        firstCard!.removeEventListener('click', flipCard);
        secondCard!.removeEventListener('click', flipCard);

        resetBoard();
    }

    function unflipCards() {
        lockBoard = true;

        setTimeout(() => {
            firstCard!.classList.remove('is-flipped');
            secondCard!.classList.remove('is-flipped');

            resetBoard();
        }, 1500);
    }

    function resetBoard() {
        [hasFlippedCard, lockBoard] = [false, false];
        [firstCard, secondCard] = [null, null];
    }

    function shuffle() {
        card.forEach((element: HTMLElement) => {
            let ramdomPos = Math.floor(Math.random() * difficult);
            element.style.order = String(ramdomPos);
        });
    }
}

function gameScreen() {
    app.textContent = '';
    window.application.renderBlock('gameBlock', app);
}

window.application.blocks['startBlock'] = startBlock;
window.application.screens['startScreen'] = startScreen;
window.application.blocks['gameBlock'] = gameBlock;
window.application.screens['gameScreen'] = gameScreen;
