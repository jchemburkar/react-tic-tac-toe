# react-tic-tac-toe
A basic tic tac toe UI to practice React.

## Goal
The goal of this project is to get practice using react hooks -- specifically the `useState` hook. Further, it was a good practice of object oriented programming, using nested components to create the "board".

## Design
The parent object of the game is the "board", which has a handful of core responsibilities:
1. maintaining the state of X's/O's placed
2. keeping track of who is up
3. keeping track of whether a game is won
4. checking if a square is clickable, and if so, assigning a value to the square
5. restarting the game if directed

This comprises most of the logic of the game. However, we still needed the square component to create the actual game board. This component was responsible for:
1. formatting what one cell of the board looks like
2. maintaining which value it has
3. handling a click

## Improvements?
This is obviously a bit basic, so brainstorming some possible improvements:
- the easiest to note is the aesthetic. Tinkering with fonts, using images for X/O rather than plain text, improving the look of the game board, etc.
- a lot of logic is contained in the board file -- if this project were to expand, would there be a better way to split that up?
- the logic for a "winner" is hard coded -- would there be a cleaner way to write that such that it would scale if the board changed sizes?