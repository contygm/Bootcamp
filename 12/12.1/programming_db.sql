

-- BONUS: Study up on how to add columns to a table and then create a boolean column called 
-- "mastered" which has a default value of TRUE.
-- 
-- BONUS: Start looking into the concept of joins in SQL

CREATE DATABASE programming_db;

USE programming_db;

CREATE TABLE programming_languages(
	id INTEGER(11) auto_increment not null,
    languages VARCHAR(30), 
    rating integer(10),
    mastered BOOLEAN DEFAULT TRUE,
    primary key(id)
);

INSERT INTO programming_languages(languages, rating)
VALUES ("Javascript", "5");

INSERT INTO programming_languages(languages, rating)
VALUES ("C#", "2");

SELECT * FROM programming_languages;


