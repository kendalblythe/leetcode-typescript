// https://leetcode.com/problems/zigzag-conversion/

/**
 * Converts a string into a zigzag pattern on a given number of rows and then reads it line by line.
 *
 * @param {string} s The input string.
 * @param {number} numRows The number of rows for the zigzag pattern.
 * @returns {string} The string read line by line from the zigzag pattern.
 */
export function convert(s: string, numRows: number): string {
  // Base case: if only 1 row, return the string as-is
  if (numRows === 1) {
    return s;
  }

  // Convert string to character array for easier iteration
  const chars = [...s];

  // Use a grid object to store characters at specific (row, col) coordinates
  // Key format: "row,col" to represent each position in the zigzag grid
  const grid: Record<string, string> = {};

  let rowIndex = 0; // Current row in the zigzag pattern
  let colIndex = 0; // Current column in the zigzag pattern

  // Iterate through each character and place it in the grid
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];

    // Calculate the offset within the current cycle of the zigzag pattern
    // The pattern repeats every (numRows - 1) column cycles
    const colOffset = colIndex % (numRows - 1);

    if (colOffset === 0) {
      // We're at the start of a cycle, so move down the first column
      grid[`${rowIndex},${colIndex}`] = c;

      // After placing character, move to the next row
      rowIndex++;

      // If we've reached the bottom row, reset to top and move to next column
      if (rowIndex === numRows) {
        rowIndex = 0;
        colIndex++;
      }
    } else {
      // We're in the diagonal phase, so move diagonally up and right
      // The diagonal row is calculated as: numRows - colOffset - 1
      grid[`${rowIndex + numRows - colOffset - 1},${colIndex}`] = c;

      // After placing character, move to next column for diagonal movement
      colIndex++;
    }
  }

  // Build the result string by reading the grid row by row
  let result = '';

  // Iterate through each row (0 to numRows-1)
  for (let r = 0; r < numRows; r++) {
    // Iterate through each column that has characters
    for (let c = 0; c <= colIndex; c++) {
      // Check if this grid coordinate has a character
      const key = `${r},${c}`;
      if (grid[key]) {
        // Append the character to result if it exists
        result += grid[key];
      }
    }
  }

  return result;
}
