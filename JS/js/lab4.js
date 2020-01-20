class CustomArray {
  constructor(rows, columns) {
    this.array = [];
    this.rows = rows;
    this.columns = columns;
  }

  createArray() {
    for (let i = 0; i < this.rows; i++) {
      this.array[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.array[i][j] = i + 1;
      }
    }
    return this.array;
  };

  getMinMax() {
    let min = 10;
    let max = this.array[0][0];
    let positionMin = '';
    let positionMax = '';
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        if (min > this.array[i][j]) {
          min = this.array[i][j];
          positionMin = `row ${i} column ${j}`;
        }
        if (max < this.array[i][j]) {
          max = this.array[i][j];
          positionMax = `row ${i} column ${j}`;
        }
      }
    }
    return [min, max, positionMin, positionMax];
  };

  swapLines(firstLine, secondLine) {
    let copyFirstLine = this.copyLine(firstLine);
    let copySecondLine = this.copyLine(secondLine);

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.array[firstLine] = copySecondLine;
        this.array[secondLine] = copyFirstLine;
      }
    }
    return this.array;
  };

  addLine() {
    let line = [];
    for (let i = 0; i < this.columns; i++) {
      line[i] = this.array.length + 1
    }
    this.array[this.array.length] = line;
    return this.array;
  };

  sortBy() {
    this.array[this.array.length] = [];
    for (let index = 0; index < this.array.length - 1; index++) {
      for (let i = 0; i < this.rows; i++) {
        for (let j = 0; j < this.columns; j++) {
          if (this.array[i][j] < this.array[i + 1][j]) {
            this.swapLines(i, i + 1);
          }
        }
      }
    }
    return this.array;
  };

  copyLine(line) {
    let copy = [];
    for (let i = line; i < line + 1; i++) {
      for (let j = 0; j < this.columns; j++) {
        copy[j] = this.array[i][j];
      }
    }
    return copy;
  }
}
