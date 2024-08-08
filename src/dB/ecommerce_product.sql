CREATE TABLE Products (
	id SERIAL PRIMARY KEY,
	name VARCHAR (50) NOT NULL,
	brand VARCHAR (50) NOT NULL,
	price INT NOT NULL
);

INSERT INTO Products (name, brand, price) VALUES 
('Xcent','Hyundai',13000),
('Alto', 'Maruti', 10000),
('Scorpio', 'Mahindra', 14000),
('Baleno', 'Maruti', 9000);


CREATE TABLE Backup_Products(
	id INTEGER,
	name VARCHAR (50),
	brand VARCHAR (50),
	price INT,
	deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Updated_Products(
	id INTEGER,
	name VARCHAR (50),
	brand VARCHAR (50),
	price INT,
	deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE OR REPLACE FUNCTION move_deleted_products_to_backup()
RETURNS TRIGGER
AS $$
BEGIN
     INSERT INTO Backup_Products(id,name,brand,price) VALUES (OLD.id, OLD.name, OLD.brand, OLD.price);     
     RETURN OLD;
END; 
$$ LANGUAGE plpgsql;

CREATE TRIGGER move_deleted_products_to_backup_trigger
AFTER DELETE ON products
FOR EACH ROW
EXECUTE PROCEDURE move_deleted_products_to_backup();

DELETE FROM Products WHERE id = 1;
SELECT * FROM Products;
SELECT * FROM Backup_Products;


CREATE OR REPLACE FUNCTION move_updated_products_to_updated_table()
RETURNS TRIGGER
AS $$
BEGIN
     INSERT INTO Updated_Products(id,name,brand,price) VALUES (OLD.id, OLD.name, OLD.brand, OLD.price);     
     RETURN OLD;
END; 
$$ LANGUAGE plpgsql;

CREATE TRIGGER move_updated_products_to_updated_table
AFTER UPDATE ON products
FOR EACH ROW
EXECUTE PROCEDURE move_updated_products_to_updated_table();

UPDATE Products SET name = 'Omni' WHERE name = 'Alto'
SELECT * FROM Products;
SELECT * FROM Updated_Products;

