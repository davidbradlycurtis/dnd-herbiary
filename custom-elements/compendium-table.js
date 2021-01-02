// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// compendium-table.js
//
// David Curtis
// copyright (c) 2020
// all rights reserved.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function drawTable(plants) {
    // get the reference for the body
    var table = document.getElementById('table');

    // get reference for <table> element
    var tbody = document.getElementById("tbody");

    // creating rows
    for (var r = 0; r < plants.length; r++) {
        var row = document.createElement("tr");

     // create cells in row
         for (let attribute in plants[r]) {
            var cell = document.createElement("td");
            var plant = plants[r];
            if (attribute === "biome" || attribute === "property") {
                cell.innerText = plant[attribute].join(", ");
            }
            else {
                cell.innerText = plant[attribute];
            }
            row.appendChild(cell);
        }           

        tbody.appendChild(row); // add the row to the end of the table body
    }

    table.appendChild(tbody); // appends <table> into <div>
    $('#table').bootstrapTable({
        onClickRow: function (row, $element) {

            $('#plantModal').modal();

            var message = "Row: " + row.name;
            //alert(message);
        }
      })
}

drawTable(plants);