// https://leetcode.com/problems/zigzag-conversion/

/**
 * Converts a string into a zigzag pattern on a given number of rows and then reads it line by line.
 *
 * @param {string} s The input string.
 * @param {number} numRows The number of rows for the zigzag pattern.
 * @returns {string} The string read line by line from the zigzag pattern.
 */
export function convert(s: string, numRows: number): string {
  // Edge case: If numRows is 1 or string is shorter than numRows, the pattern is just the string itself.
  if (numRows === 1 || s.length <= numRows) {
    return s;
  }

  // Create an array of strings, one for each row, to build the zigzag pattern.
  const rows: string[] = Array(numRows).fill('');
  let currentRow = 0;
  // Direction flag: true means moving down, false means moving up (diagonally).
  let goingDown = false;

  for (const char of s) {
    // Append the current character to the string corresponding to the current row.
    rows[currentRow] += char;

    // Change direction when reaching the top row (0) or the bottom row (numRows - 1).
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }

    // Move to the next row based on the current direction.
    currentRow += goingDown ? 1 : -1;
  }

  // Concatenate all rows in order to reconstruct the final string.
  return rows.join('');
}
