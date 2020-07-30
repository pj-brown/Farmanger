$(document).ready(function(){function a(){window.location.href="./fields.html"}function b(a){console.log(a),$(".card-columns").append(`<div class="card">
        <img class="card-img-top" src="./assets/field.webp" alt="Card image cap">
        <div class="card-body">
            <div class="card-header">${a.fieldName}</div>
               <p class="card-text">Crop type: ${a.Crop.cropName}</p>
                <p class="card-text">Acres: ${a.acreage}</p>
                <p class="card-text">Notes:</p>
            <div class="md-form">
                <textarea id="form10" class="md-textarea form-control" rows="3">${a.note}</textarea>
            </div>
            <div class="card-footer" id="${a.id}">
                <button type="button" class="btn btn-danger btn-block delete-field">Delete</button>
            </div>
            </div>
        </div>`)}function c(){$.get("/api/fields",function(a){let c=[];for(let d=0;d<a.length;d++)c.push(b(a[d]))})}function d(a){$.post("/api/fields",a).then(()=>{location.reload()})}$(document).ready(c);const e=$("#field-name"),f=$("#acre-input"),g=$("#note-input"),h=$("#crop-input");$(document).on("click","#display-fields",c),$(document).on("click","#add-field",function(a){a.preventDefault(),d({fieldName:e.val(),acreage:f.val(),note:g.val(),Crop:h.val()})}),$(document).on("click","#crop-page",function(){window.location.href="./crops.html",c()}),$(document).on("click","#field-page",a),$(document).on("click",".delete-field",function(){let b=$(this).parent("div").attr("id");console.log(b),$.ajax({method:"DELETE",url:"/api/fields/"+b}).then(a)})});