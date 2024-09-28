function insert_Row() {
    // Get the table by its ID
    const table = document.getElementById("sampleTable");
    
    // Create a new row
    const newRow = table.insertRow();

    // Create two new cells
    const cell1 = newRow.insertCell(0); // Left cell
    const cell2 = newRow.insertCell(1); // Right cell

    // Add text to the new cells
    cell1.innerHTML = "New Cell11"; // Content for the left cell
    cell2.innerHTML = "New Cell12"; // Content for the right cell
}
