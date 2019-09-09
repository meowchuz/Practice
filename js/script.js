$(document).ready(function(){
    console.log(data);
//Practice
    var customer_list = data;

    if (!(customer_list == null)) {
        var customer_table = "";
        customer_table += "<table id='customerList' class='table table-bordered'>";
        customer_table += "<thead class='thead-dark'>";
        customer_table += 
        "<th scope='col'> ID </th>" + 
        "<th scope='col'> Name </th>" + 
        "<th scope='col'> Birthday </th>" + 
        "<th scope='col'> Is Subcribed </th>" + 
        "<th scope='col'> Membership Type </th>" +
        "<th scope='col'></th>";
        customer_table += "</thead><tbody>";
        customer_list.forEach(function(customer)
        {
            customer_table += 
            "<tr>" +
            "<td>" + customer.id + "</td>" +  
            "<td>" + customer.name + "</td>" +
            "<td>" + (customer.birthdate? customer.birthdate : "No data") + "</td>" +
            "<td>" + (customer.isSubcribedToNewsletter? "Yes" : "No") + "</td>" +
            "<td>" + customer.membershipType.nameType + "</td>" +
            "<td><button type='button' id='btnRemove' class='btn btn-danger'>Remove</button></td>" +
            "</tr>";
        });
        customer_table += "</tbody>";

        $("#container").html(customer_table);
    }
    else 
    {
        $("#container").html("There is no record!!");
    };

    $("#customerList").on("click", "#btnRemove", function(){
        $(this).parents("tr").remove();
    });

});
    