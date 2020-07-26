$(document).ready(function() {

    $(document).on("click", "#add-crop", getCropPage);
    $(document).on("click", "#add-field", getFieldPage);

    function getCropPage() {
        window.location.href = "../html/crops.html"
    }

    function getFieldPage() {
        window.location.href = "../html/fields.html"
    }


});