let marks = new Array();

document.getElementById('solve').onclick = function() {
  addElements(Number(document.getElementById('students').value), Number(document.getElementById('mark').value));
  solutions();
}

const addElements = (students, mark) => {
  if (marks.length < students && mark > 0 && mark < 11) {
    marks.push(mark);
  }
}

const findMinMax = (marks) => {
  let max = marks[0];
  let min = marks[0];
  let sum = 0;
  let quality = 0;

  marks.forEach(mark => {
    if (max < mark) {
      max = mark;
    }
    if (min > mark) {
      min = mark;
    }
    if (mark >= 5) {
      quality++;
    }
    sum += mark;
  });
  let gap = max - min;
  return [max, min, gap, Math.round(sum / marks.length), Math.round(quality * 100 / marks.length)];
}

const solutions = () => {
  let results = findMinMax(marks);
  document.getElementById('marks').value = marks;
  document.getElementById('max').value = results[0];
  document.getElementById('min').value = results[1];
  document.getElementById('gap').value = results[2];
  document.getElementById('med').value = results[3];
  document.getElementById('quality').value = results[4];
}