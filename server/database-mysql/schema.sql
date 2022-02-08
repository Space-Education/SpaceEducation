DROP DATABASE IF EXISTS spaceED;

CREATE DATABASE spaceED;

USE spaceED;

CREATE TABLE postLecture (
  id int NOT NULL AUTO_INCREMENT,
  url varchar(950)NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/