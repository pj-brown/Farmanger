$(document).ready(function() {

    // jquery references for inputs for adding crop from modal inputs
    const cropNameInput = $("#crop-name");
    const growTimeInput = $("#grow-time");
    const plantingRangeInput = $("#planting-range");
    // jquery references for inputs for updating crop from modal inputs
    // const cropNameUpdate = $("#crop-name-update");
    // const growTimeUpdate = $("#grow-time-update");
    // const plantingRangeUpdate = $("#planting-range-update");

    // listener for displaying crops button
    $(document).on("click", "#display-crops", getCrops);
    // on lick listeners for save buttons in crop modal
    $(document).on("click", "#add-crop", handleAddCrop);
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
        $("#crop-body").append(`<tr id="${cropData.id}">
        <td><input type="text" class="form-control" id="crop-name-update" placeholder="${cropData.cropName}"></td>
        <td><input type="text" class="form-control" id="grow-time-update" placeholder="${cropData.growTime}"></td>
        <td><input type="text" class="form-control"  id="planting-range-update" placeholder="${cropData.season}"></td>
        <td><button type="button" class="btn btn-info update-crop">Update</button></td>
        <td><button type="button" class="btn btn-danger delete-crop">Delete</button></td>
        </tr>`)
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
    function handleAddCrop (event) {
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

    // function for deleting crop data from table & database
    function handleDeleteCrop() {
        let cropRowData = $(this).closest("tr").attr("id");
        let id = cropRowData;
        // console.log(cropRowData);
        $.ajax({
            method: "DELETE",
            url: "/api/crops/" + id
        })
        // need to be able to clear the whole table before "re-getting" the table
        .then(getCropPage);
    }

    // TODO: function for updating crop data
    // function handleUpdateCrop(){
    //     let cropRowData = $(this).closest("tr").attr("id");
    //     let id = cropRowData;
    //     console.log(cropRowData);
    //     upsertCrop({
    //         cropName: cropNameUpdate.val(),
    //         growTime: growTimeUpdate.val(),
    //         irrigation: false,
    //         season: plantingRangeUpdate.val()
    //     });
    //     $.ajax({
    //         method: "PUT",
    //         url: "/api/crops/" + id
    //     })
    // }
    // const cropNameUpdate = $("#crop-name-update");
    // const growTimeUpdate = $("#grow-time-update");
    // const plantingRangeUpdate = $("#planting-range-update");

});
