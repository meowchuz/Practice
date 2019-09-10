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

        $("#table").html(customer_table);

    }
    else 
    {
        $("#table").html("There is no record!!");
    };

    $("#customerList").on("click", "#btnRemove", function(){
        $(this).parents("tr").remove();
    });

    function AddCustomer() {
        var form = "";
        form += "<form id='newCustomerForm' class='customerForm'>" +
                "<div class='form-group'>";
        form += "<div class='col-sm-6'><label for='name'>Name</label></div>";
        form += "<div class='col-sm-6'><input type='text' id='name' class='form-control' required></div>" + 
                "</div>" +
                "<div class='form-group'>";
        form += "<div class='col-sm-6'><label for='birthdate'>Birthdate</label></div>";
        form += "<div class='col-sm-6'><input type='text' id='birthdate' class='form-control' required></div>" + 
                "</div>";
        form += "<div class='form-check'>" +
                "<div class='col-sm-8'>" +
                "<input type='checkbox' class='form-check-input' id='isSubcribed' name='Yes'><label for='isSubcribed'>Is Subcribed?</label>" + 
                "</div><div class='col-sm-4'></div></div>";
        form += "<div class='form-group'>" + "<div class='col-sm-8'>" +  
                "<select class='custom-select my-1 mr-sm-2' id='membershipType'>" +
                "<option selected>Choose...</option>" +
                "<option value='1'>Pay As You Go</option>" +
                "<option value='2'>Monthly</option>" +
                "<option value='3'>Quarterly</option></select>"+ 
                "</div><div class='col-sm-4'></div></div>" +
                "<div class='col-sm-8'></div><div class='col-sm-4'><button class='btn btn-primary' type='submit'>Save</button></div>" + 
                "</div></div>";
        form += "</form>";

        return form;
    }

    $("#myform").html(AddCustomer());

    var customerForm = document.getElementById('#newCustomerForm');
    customerForm.onsubmit=function() {
        console.log(customerForm.name + customerForm.birthdate + customerForm.isSubcribed + customerForm.membershipType);
    };
});
    