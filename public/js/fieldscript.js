$(document).ready(function() {

    // jquery references for inputs for adding fields
    const fieldNameInput = $("#field-name");
    const fieldAcreage = $("#acre-input");
    const fieldNote = $("#note-input")

    // listener for displaying fields button
    $(document).on("click", "#display-fields", getFields);
    // on lick listeners for save buttons in field modal
    $(document).on("click", "#add-field", handleAddField);
    // listeners for page direct (manage crop/field)
    $(document).on("click", "#crop-page", getCropPage);
    $(document).on("click", "#field-page", getFieldPage);
    // listener for delete field
    $(document).on("click", ".delete-field", handleDeleteField);
    // listener for update field
    $(document).on("click", ".update-field", handleUpdateField);

    // goes to the crop page
    function getCropPage() {
        window.location.href = "./crops.html";
        getFields();
    }

    // goes to the field page
    function getFieldPage() {
        window.location.href = "./fields.html"
    }


    function createFieldCard(fieldData) {
        console.log(fieldData);
        $(".card-columns").append(`<div class="card" id="${fieldData.id}>
        <img class="card-img-top" src="./assets/field.jpg" alt="Card image cap">
        <div class="card-body">
          <div class="card-header">${fieldData.fieldName}</div>
          <p class="card-text">Crop type: ${fieldData.Crop}</p>
          <p class="card-text">Acres: ${fieldData.acreage}</p>
          <p class="card-text">Notes:</p>
          <div class="md-form">
            <textarea id="form10" class="md-textarea form-control" rows="3">${fieldData.note}</textarea>
          </div>
            <div class="card-footer">
              <div class="btn-group" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-secondary" id="add-crop-to-field">Add crop</button>
                <button type="button" class="btn btn-secondary" id="delete-crop-from-field">Delete crop</button>
                <button type="button" class="btn btn-secondary" id="update-field">Update</button>
              </div>
            </div>
        </div>
      </div>`)
    }

    // function gets field from database
    function getFields() {
        $.get("/api/fields", function(data) {
            let rowsToAdd = [];
            for (let i = 0; i < data.length; i++) {
                rowsToAdd.push(createFieldCard(data[i]));                
            }
            // console.log(rowsToAdd);
        });
    }

    // function for handling saving field
    function handleAddField (event) {
        event.preventDefault();
        upsertField({
            fieldName: fieldNameInput.val(),
            acreage: fieldAcreage.val(),
            note: fieldNote.val()
        });
    }

    // function for adding the field to the database
    function upsertField(fieldData) {
        $.post("/api/fields", fieldData);
    }

    // function for deleting field data from table & database
    function handleDeleteField() {
        let fieldCardData = $(this).closest("tr").attr("id");
        let id = fieldCardData;
        // console.log(fieldCardData);
        $.ajax({
            method: "DELETE",
            url: "/api/fields/" + id
        })
        // need to be able to clear the whole table before "re-getting" the table
        .then(getFields);
    }

    // TODO: function for updating field data
    function handleUpdateField(){
        let fieldCardData = $(this).closest("tr").attr("id");
        let id = fieldCardData;

        console.log(fieldCardData);
        $.ajax({
            method: "PUT",
            url: "/api/fields/" + id
        })
    }
});