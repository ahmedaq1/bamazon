var mysql = require("mysql");
// var inquirer = require("inquirer");
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
    bamazonOrder();
});

function runSearch() {
    inquirer
        .prompt({
            name: "action",
            type: "rawlist",
            message: "What would you like to do?",
            choices: [
                "View all item for sale",
                "Find all artists who appear more than once",
                "Find data within a specific range",
                "Search for a specific song",
                "Find artists with a top song and top album in the same year"
            ]
        })
        .then(function(answer) {
            switch (answer.action) {
                case "Find songs by artist":
                    artistSearch();
                    break;

                case "Find all artists who appear more than once":
                    multiSearch();
                    break;

                case "Find data within a specific range":
                    rangeSearch();
                    break;

                case "Search for a specific song":
                    songSearch();
                    break;

                case "Find artists with a top song and top album in the same year":
                    songAndAlbumSearch();
                    break;
            }
        });
}

// function bamazonOrder() {
//     inquirer
//         .prompt({
//             name: "",
//             type:

//         })
// }