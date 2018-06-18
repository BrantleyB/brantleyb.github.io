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

$(() => {
makeBoard();
})
