
const PieceImage = {
    'BP': '../../assets/BlackPawn.png',
    'BB': '../../assets/BlackBishop.png',
    'BR': '../../assets/BlackRook.png',
    'BKn': '../../assets/BlackKnight.png',
    'BKi': '../../assets/BlackKing.png',
    'BQ': '../../assets/BlackQueen.png',
    'WP': '../../assets/WhitePawn.png',
    'WB': '../../assets/WhiteBishop.png',
    'WR': '../../assets/WhiteRook.png',
    'WKn': '../../assets/WhiteKnight.png',
    'WKi': '../../assets/WhiteKing.png',
    'WQ': '../../assets/WhiteQueen.png',
    '~': '#'
}

export class ChessPiece {
    image: string;
    symbol: string;
    constructor(symbol: string) {
        this.symbol = symbol;
        this.image = PieceImage[symbol];
    }
}
