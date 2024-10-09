document.addEventListener("DOMContentLoaded", function () {
  generarSudoku();
});

const generarSudoku = () => {
  const sudokuGrid = document.getElementById("sudokuGrid");
  sudokuGrid.innerHTML = "";
  const sudokuBase = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const input = document.createElement("input");
      input.type = "number";
      input.min = 1;
      input.max = 9;

      if (Math.random() < 0.5) {
        input.value = sudokuBase[i][j];
        input.readOnly = true;
        input.disabled = true;
      } else {
        input.value = "";
      }
      input.id = `cell-${i}-${j}`;
      sudokuGrid.appendChild(input);
    }
  }
};

const verificarSudoku = () => {
  const sudokuCorrecto = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9],
  ];

  // Eliminar clases anteriores
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const cell = document.getElementById(`cell-${i}-${j}`);
      cell.classList.remove("correct");
      cell.classList.remove("incorrect");
    }
  }
  let correcto = true;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const input = document.getElementById(`cell-${i}-${j}`);
      const cellValue = parseInt(input.value, 10); // Convertir a número, base 10

      // Si la celda es vacía o el valor es incorrecto
      if (isNaN(cellValue) || cellValue !== sudokuCorrecto[i][j]) {
        correcto = false;
        input.classList.add("incorrect");
      } else {
        input.classList.add("correct");
      }
    }
  }

  let resultado = document.getElementById("resultado");
  if (correcto) {
    resultado.innerHTML = "¡Sudoku correcto!";
  } else {
    resultado.innerHTML = "¡Sudoku incorrecto!";
  }
};
