$(function(){
  $('#edit').froalaEditor({
    toolbarButtons: [ '|', 'bold', 'italic', 'underline', 'strikethrough', 'subscript', 'superscript', 'outdent', 'indent', 'clearFormatting', 'insertTable', 'html'],
    toolbarButtonsXS: ['-', 'bold', 'italic', 'underline']
  });
});

// $(document).ready(function(){
//     $(".hide").click(function(){
//         $(".list-1").hide();
//     });
//     $("#show").click(function(){
//         $(".list-1").show();
//     });
// });
function myFunction() {
    var x = document.getElementById("list-1");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
