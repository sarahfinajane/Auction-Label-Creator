function generateLabels() {
  const prefix = document.getElementById("prefix").value.trim();
  const auctionNumber = document.getElementById("auctionNumber").value.trim();
  const start = parseInt(document.getElementById("startNumber").value, 10);
  const total = parseInt(document.getElementById("totalLabels").value, 10);
  const note = document.getElementById("note").value.trim();
  const font = document.getElementById("font").value;
  const borderStyle = document.getElementById("borderStyle").value;
  const color = document.getElementById("color").value;
  const textSize = parseInt(document.getElementById("textSize").value, 10);

  const container = document.getElementById("labels");
  container.innerHTML = "";

  if (!prefix) {
    alert("Please enter prefix letters.");
    return;
  }

  if (!auctionNumber) {
    alert("Please enter an auction number.");
    return;
  }

  if (isNaN(start) || start < 1) {
    alert("Please enter a valid starting number.");
    return;
  }

  if (isNaN(total) || total < 1) {
    alert("Please enter a valid total number of labels.");
    return;
  }

  const labelsPerSheet = 30;
  const totalSheets = Math.ceil(total / labelsPerSheet);

  for (let sheetIndex = 0; sheetIndex < totalSheets; sheetIndex++) {
    const sheet = document.createElement("div");
    sheet.className = "sheet";

    const labelsSheet = document.createElement("div");
    labelsSheet.className = "labels-sheet";

    const startLabelIndex = sheetIndex * labelsPerSheet;
    const endLabelIndex = Math.min(startLabelIndex + labelsPerSheet, total);

    for (let i = startLabelIndex; i < endLabelIndex; i++) {
      const label = document.createElement("div");
      label.className = "label";
      label.style.border = `1px ${borderStyle} ${color}`;
      label.style.fontFamily = font;
      label.style.color = color;
      label.style.fontSize = textSize + "px";

      const left = document.createElement("div");
      left.className = "left";
      left.textContent = prefix + auctionNumber;
      left.style.fontSize = textSize + "px";

      const right = document.createElement("div");
      right.className = "right";
      right.textContent = start + i;
      right.style.fontSize = (textSize + 4) + "px";

      label.appendChild(left);
      label.appendChild(right);

      if (note) {
        const noteDiv = document.createElement("div");
        noteDiv.className = "note";
        noteDiv.textContent = note;
        noteDiv.style.fontSize = Math.max(textSize - 4, 8) + "px";
        label.appendChild(noteDiv);
      }

      labelsSheet.appendChild(label);
    }

    sheet.appendChild(labelsSheet);
    container.appendChild(sheet);
  }
}

function printLabels() {
  const labels = document.getElementById("labels");

  if (!labels.children.length) {
    alert("Please generate labels first.");
    return;
  }

  window.print();
}
