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

// Slider value to description mappings
const descriptions = {
    interdependency: {
        1: "Low",
        2: "Low-Medium",
        3: "Medium",
        4: "Medium-High",
        5: "High"
    },
    synergistic: {
        1: "Low",
        2: "Low-Medium",
        3: "Medium",
        4: "Medium-High",
        5: "High"
    },
    speed: {
        1: "Low Impact, High Effort",
        2: "Low Impact, Low Effort",
        3: "High Impact, High Effort",
        4: "High Impact, Low Effort"
    },
    customer: {
        1: "Low Impact, High Cost",
        2: "Low Impact, Low Cost",
        3: "High Impact, High Cost",
        4: "High Impact, Low Cost"
    }
};

// Update displayed slider descriptions
const sliders = document.querySelectorAll('input[type="range"]');
sliders.forEach(slider => {
    slider.addEventListener('input', function() {
        const description = descriptions[slider.name][slider.value];
        document.getElementById(`${slider.id}-value`).textContent = description;
    });

    // Initialize the description display with the default value
    const initialDescription = descriptions[slider.name][slider.value];
    document.getElementById(`${slider.id}-value`).textContent = initialDescription;
});

// Extract table data to Excel
document.getElementById('extract-button').addEventListener('click', function() {
    var table = document.getElementById('initiatives-table');
    var wb = XLSX.utils.table_to_book(table, {sheet: "Initiatives"});
    XLSX.writeFile(wb, 'InitiativesData.xlsx');
});
