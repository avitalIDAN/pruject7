CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(255),
  username VARCHAR(255),
  email VARCHAR(255),
  address VARCHAR(255),
  phone VARCHAR(255)
);

CREATE TABLE userspass (
  id INT PRIMARY KEY,
  username VARCHAR(255),
  password VARCHAR(255),
  isManager boolean,
 FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE lending(
id INT PRIMARY KEY,
userId INT,
username VARCHAR(255),
itemId INT,
tableName VARCHAR(255),
itemName VARCHAR(255),
dateLending VARCHAR(255),
dateReturn VARCHAR(255),
isLending boolean,
isReturn boolean,
FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE donation(
id INT PRIMARY KEY,
userId INT,
username VARCHAR(255),
itemName VARCHAR(255),
tableName VARCHAR(255),
isDonated boolean,
FOREIGN KEY (userId) REFERENCES users(id)
);

CREATE TABLE garden(
  id INT PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  quantityAvailable INT,
  cost INT,
  size INT,
  image VARCHAR(255)
);


CREATE TABLE electric(
  id INT PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  quantityAvailable INT,
  cost INT,
  size INT,
  image VARCHAR(255)
);

CREATE TABLE handTools(
  id INT PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  quantityAvailable INT,
  cost INT,
  size INT,
  image VARCHAR(255)
);

CREATE TABLE potectorTools(
  id INT PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  quantityAvailable INT,
  cost INT,
  size INT,
  image VARCHAR(255)
);

CREATE TABLE homeTools(
  id INT PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  quantityAvailable INT,
  cost INT,
  size INT,
  image VARCHAR(255)
);

CREATE TABLE camping(
  id INT PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  quantityAvailable INT,
  cost INT,
  size INT,
  image VARCHAR(255)
);
