let alternate = true;
const $changeBackground = (event) => {
  const $clickedCircle = $(event.target)
  console.log('executing background changeBackground')
  if (alternate === true) {
    $clickedCircle.addClass('orange');
    alternate = false;
  } else {
    $clickedCircle.addClass('green');
    alternate = true
  }
}
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
    const $cell = $('<div>');
      $cell.addClass('column')
      $cell.addClass('none')
      $cell.attr('rowNumber', row)
      $cell.attr('columnNumber', column)
      $cell.on('click', $changeBackground);
      $row.append($cell);
    }
  }
}




$(() => {
makeBoard();
})
