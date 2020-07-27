$(document).ready(function() {


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
});