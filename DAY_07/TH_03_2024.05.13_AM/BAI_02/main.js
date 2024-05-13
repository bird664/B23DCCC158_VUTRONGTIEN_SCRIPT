$(document).ready(function(){
    $("#addItemBtn").click(function(){
        var newItemValue = $("#newItemInput").val().trim();
        if(newItemValue !== "") {
            $("#itemList").append("<li>" + newItemValue + "</li>");
            $("#newItemInput").val("");
        }
    });
});