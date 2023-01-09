$(document).ready(function(){
    $(".add-row").click(function(){
        var name = $("#name").val();
        var price = $("#price").val();
        if (isNaN(price)) price = 0;
        var markup = "<tr><td><input type=checkbox> " + name + "</td><td>" + price + "</td></tr>";
        $(".products_table tbody").append(markup);
    });
    
    $(".calculate").click(function(){
        var sum = 0;
        $(".order-forming_table tbody").find("tr > td:last-child").each(function (){
            sum += Number($(this).text());
        });
        $("#result").text(sum);
    });
    
    $(".order-forming-add").click(function(){
        $(".products_table tbody").find("tr input[type='checkbox']").each(function (){
            if ($(this).is(":checked")) {
                $(".order-forming_table tbody").append( "<tr>" + $(this).parents("tr").html() + "</tr>" );
                $(this).removeAttr("checked");
            }
        });
    });

    $(".order-forming-clear").click(function(){
        $(".order-forming_table tbody").html("");
    });
});