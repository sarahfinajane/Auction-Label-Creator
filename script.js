function generateLabels() {
  const prefix = document.getElementById("prefix").value;
  const auctionNumber = document.getElementById("auctionNumber").value;
  const start = parseInt(document.getElementById("startNumber").value);
  const total = parseInt(document.getElementById("totalLabels").value);
  const note = document.getElementById("note").value;

  const font = document.getElementById("font").value;
  const borderStyle = document.getElementById("borderStyle").value;
  const color = document.getElementById("color").value;

  const container = document.getElementById("labels");
  container.innerHTML = "";

  for (let i = 0; i < total; i++) {
    const label = document.createElement("div");
    label.className = "label";

    label.style.border = `1px ${borderStyle} ${color}`;
    label.style.fontFamily = font;
    label.style.color = color;

    const left = document.createElement("div");
    left.className = "left";
    left.innerText = prefix + auctionNumber;

    const right = document.createElement("div");
    right.className = "right";
    right.innerText = start + i;

    label.appendChild(left);
    label.appendChild(right);

    if (note) {
      const noteDiv = document.createElement("div");
      noteDiv.className = "note";
      noteDiv.innerText = note;
      label.appendChild(noteDiv);
    }

    container.appendChild(label);
  }
}
