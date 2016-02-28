//var $ = require('jquery');
//var dt = require( 'datatables.net' )();

$(document).ready(function() {
	console.log("creating datatable");
    $('#parkingLot').DataTable( {
        "processing": true,
        "serverSide": true,
        "ajax": {
        	url: "/parkingLot",
        	dataSrc: "vehicles"
        },
        "columns": [
        {data: "vehicleId"},
        {data: "vehicleName"}
        ]
    });
});