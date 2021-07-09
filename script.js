$(document).ready(function () {

    $("#load-data-button").click(function () {
        var searchBox = $("<input type = 'text' placeholder = 'Search'>")
        $("#load-data-button").after(searchBox);
        var table = $("<table></table>");
        $("input").after(table);
        $("table").append('<tr><th> Id </th><th> UserId </th><th> Title </th><th> Body </th></tr>');
        
        $.get("https://jsonplaceholder.typicode.com/posts", (data, status)=>{
            for(let i=0; i< data.length; i++){
                $("table").append('<tr><td>'+ data[i].id + '</td><td>'+ data[i].userId + '</td><td>' + data[i].title + '</td><td>' + data[i].body+ '</td></tr>' );
            }
        });

        $("input").keyup(function () {
            var value = $(this).val().toLowerCase();
            $("table tr").filter(function () {
                var tableTitle = $("tr:first-child");
                $(this).toggle( $(this).text().toLowerCase().indexOf(value) > -1);
            })
        })

    })
});