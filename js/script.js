$(document).ready(function(){
    console.log(data);
//Practice
    var customer_list = data;
    customer_list.forEach(function(customer)
    {
        $("#customers-list").append(
        "<li>" + customer.name + 
            "<ul>" + 
                "<li>" + customer.birthdate + "</li>" +

            "</ul>" +
        "</li>");
    });
});
    