CREATE DATABASE Top3000DB;

USE Top3000DB;

CREATE TABLE Top3000 (
	`position` INT NOT NULL,
	`artist` VARCHAR(500) NULL,
	`album` VARCHAR(50) NULL,
	`release` INT NULL,
	`1rating` DECIMAL(10,3) NULL,
	`2rating` DECIMAL(10,3) NULL,
	`3rating` DECIMAL(10,3) NULL,
	`4rating` DECIMAL(10,3) NULL,
	`5rating` DECIMAL(10,3) NULL,
	primary key(`position`)
);

SELECT * FROM Top3000;