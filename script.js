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

  for (let i = 0; i < total; i++) {
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

    container.appendChild(label);
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
