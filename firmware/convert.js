const { data } = require("./data");
const keys = data.layouts.LAYOUT.layout;

const priority = [
  0,
  2,
  4,
  6,
  8,
  1,
  3,
  5,
  7,
  9
]

const rowWeight = [
  0,
  1,
  2,
  3,
  4,
  0,
  1,
  2,
  3,
  4,
]

const sortFn = (a ,b) => {
  const [ra, ca] = a.matrix;
  const [rb, cb] = b.matrix;
  const weighta = (rowWeight[ra] * 100) + (ca * 10) + ra;
  const weightb = (rowWeight[rb] * 100) + (cb * 10) + rb;
  return weighta - weightb;
}

keys.forEach(key => {
  const [row, col] = key.label.split(',');
  key.matrix = [
    parseInt(row),
    parseInt(col)
  ];
});
keys.sort(sortFn);
console.log(JSON.stringify(data, null, '    '));

const output = [];
keys.forEach(key => {
  const [row, col] = key.matrix;
  if (col === 0 && row >= 1 && row <= 4) {
    output.push("\n");
  }
  output.push(`"KC_00${row}${col}", `);
});
//console.log(output.join(''));
