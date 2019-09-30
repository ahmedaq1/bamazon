var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "OneCup0fJava!",
    database: "bamazon"
});
connection.connect(function(err) {
    if (err) throw err;
});

function displayInventory() {
    connection.query("select * from products", function(err, response) {
        console.log("welcome to bamazon");
        console.log('\n');
        console.log('Our inventory');
        console.log('\n');
        console.table(response)

    })


}
displayInventory();

function newOrder() {
    inquirer.prompt([{
            name: "id",
            type: "input",
            message: "What is the item id for your purchase today?",

        }, {
            name: "quanitity",
            type: "input",
            message: "How many would you like to purchase?",

        }

    ]).then(function(answer) {

        var quanity = answer.quanitity;
        var itemId = answer.id;
        connection.query('SELECT * FROM products WHERE ?', [{
            item_id: itemId
        }], function(err, response) {

            if (err) throw err;
            else if (response[0].stock_quantity - quanity >= 0) {

                var totalcost = quanity * response[0].price;

                console.log('We have enough (' + response[0].product_name + ')!');
                console.log('Quantity in stock: ' + response[0].stock_quantity + ' Order quantity: ' + quanity);
                console.log('Please pay the amount of $' + totalcost + '. Thank you!');

                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: response[0].stock_quantity - quanity
                }, {
                    item_id: itemId
                }], function(err, response) {

                    displayInventory();
                    newOrder();

                });
            } else {
                console.log('Insufficient quantity.  Please adjust your order, we only have ' + response[0].stock_quantity + ' ' + response[0].product_name + ' in stock.');
                displayInventory()
            }
        });
    });
}
displayInventory()
newOrder();