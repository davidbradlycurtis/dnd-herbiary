function drawTable() {
    // get the reference for the body
    var table = document.getElementById('coldiv');

    // get reference for <table> element
    var tbl = document.getElementById("plant-table");

    // creating rows
    for (var r = 0; r < plants_data.length; r++) {
        var row = document.createElement("tr");

     // create cells in row
         for (let property in plants_data[r]) {
            var cell = document.createElement("td");
            var cellText = document.createElement('span');
            cellText.innerText = plants_data[r[property]];
            cell.appendChild(cellText);
            row.appendChild(cell);
        }           

tbl.appendChild(row); // add the row to the end of the table body
    }

 table.appendChild(tbl); // appends <table> into <div>
}

drawTable();