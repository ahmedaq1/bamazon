--Drop the bamazon if exists--
DROP DATABASE IF EXISTS bamazon;

--creat the "bamazon" database --

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id NOT NULL AUTO_INCREAMENT,
    product_name VARCHAR(255) NOT NULL,
    department_name VARCHAR(255) NOT NULL,
    price DECIMAL(10,4) NOT NULL,
    stock_quantity DECIMAL(10,4) NOT NULL,
    PRIMARY KEY (item_id)

);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("LCD SOMY TV", "ELECTRONICS", 200, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NOT APPLE SMART PHONE", "ELECTRONICS", 700, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("SUPER VACUUM", "APPLINCES", 100, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("TOASTER MASTER","APPLINCES", 20, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("FOOD PROCESSER SAVEY","APPLINCES", 159, 5);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Baking fluor", "food and grocery", 4, 30);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sea salt","food and grocery", 2, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Cereal", "food and grocery", 5, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dark chocolate", "food and grocery", 3, 10);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("NOT ICE AGE", "MOVIES", 10, 5);

SELECT * FROM products;




