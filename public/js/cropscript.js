$(document).ready(function() {

    // jquery references for inputs for adding crop
    const cropNameInput = $("#crop-name");
    const growTimeInput = $("#grow-time");
    const plantingRangeInput = $("#planting-range");
    const cropContainer = $("#crop-container");
    const cropBody = $("#crop-body");

    // listener for displaying crops button
    $(document).on("click", "#display-crops", getCrops);
    // on lick listeners for save buttons in crop modal
    $(document).on("click", "#add-crop", addCropHandle);
    // listeners for page direct (manage crop/field)
    $(document).on("click", "#crop-page", getCropPage);
    $(document).on("click", "#field-page", getFieldPage);
    // listener for delete crop
    $(document).on("click", ".delete-crop", handleDeleteCrop);
    // listener for update crop
    // $(document).on("click", ".update-crop", handleUpdateCrop);

    // goes to the crop page
    function getCropPage() {
        window.location.href = "./crops.html";
    }

    // goes to the field page
    function getFieldPage() {
        window.location.href = "./fields.html"
    }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
    // function to create html table data for existing crops 
    function createCropRow(cropData) {
        // console.log(cropData);
        $("#crop-body").append(`<tr id="${cropData.id}"><td>${cropData.cropName}</td><td>${cropData.growTime}</td><td>${cropData.season}</td><td>${cropData.irrigation}</td><td><button type="button" class="btn btn-info update-crop">Update</button></td><td><button type="button" class="btn btn-danger delete-crop">Delete</button></td></tr>`)
    }

    // function gets crop from database
    function getCrops() {
        $.get("/api/crops", function(data) {
            let rowsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                rowsToAdd.push(createCropRow(data[i]));                
            }
            // console.log(rowsToAdd);
        });
    }

    // function for handling saving crop
    function addCropHandle (event) {
        event.preventDefault();
        upsertCrop({
            cropName: cropNameInput.val(),
            growTime: growTimeInput.val(),
            irrigation: false,
            season: plantingRangeInput.val()
        });
    }

    // function for adding the crop to the database
    function upsertCrop(cropData) {
        $.post("/api/crops", cropData);
    }

    // TODO: function for updating crop data
    function handleDeleteCrop() {
        let cropRowData = $(this).closest("tr").attr("id");
        let id = cropRowData;
        console.log(cropRowData);
        $.ajax({
            method: "DELETE",
            url: "/api/crops/" + id
        })
        // need to be able to clear the whole table
        .then(getCrops);
    }

    // TODO: function for deleting crop data
});
