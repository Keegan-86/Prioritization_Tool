document.getElementById('initiative-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const keyResult = document.getElementById('key-result').value;
    const initiativeName = document.getElementById('initiative-name').value;
    const interdependency = parseInt(document.getElementById('interdependency').value);
    const synergistic = parseInt(document.getElementById('synergistic').value);
    const speed = parseInt(document.getElementById('speed').value);
    const customer = parseInt(document.getElementById('customer').value);

    // Calculate the total score
    const totalScore = interdependency + synergistic + speed + customer;

    // Create an object for the initiative
    const initiative = { keyResult, initiativeName, totalScore };

    // Add the initiative to the table
    addInitiativeToTable(initiative);

    // Sort the table by score and update ranks
    sortTableByScore();

    // Clear the form
    this.reset();
});

function addInitiativeToTable(initiative) {
    const tableBody = document.getElementById('initiatives-table').getElementsByTagName('tbody')[0];
    const newRow = tableBody.insertRow();

    newRow.insertCell(0).textContent = initiative.keyResult;
    newRow.insertCell(1).textContent = initiative.initiativeName;
    newRow.insertCell(2).textContent = initiative.totalScore;
    newRow.insertCell(3).textContent = ''; // Rank will be updated after sorting
}

function sortTableByScore() {
    const table = document.getElementById('initiatives-table');
    const rows = Array.from(table.getElementsByTagName('tbody')[0].rows);

    // Sort rows by the total score (descending)
    rows.sort((a, b) => {
        const scoreA = parseInt(a.cells[2].textContent);
        const scoreB = parseInt(b.cells[2].textContent);
        return scoreB - scoreA;
    });

    // Update ranks and reattach sorted rows to the table
    rows.forEach((row, index) => {
        row.cells[3].textContent = index + 1; // Update rank
        table.getElementsByTagName('tbody')[0].appendChild(row); // Reorder rows in the table
    });
}
