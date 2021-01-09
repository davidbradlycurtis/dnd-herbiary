// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// herb-modal.js
//
// David Curtis
// copyright (c) 2020
// all rights reserved.
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
function showModal(modalName, row) {

    $(modalName).on('show.bs.modal', function (event) {
        
        var modal = $(this)
        modal.find('.modal-title').text(row.name)
        modal.find('.modal-body').text(plant_dscr[row.name.split(" ").join("")])
    })

    $(modalName).modal('show');
}
