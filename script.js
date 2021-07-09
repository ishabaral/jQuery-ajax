$(document).ready(function () {

    $("#load-data-button").click(function () {
        var table = $("<table></table>");
        $("#load-data-button").after(table);
        $("table").append('<tr><th> Id </th><th> UserId </th><th> Title </th><th> Body </th></tr>');
        
        $.get("https://jsonplaceholder.typicode.com/posts", (data, status)=>{
            for(let i=0; i< data.length; i++){
                $("table").append('<tr><td>'+ data[i].id + '</td><td>'+ data[i].userId + '</td><td>' + data[i].title + '</td><td>' + data[i].body+ '</td></tr>' );
            }
        })
    })
});