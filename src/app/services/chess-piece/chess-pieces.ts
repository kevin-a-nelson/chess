
function pieceImage(piece: string, color: string) {
    return `../../assets/${color}${piece}.png`
}

function Pawn(color: string) {
    return {
        'image': pieceImage('Pawn', color),
        'moves': [
            [0, 1, 0],
            [0, 0, 0],
            [0, 0, 0],
        ]
    }
}

function Bisshop(color: string) {
    return {
        'image': pieceImage('Bishop', color),
        'moves': [
            [7, 0, 7],
            [0, 0, 0],
            [7, 0, 7],
        ]
    }
}

function Rook(color: string) {
    return {
        'image': pieceImage('Rook', color),
        'moves': [
            [0, 0, 0],
            [7, 0, 7],
            [0, 0, 0],
        ]
    }
}

function Knight(color: string) {
    return {
        'image': pieceImage('Knight', color),
        'moves': [
            [[1, 2], 0, [1, 2]],
            [0, 0, 0],
            [[1, 2], 0, [1, 2]],
        ]
    }
}

function King(color: string) {
    return {
        'image': pieceImage('King', color),
        'moves': [
            [1, 1, 1],
            [1, 0, 1],
            [1, 1, 1],
        ]
    }
}

function Queen(color: string) {
    return {
        'image': pieceImage('Queen', color),
        'moves': [
            [7, 7, 7],
            [7, 0, 7],
            [7, 7, 7],
        ]
    }
}

export const ChessPieces = {
    'BP': Pawn("Black"),
    'BB': Bisshop("Black"),
    'BR': Rook("Black"),
    'BKn': Knight("Black"),
    'BKi': King("Black"),
    'BQ': Queen("Black"),
    'WP': Pawn("White"),
    'WB': Bisshop("White"),
    'WR': Rook("White"),
    'WKn': Knight("White"),
    'WKi': King("White"),
    'WQ': Queen("White"),
    '': false
}