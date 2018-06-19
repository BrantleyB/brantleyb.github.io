//Changes the class of the circle which adds a new background color
let alternate = true;
const $changeBackground = (event) => {
  const $clickedCircle = $(event.target)
  console.log('executing background changeBackground')
//Alternates between the two colors
  if (alternate === true) {
    $clickedCircle.removeClass('empty-column')
    $clickedCircle.addClass('orange');
    alternate = false;
  } else {
    $clickedCircle.removeClass('empty-column')
    $clickedCircle.addClass('green');
    alternate = true
  }
  checkWinner($clickedCircle);
}
//make a board
const $circle = $('.circle');
const makeBoard = () => {
  for (let row = 1; row <= 7; row++) {
    let $row = $('<div>');
    $row.addClass('row');
    $row.attr('rowNumber', row);
    for (let column = 1; column <= 6; column++) {
      let $column = $('<div>');
      $row.append($column);
      $column.addClass('empty-column');
      $column.attr('rowNumber', row)
      $column.attr('columnNumber', column);
      $column.on('click', $changeBackground)
      $row.append($column);
    }
    $('.board').append($row);
  }
}
// let currentRow = 0;
const checkWinner = ($clickedCircle) => {
  console.log('starting checkWinner');
  console.log($clickedCircle.attr('rowNumber'));
  let currentRow = $clickedCircle.attr('rowNumber');
  let currentCol = $clickedCircle.attr('columnNumber');
  // currentCol++
  $(`div[rownumber=${currentRow}][columnnumber=${currentCol}]`)
  console.log(`My row number is  ${currentRow}`)
  console.log(`My column number is  ${currentCol}`)
}


$(() => {
makeBoard();
})
