function drawRuler(inches, majorLength) {
  drawLine(majorLength, 0); // draw the 0-inch line
  for (let i = 1; i <= inches; i++) {
    drawInterval(majorLength - 1); // draw the intervals for each inch
    drawLine(majorLength, i); // draw the inch line
  }
}

function drawInterval(majorLength) {
  if (majorLength > 0) {
    drawInterval(majorLength - 1); //recursively draw top interval
    drawLine(majorLength); // // draw center tick line (without label)
    drawInterval(majorLength - 1);//recursively draw bottom interval
  }
}

function drawLine(length, label) {
  let line = "-".repeat(length);
  if (label !== undefined) {
    line += " " + label;
  }
  console.log(line);
}

// Usage example:
drawRuler(3, 3);

/*
In general, an interval with a central tick length L ≥ 1 is composed of:
• An interval with a central tick length L − 1
• A single tick of length L
• An interval with a central tick length L − 1
*/