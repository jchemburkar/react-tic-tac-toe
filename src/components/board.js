import { useState } from 'react'
import { Square } from './square'

const GameStyle = {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
}

const RowStyle = {
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: '2px',
    width: '276px'
}

export const Board = () => {

    const [ curValue, setCurValue ] = useState('X')
    const [ gameIsWon, setGameIsWon ] = useState()
    const [ squares, setSquares ] = useState(Array(9).fill(null))

    const checkWinner = () => {
        // check diagonals
        if(
            (squares[1] && squares[1] === squares[5] && squares[5] === squares[9]) || // diagonal
            (squares[3] && squares[3] === squares[5] && squares[5] === squares[7]) || // diagonal
            (squares[1] && squares[1] === squares[2] && squares[1] === squares[3]) || // top row
            (squares[4] && squares[4] === squares[5] && squares[5] === squares[6]) || // middle row
            (squares[7] && squares[7] === squares[8] && squares[8] === squares[9]) || // bottom row
            (squares[1] && squares[1] === squares[4] && squares[4] === squares[7]) || // left column
            (squares[2] && squares[2] === squares[5] && squares[5] === squares[8]) || // center column
            (squares[3] && squares[3] === squares[6] && squares[6] === squares[9]) // right column
        ) {
            setGameIsWon(curValue)
        }
    }

    const makeSquare = (index) => {
        return (
            <Square
                value={squares[index]}
                onClick={() => {
                    console.log(squares[index], gameIsWon, !squares[index] && !gameIsWon)
                    if(!squares[index] && !gameIsWon) {
                        squares[index] = curValue
                        setSquares(squares)
                        checkWinner()
                        if(!gameIsWon){
                            setCurValue( curValue === "X" ? "O" : "X")
                        }
                    }
                }}
            />
        )
    }

    const restartGame = () => {
        setSquares(Array(9).fill(null))
        setGameIsWon()
        setCurValue('X')
    }

    return (
        <div style={GameStyle}>
            <div style={RowStyle}>
                {makeSquare(1)}
                {makeSquare(2)}
                {makeSquare(3)}
            </div>
            <div style={RowStyle}>
                {makeSquare(4)}
                {makeSquare(5)}
                {makeSquare(6)}
            </div>
            <div style={RowStyle}>
                {makeSquare(7)}
                {makeSquare(8)}
                {makeSquare(9)}
            </div>
            <div style={RowStyle}>
                <h1 style={{ textAlign: 'center', }}>
                    Player {gameIsWon ? gameIsWon + " Won!!!" : curValue + " is up"}
                </h1>
            </div>
            <button onClick={restartGame}> Start Over </button>
        </div>
    )
}
