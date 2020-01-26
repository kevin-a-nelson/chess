import { Board } from './board';

const board = [
    ['BR', 'BKn', 'BB', 'BQ', 'BKi', 'BB', 'BKn', 'BR'],
    ['BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP', 'BP'],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP', 'WP'],
    ['WR', 'WKn', 'WB', 'WQ', 'WKi', 'WB', 'WKn', 'WR'],
]

export const CHESS_BOARD: Board = {
    board: board,
}