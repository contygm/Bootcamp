CREATE DATABASE musicPlaylistDB;

USE musicPlaylistDB;

CREATE TABLE musicPlaylist(
	id INTEGER(11) auto_increment not null,
    title VARCHAR(30), 
    artist VARCHAR(30), 
    genre VARCHAR(30), 
    primary key(id)
);

INSERT INTO musicPlaylist(title, artist, genre)
VALUES ("Save Me", "BTS", "K-pop");

INSERT INTO musicPlaylist(title, artist, genre)
VALUES ("Rhythm Ta", "iKON", "K-pop");

SELECT * FROM programming_languages;
