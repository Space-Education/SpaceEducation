DROP DATABASE IF EXISTS spaceED;

CREATE DATABASE spaceED;

USE spaceED;

CREATE TABLE postLecture (
  id_post int NOT NULL AUTO_INCREMENT,
  title varchar(350) NOT NULL,
  description varchar(350) NOT NULL,
  id_type int NOT NULL,
  PRIMARY KEY (id_post),
  foreign key (id_type) references type (id_type)
);

CREATE TABLE type (
  id_type int(10) NOT NULL AUTO_INCREMENT,
  image varchar(950) NOT NULL,
  label varchar(150) NOT NULL,
  PRIMARY KEY (id_type)
)
/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/