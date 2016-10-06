
CREATE DATABASE FavoriteDB;

USE FavoriteDB;

CREATE TABLE favFoods (
	food varchar(50) NOT NULL,
    score integer(10)
);

CREATE TABLE favSongs (
	song varchar(100) NOT NULL,
    artist varchar(50),
    score integer(10)
);

CREATE TABLE favMovies (
	id INTEGER(11) auto_increment not null,
	film varchar(50) NOT NULL,
    five_times boolean default false,
    score integer(10),
    primary key(id)
);

