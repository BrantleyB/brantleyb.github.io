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
  checkWinner($clickedCircle, 0, 0);
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
const checkWinner = ($clickedCircle, row, column) => {
  console.log('starting checkWinner');
  console.log($clickedCircle.attr('rowNumber'));
  let currentRow = Number($clickedCircle.attr('rowNumber'));
  let currentCol = Number($clickedCircle.attr('columnNumber'));
  let currentClass = $clickedCircle.attr('class');
  let nextCircleRow = currentRow + row;
  let nextCircleColumn = currentCol + column;
  let $nextCircle = $(`div[rownumber=${nextCircleRow}][columnnumber=${nextCircleColumn}]`)
  if ($nextCircle.attr('class') == currentClass){
    console.log('same class');
  } else {
    console.log('no match');
  }
  console.log(`My row number is ${nextCircleRow}`)
  console.log(`My column number is ${nextCircleColumn}`)
  console.log(`My circle class is ${currentClass}`)
}


$(() => {
makeBoard();
})
