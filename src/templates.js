const startTemplate = {
    tag: 'form',
    cls: 'startForm',
    content: [
        {
            tag: 'div',
            cls: 'startForm__title',
            content: 'Выбери сложность',
        },
        {
            tag: 'div',
            cls: 'startForm__div',
            content: [
                {
                    tag: 'input',
                    cls: 'startForm__div_btn',
                    attrs: {
                        id: 'easy',
                        type: 'radio',
                        name: 'difficult',
                        value: 6,
                    },
                },
                {
                    tag: 'label',
                    cls: 'startForm__div_label',
                    attrs: {
                        for: 'easy',
                    },
                    content: '1',
                },
                {
                    tag: 'input',
                    cls: 'startForm__div_btn',
                    attrs: {
                        id: 'medium',
                        type: 'radio',
                        name: 'difficult',
                        value: 12,
                    },
                },
                {
                    tag: 'label',
                    cls: 'startForm__div_label',
                    attrs: {
                        for: 'medium',
                    },
                    content: '2',
                },
                {
                    tag: 'input',
                    cls: 'startForm__div_btn',
                    attrs: {
                        id: 'hard',
                        type: 'radio',
                        name: 'difficult',
                        value: 18,
                    },
                },
                {
                    tag: 'label',
                    cls: 'startForm__div_label',
                    attrs: {
                        for: 'hard',
                    },
                    content: '3',
                },
            ],
        },
        {
            tag: 'button',
            cls: 'startForm__button',
            content: 'Старт',
        },
    ],
};

const topDiv = {
    tag: 'div',
    cls: 'topDiv',
    content: [
        {
            tag: 'div',
            cls: 'topDiv__timerDiv',
            content: [
                {
                    tag: 'p',
                    cls: 'topDiv__timerDiv__mins',
                    content: 'min',
                },
                {
                    tag: 'p',
                    cls: 'topDiv__timerDiv__secs',
                    content: 'sec',
                },
                {
                    tag: 'div',
                    cls: 'topDiv__timerDiv__timer',
                    content: [0, ':', 0],
                },
            ],
        },
        {
            tag: 'button',
            cls: 'topDiv__restartButton',
            content: 'Начать заново',
        },
    ],
};

const easyCardsTemplate = {
    tag: 'section',
    cls: 'game',
    content: [
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfHearts.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfHearts.png',
                    },
                },
            ],
        },
    ],
};

const mediumCardsTemplate = {
    tag: 'div',
    cls: 'game',
    content: [
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfHearts.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfHearts.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfSpades.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfSpades.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfDiamonds.png',
                    },
                },
            ],
        },
    ],
};

const hardCardsTemplate = {
    tag: 'div',
    cls: 'game',
    content: [
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfHearts.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfHearts.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfSpades.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'aceOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/aceOfSpades.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfClubs',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfClubs.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfDiamonds',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfDiamonds.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfHearts.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfHearts',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfHearts.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfSpades.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'kingOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/kingOfSpades.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'ladyOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/ladyOfSpades.png',
                    },
                },
            ],
        },
        {
            tag: 'div',
            cls: ['game__card', 'is-flipped'],
            attrs: {
                id: 'ladyOfSpades',
            },
            content: [
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--front'],
                    attrs: {
                        src: 'static/img/cover.png',
                    },
                },
                {
                    tag: 'img',
                    cls: ['game__card_face', 'game__card_face--back'],
                    attrs: {
                        src: 'static/img/ladyOfSpades.png',
                    },
                },
            ],
        },
    ],
};

const endGame = {
    tag: 'div',
    cls: 'endGame',
    content: {
        tag: 'div',
        cls: 'endGame__div',
        content: [
            {
                tag: 'img',
                cls: 'endGame__div_img',
                attrs: {
                    src: 'static/img/win.png',
                },
            },
            {
                tag: 'h1',
                cls: 'endGame__div_title',
                content: 'Вы выиграли!',
            },
            {
                tag: 'h1',
                cls: 'endGame__div_timeText',
                content: 'Затраченное время:',
            },
            {
                tag: 'p',
                cls: 'endGame__div_time',
            },
            {
                tag: 'button',
                cls: 'endGame__div_btn',
                content: 'Играть снова',
            },
        ],
    },
};

module.exports = {
    startTemplate,
    topDiv,
    easyCardsTemplate,
    mediumCardsTemplate,
    hardCardsTemplate,
    endGame,
};
