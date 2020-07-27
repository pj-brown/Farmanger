$(document).ready(function() {

    // jquery references for inputs for adding crop
    let cropNameInput = $("#cropNameInput");
    let growTimeInput = $("#growTimeInput");
    let plantingRangeInput = $("#plantingRangeInput");
    let cropContainer = $("#crop-container");
    let cropBody = $("#crop-body")


    // on lick listeners for save buttons in modals
    // $(document).on("click", "#add-crop", addCrop);
    // $(document).on("click", "#add-field", addField);
    // listeners for page direct (manage crop/field)
    $(document).on("click", "#crop-page", getCropPage);
    $(document).on("click", "#field-page", getFieldPage);

    // goes to the crop page
    function getCropPage() {
        window.location.href = "./crops.html";
        getCrops();
    }

    // goes to the field page
    function getFieldPage() {
        window.location.href = "./fields.html"
    }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
    // getting existing crops
    
    // TODO: function for creating a new table row for crops
    // function createCropRow(cropData) {

    // }

    // TODO: function to get existing crops
    function getCrops(data) {
        $.get("/api/crops", function(data) {
            console.log(data);
            let rowsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                console.log(data[i]);
                rowsToAdd.push(createCropRow(data[i]));                
            }
            console.log(rowsToAdd);
            renderCropList(rowsToAdd);
            cropNameInput.val("");
            growTimeInput.val(""); // this is an iteger...
            plantingRangeInput.val("");

        });
    }

    // // TODO: function to add crop
    // function addCrop () {

    // }
    // // TODO: function to add field
    // function addField () {

    // }
});