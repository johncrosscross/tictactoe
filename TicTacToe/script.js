
let squares = document.querySelectorAll('.squares');
squares = Array.from(squares);

let play = 'X'

let winningCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

function checkForWinner() {
	winningCombos.forEach(function(combination) {
		let winner = combination.every(index => squares[index].innerText == play);
		if(winner) {
			combination.forEach(index => squares[index].style.backgroundColor = 'yellow');
			alert('Player ' + play + ' wins');
			
		}
	});
	
}

squares.forEach(function(square) {
	square.addEventListener('click', function() {
		if (square.innerText != '') return;
		square.innerText = play;
		checkForWinner();
		play = play == 'X' ? 'O' : 'X';
		});
});
