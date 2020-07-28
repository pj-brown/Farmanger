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

    // goes to the crop page
    function getCropPage() {
        window.location.href = "./crops.html";
    }

    // goes to the field page
    function getFieldPage() {
        window.location.href = "./fields.html"
    }
// ----------------------------------------------------------------------------------------------------------------------------------------------------------
    // getting existing crops
    
    function createCropRow(cropData) {
        console.log(cropData);
        $("#crop-body").append(`<tr><td>${cropData.cropName}</td><td>${cropData.growTime}</td><td>${cropData.season}</td><td>${cropData.irrigation}</td><td><button type="button" class="btn btn-secondary">X</button></td><td><button type="button" class="btn btn-secondary">X</button></td></tr>`)
    }

    function getCrops() {
        $.get("/api/crops", function(data) {
            let rowsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                rowsToAdd.push(createCropRow(data[i]));                
            }
            console.log(rowsToAdd);
        });
    }

    // TODO: function to add crop
    function addCropHandle (event) {
        event.preventDefault();
        upsertCrop({
            cropName: cropNameInput.val(),
            growTime: growTimeInput.val(),
            irrigation: false,
            season: plantingRangeInput.val()
        });
    }

    function upsertCrop(cropData) {
        $.post("/api/crops", cropData);
    }
});

const cropNameInput = $("#crop-name");
const growTimeInput = $("#grow-time");
const plantingRangeInput = $("#planting-range");
const cropContainer = $("#crop-container");
const cropBody = $("#crop-body");
