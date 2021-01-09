// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// compendium-table.js
//
// David Curtis
// copyright (c) 2020
// all rights reserved.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function drawTable(plants) {

    $table = $('#table');
    $table.bootstrapTable({
        data: plants
    });

    $('#table').on('click-row.bs.table', function (e, row, $element) {
        showModal('#plantModal', row);
    });
}

drawTable(plants);