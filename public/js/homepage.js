$(document).ready(function() {

    $(document).on("click", "#add-crop", getCropPage);
    $(document).on("click", "#add-field", getFieldPage);

    function getCropPage() {
        window.location.href = "./crops.html"
    }

    function getFieldPage() {
        window.location.href = "./fields.html"
    }


});