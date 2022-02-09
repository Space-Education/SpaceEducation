DROP DATABASE IF EXISTS spaceED;

CREATE DATABASE spaceED;

USE spaceED;

CREATE TABLE postLecture (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(350) NOT NULL,
  image varchar(950)NOT NULL,
  description varchar(350) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/