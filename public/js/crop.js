$(document).ready(function() {

    // jquery references for inputs for adding crop
    let cropNameInput = $("#cropNameInput");
    let growTimeInput = $("#growTimeInput");
    let plantingRangeInput = $("#plantingRangeInput");
    let cropContainer = $("#crop-container");
    let cropBody = $("#crop-body")


    // on lick listeners for save buttons in modals to call corresponding page functions
    $(document).on("click", "#add-crop", getCropPage);
    $(document).on("click", "#add-field", getFieldPage);

    // goes to the crop page
    function getCropPage() {
        window.location.href = "../html/crops.html"
    }

    // goes to the field page
    function getFieldPage() {
        window.location.href = "../html/fields.html"
    }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
    // getting existing crops
    getCrops();

    // TODO: function for creating a new table row for crops
    function createCropRow(cropData) {

    }

    // TODO: function to get existing crops
    function getCrops(data) {
        $.get("/api/crops", function(data) {
            console.log(data);
            let rowsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                rowsToAdd.push(createCropRow(data[i]));                
            }
            renderCropList(rowsToAdd);
            cropNameInput.val("");
            growTimeInput.val(""); // this is an iteger...
            plantingRangeInput.val("");

        });
    }

});