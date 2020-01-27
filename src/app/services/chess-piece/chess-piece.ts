

export class ChessPiece {

    image: string;
    symbol: string;

    constructor(chesspiece: object) {
        this.symbol = chesspiece['symbol'];
        this.image = chesspiece['image'];
    }
}
