//make a board
const $circle = $('.circle');
const makeBoard = () => {
  for (let row = 1; row <= 7; row++) {
  let $row = $('<div>');
  $('.board').append($row);
  $row.addClass('row');
  $row.attr('rowNumber', row);
  for (let column = 1; column <= 6; column++) {
    let $column = $('<div>');
    $row.append($column);
    $column.addClass('empty-column');
    $column.attr('columnNumber', column);
    }
  }
}

$(() => {
makeBoard();
})
