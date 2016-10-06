-- CREATE DATABASE animals_db;

USE animals_db;
 
CREATE TABLE people (
	name VARCHAR(30) NOT NULL,
    has_pet BOOLEAN NOT NULL,
    pet_name varchar(30), 
    pet_age INTEGER(10)
); 

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Veev", true, "Pharaoh", 1);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("David", true, "Sage", 1);


-- will work with ID 
Delete from people
where name = "Veev";

SELECT * FROM people;



