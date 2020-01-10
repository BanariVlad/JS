let marks = new Array();

document.getElementById('solve').onclick = function() {
  addElements(Number(document.getElementById('students').value), Number(document.getElementById('mark').value));
  findMinMax(marks);
  //Solutions
  document.getElementById('marks').value = marks;
  document.getElementById('quality').value = getSolution(marks);
  document.getElementById('min').value = findMinMax(marks)[1];
  document.getElementById('max').value = findMinMax(marks)[0];
  document.getElementById('gap').value = findMinMax(marks)[2];
  document.getElementById('med').value = findMinMax(marks)[3];
}

const addElements = (students, mark) => {
  if (marks.length < students && mark > 0 && mark < 11) {
    marks.push(mark);
  }
}

const getSolution = (marks) => {
  let quality = 0;
  marks.forEach(mark => {
    if (mark >= 5) {
      quality++;
    }
  });
  return quality * 100 / marks.length
}

const findMinMax = (marks) => {
  let max = marks[0];
  let min = marks[0];
  let sum = 0;

  marks.forEach(mark => {
    if (max < mark) {
      max = mark;
    }
    if (min > mark) {
      min = mark;
    }
    sum += mark;
  });
  let gap = max - min;
  return [max, min, gap, sum / marks.length];
}