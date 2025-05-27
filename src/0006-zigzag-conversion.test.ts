// https://leetcode.com/problems/zigzag-conversion/description/
import { expect, test } from 'vitest';

test('6. Zigzag Conversion', () => {
  expect(zigzagConvert('PAYPALISHIRING', 3)).toEqual('PAHNAPLSIIGYIR');
  expect(zigzagConvert('PAYPALISHIRING', 4)).toEqual('PINALSIGYAHRPI');
  expect(zigzagConvert('A', 1)).toEqual('A');
});

const zigzagConvert = (s: string, numRows: number): string => {
  // Return string if num rows = 1
  if (numRows === 1) {
    return s;
  }

  // Add string characters to grid (downward/right)
  const chars = [...s];
  const grid: Record<string, string> = {};
  let rowIndex = 0;
  let colIndex = 0;
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    const colOffset = colIndex % (numRows - 1);
    if (colOffset === 0) {
      grid[getGridCoordinateKey(rowIndex++, colIndex)] = c;
      if (rowIndex === numRows) {
        rowIndex = 0;
        colIndex++;
      }
    } else {
      grid[getGridCoordinateKey(rowIndex + numRows - colOffset - 1, colIndex)] = c;
      colIndex++;
    }
  }

  // Build new string from grid characters (rightward/down)
  let str = '';
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c <= colIndex; c++) {
      const key = getGridCoordinateKey(r, c);
      if (grid[key]) {
        str += grid[key];
      }
    }
  }
  return str;
};

const getGridCoordinateKey = (rowIndex: number, colIndex: number): string =>
  `${rowIndex},${colIndex}`;
