document.getElementById('initiative-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const keyResult = document.getElementById('key-result').value;
    const initiativeName = document.getElementById('initiative-name').value;
    const interdependency = parseInt(document.getElementById('interdependency').value);
    const synergistic = parseInt(document.getElementById('synergistic').value);
    const speed = parseInt(document.getElementById('speed').value);
    const customer = parseInt(document.getElementById('customer').value);

    const totalScore = interdependency + synergistic + speed + customer;
    const initiative = { keyResult, initiativeName, totalScore };

    addInitiativeToTable(initiative);
    sortTableByScore();
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

    rows.sort((a, b) => {
        const scoreA = parseInt(a.cells[2].textContent);
        const scoreB = parseInt(b.cells[2].textContent);
        return scoreB - scoreA; // Sort descending
    });

    rows.forEach((row, index) => {
        row.cells[3].textContent = index + 1; // Update rank
        table.getElementsByTagName('tbody')[0].appendChild(row); // Reorder rows
    });
}
