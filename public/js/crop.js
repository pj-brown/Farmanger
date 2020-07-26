$(document).ready(function() {

    // on lick listeners for nav bar buttons
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

    // // call getCrops() to get crops
    // getCrops();

    // // function to get crops from api
    // function getCrops() {
    //     $.get("/api/crops", renderCropList);
    // }

    // // function to render crops to table
    // function renderCropList(crop) {
    //     let 
    // }
});