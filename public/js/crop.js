$(document).ready(function() {

    // jquery references for inputs for adding crop
    let cropNameInput = $("#cropNameInput");
    let growTimeInput = $("#growTimeInput");
    let plantingRangeInput = $("#plantingRangeInput");
    let cropForm = $("#cropForm")


    // on lick listeners for save buttons in modals
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
    const getCrops = () => {
        return $.ajax({

        })
    }
    // // function to get crops from api
    // function getCrops() {
    //     $.get("/api/crops", renderCropList);
    // }

    // // function to render crops to table
    // function renderCropList(crop) {
    //     let 
    // }
});