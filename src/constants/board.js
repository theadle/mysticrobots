// Empty board just in case
// const EMPTY_BOARD = [
//     ['','','','','','','',''],
//     ['','','','','','','',''],
//     ['','','','','','','',''],
//     ['','','','','','','',''],
//     ['','','','','','','',''],
//     ['','','','','','','',''],
//     ['','','','','','','',''],
//     ['','','','','','','',''],
// ]


// Red Boards
const RED_BOARD_1 = [
    ['','','','','E','','',''],
    ['','','','','','','',''],
    ['','','','SE','','','',''],
    ['','','','NW','','','',''],
    ['','','','','','','','S'],
    ['','NE','','','','','',''],
    ['','','','','','SW','',''],
    ['X','','','','','','',''],
]

const RED_BOARD_2 = [
    ['','','','E','','','',''],
    ['','SW','','','','','',''],
    ['','','','','','','NE',''],
    ['','','','','','','',''],
    ['','','SE','','','','',''],
    ['S','','','','','','','NW'],
    ['','','','','','','',''],
    ['','','','','','','','X'],
]

const RED_BOARD_3 = [
    ['','','E','','','','',''],
    ['','NE','','','','','',''],
    ['','','','SE','','','',''],
    ['','','','','','','','S'],
    ['','','','','','','',''],
    ['','','','','','SW','',''],
    ['','','','','','','',''],
    ['X','','NW','','','','',''],
]

const RED_BOARD_4 = [
    ['','E','','','','','',''],
    ['','','','','NE','','',''],
    ['','','','','','','',''],
    ['','SW','','','','','',''],
    ['','','','','','','',''],
    ['S','','','','','NW','',''],
    ['','','','SE','','','',''],
    ['','','','','','','','X'],
]

// Green Boards
const GREEN_BOARD_1 = [
    ['','E','','','','','',''],
    ['','','','NW','','','',''],
    ['','','','','','','',''],
    ['','','','','','','SE',''],
    ['','SW','','','','','',''],
    ['','','','','','','',''],
    ['S','','','','NE','','',''],
    ['','','','','','','','X'],
]

const GREEN_BOARD_2 = [
    ['','E','','','','','',''],
    ['','','','','NE','','',''],
    ['','SE','','','','','',''],
    ['','NW','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','','S'],
    ['','','','SW','','','',''],
    ['X','','','','','','',''],
]

const GREEN_BOARD_3 = [
    ['','E','','','','','',''],
    ['','','','','','NE','',''],
    ['','','','','','','',''],
    ['','NW','','','','','',''],
    ['','','','','','','','S'],
    ['','','','','','','',''],
    ['','','SE','','','','SW',''],
    ['X','','','','','','',''],
]

const GREEN_BOARD_4 = [
    ['','E','','','','','',''],
    ['','','','NW','','','',''],
    ['','','','','','','',''],
    ['','','','','','','SE',''],
    ['','SW','','','','','',''],
    ['','','','','','','',''],
    ['S','','','','NE','','',''],
    ['','','','','','','','X'],
]

// Yellow Boards
const YELLOW_BOARD_1 = [
    ['X','','','','NW','','',''],
    ['','','SW','','','','',''],
    ['','','','','','','','S'],
    ['','SE','','','','','',''],
    ['','','','','','','NE',''],
    ['','','','','','','',''],
    ['','','','','','NW','',''],
    ['','','E','','','','',''],
]

const YELLOW_BOARD_2 = [
    ['','','','','','','','X'],
    ['','','SW','','','','',''],
    ['S','','','','','','','NE'],
    ['','','','','','','',''],
    ['','','','SE','','','',''],
    ['','','','NW','','','',''],
    ['','','','','','NE','',''],
    ['','','','','','','','W'],
]

const YELLOW_BOARD_3 = [
    ['X','','','','','','',''],
    ['','','','','','','SW',''],
    ['','SE','','','','','',''],
    ['','','','','NW','','','S'],
    ['','','','','','','',''],
    ['NW','','','','','','',''],
    ['','','NE','','','','',''],
    ['','','','','E','','',''],
]

const YELLOW_BOARD_4 = [
    ['','','','','','NE','','X'],
    ['','SE','','','','','',''],
    ['','','','','SW','','',''],
    ['S','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','NE','',''],
    ['','','','NW','','','',''],
    ['','','','','','','E',''],
]

// Blue Boards
const BLUE_BOARD_1 = [
    ['','','E','','','','',''],
    ['','','','','','','',''],
    ['','','','','','S','NW',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','SW','','','','','',''],
    ['S','','','','','','',''],
    ['','','','','NE','','','X'],
]

const BLUE_BOARD_2 = [
    ['','','','','','','','X'],
    ['','','','','SW','','',''],
    ['','NE','','','','','',''],
    ['S','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','NW',''],
    ['','','SE','','','','',''],
    ['','','','E','','','',''],
]

const BLUE_BOARD_3 = [
    ['','','','','','','','X'],
    ['S','','','','','','',''],
    ['','','','SE','','','',''],
    ['','','','','','NE','',''],
    ['','','SW','','','','',''],
    ['','','','','NE','','',''],
    ['','','','','','','',''],
    ['','','','','W','','',''],
]

const BLUE_BOARD_4 = [
    ['','','','','E','','',''],
    ['','','NW','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','SW',''],
    ['S','','','','','','',''],
    ['','','','','NE','','',''],
    ['','SE','','','','','',''],
    ['','','','','','','','X'],
]


export default { 
    'classic': {
        'RED': [ RED_BOARD_1, RED_BOARD_2, RED_BOARD_3, RED_BOARD_4 ],
        'GREEN': [ GREEN_BOARD_1, GREEN_BOARD_2, GREEN_BOARD_3, GREEN_BOARD_4 ],
        'YELLOW': [ YELLOW_BOARD_1, YELLOW_BOARD_2, YELLOW_BOARD_3, YELLOW_BOARD_4 ],
        'BLUE': [ BLUE_BOARD_1, BLUE_BOARD_2, BLUE_BOARD_3, BLUE_BOARD_4 ],
    }
}