const BOARD_1A = [
    ['','E','','','','','',''],
    ['','','', '','NW','','',''],
    ['','NE','','','','','',''],
    ['','','','','','','SE',''],
    ['','','','','','','',''],
    ['S','','','','','','',''],
    ['','','','SW','','','',''],
    ['','','','','','','','X'],
]

const BOARD_2A = [
    ['','','','E','','','',''],
    ['','','','','','NW','',''],
    ['','SE','','','','','',''],
    ['','','','','','','','S'],
    ['','','','','','','',''],
    ['','','','','','','SW',''],
    ['','','','NE','','','',''],
    ['X','','','','','','',''],
]

const BOARD_3A = [
    ['X','','','','','','',''],
    ['','','','','','','SE',''],
    ['NE','','','','','','','S'],
    ['','','','','','SW','',''],
    ['','','','','','','',''],
    ['','','NW','','','','',''],
    ['','','','','','','',''],
    ['','','','E','','','',''],
]

const BOARD_4A = [
    ['','','','','','NE','','X'],
    ['','SE','','','','','',''],
    ['','','','','SW','','',''],
    ['S','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','NE','',''],
    ['','','','NW','','','',''],
    ['','','','','','','E',''],
]

const BOARD_1B = [
    ['','','','','','W','',''],
    ['','','','','','','SE',''],
    ['','NW','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['S','','','','','','NE',''],
    ['','','','SW','','','',''],
    ['','','','','','','','X'],
]

const BOARD_2B = [
    ['','','E','','','','',''],
    ['','SW','','','','','',''],
    ['','','','','','','NE',''],
    ['','','','','','','',''],
    ['','','SE','','','','','S'],
    ['','','','','','','',''],
    ['','','','','NW','','',''],
    ['X','','','','','','',''],
]

const BOARD_3B = [
    ['X','','','','','','',''],
    ['','','','','','','','S'],
    ['SE','','','','','','',''],
    ['','','','','','NW','',''],
    ['','','','','','','',''],
    ['','SW','','','','','',''],
    ['','','','','','','NE',''],
    ['','','','','W','','',''],
]

const BOARD_4B = [
    ['','','','','','','','X'],
    ['','','','','SW','','',''],
    ['S','','','','','','NW',''],
    ['','','','','','','',''],
    ['','','','','','','','NE'],
    ['','NE','','','','','',''],
    ['','','','SE','','','',''],
    ['','','','','E','','',''],
]

// Empty board just in case
const EMPTY_BOARD = [
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
    ['','','','','','','',''],
]


export default { 
    '1A': BOARD_1A, 
    '2A': BOARD_2A, 
    '3A': BOARD_3A, 
    '4A': BOARD_4A, 
    '1B': BOARD_1B, 
    '2B': BOARD_2B, 
    '3B': BOARD_3B, 
    '4B': BOARD_4B
}