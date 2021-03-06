//Changes the class of the circle which adds a new background color
let alternate = true;
const $changeBackground = (event) => {
  const $clickedCircle = $(event.target)
  console.log('executing background changeBackground')
//Alternates between the two colors
  if (alternate === true) {
    $clickedCircle.removeClass('empty')
    $clickedCircle.addClass('orange');
    alternate = false;
  } else {
    $clickedCircle.removeClass('empty')
    $clickedCircle.addClass('green');
    alternate = true
  }
  checkWinner();
}
//make a board
const $circle = $('.circle');
const makeBoard = () => {
  for (let column = 1; column <= 6; column++) {
    let $column = $('<div>');
    $column.addClass('column');
    $column.attr('columnNumber', column);
    for (let row = 1; row <= 7; row++) {
      let $row = $('<div>');
      // $row.append($column);
      $row.addClass('empty');
      $row.attr('columnNumber', row);
      $row.attr('rowNumber', column)
      $row.on('click', $changeBackground)
      $column.append($row);
    }
    $('.board').append($column);
  }
}
// let currentRow = 0;
const checkWinner = () => {
  checkVerticalWinner();
  checkHorizontalWinner();
}
//   // console.log('starting checkWinner');
//   // console.log($clickedCircle.attr('rowNumber'));
//   let currentRow = Number($clickedCircle.attr('rowNumber'));
//   let currentCol = Number($clickedCircle.attr('columnNumber'));
//   let currentClass = $clickedCircle.attr('class');
//   let nextCircleRow = currentRow + row;
//   let nextCircleColumn = currentCol + column;
//   let $nextCircle = $(`div[rownumber=${nextCircleRow}][columnnumber=${nextCircleColumn}]`)
//
//   if ($nextCircle.attr('class') == currentClass){
//     console.log('same class');
//   } else {
//     console.log('no match');
//   }
//   // console.log(`My row number is ${nextCircleRow}`)
//   // console.log(`My column number is ${nextCircleColumn}`)
//   // console.log(`My circle class is ${currentClass}`)

// ($clickedCircle, 0, 1) checks left
// ($clickedCircle, 0, -1) checks right
// ($clickedCircle, 1, 0) checks up
// ($clickedCircle, -1, 0) checks down
const checkVerticalWinner = () => {
  for (let row = 1; row <= 4; row++) // Outer loop, goes through rows
  {
    for (let column = 1; column <=7; column++) // Inner loop, goes through the columns (individual circle)
    {
      let currentCircle = $(`div[rownumber=${row}][columnnumber=${column}]`).attr('class');
      let circle2 = $(`div[rownumber=${row+1}][columnnumber=${column}]`).attr('class');
      let circle3 = $(`div[rownumber=${row+2}][columnnumber=${column}]`).attr('class');
      let circle4 = $(`div[rownumber=${row+3}][columnnumber=${column}]`).attr('class');
      if ((currentCircle === circle2) && (currentCircle === circle3) && (currentCircle === circle4) && currentCircle != 'empty') {
        if (alternate == true) {
          alert('Green Wins')
        } else {
          alert('Orange Wins');
        }
      }
    }
  }
}

const checkHorizontalWinner = () => {
  for (let row = 1; row <= 6; row++) // Outer loop, goes through rows
  {
    for (let column = 1; column <=4; column++) // Inner loop, goes through the columns (individual circle)
    {
      let currentCircle = $(`div[rownumber=${row}][columnnumber=${column}]`).attr('class');
      let circle2 = $(`div[rownumber=${row}][columnnumber=${column+1}]`).attr('class');
      let circle3 = $(`div[rownumber=${row}][columnnumber=${column+2}]`).attr('class');
      let circle4 = $(`div[rownumber=${row}][columnnumber=${column+3}]`).attr('class');
      console.log(currentCircle, circle2, circle3, circle4)
      if ((currentCircle === circle2) && (currentCircle === circle3) && (currentCircle === circle4) && currentCircle != 'empty') {
        console.log(column, row)
        console.log('string');
        if (alternate == true) {
          alert('Green Wins')
        } else {
          alert('Orange Wins');
        }
      }
    }
  }
}
// $('.board').empty();

$(() => {
makeBoard();
})
