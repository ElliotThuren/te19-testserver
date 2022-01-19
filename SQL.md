# Anteckningar

```sql
sudo service mysql restart

history | grep mysql

sudo mysql -u root

CREATE USER 'elliotthu'@'localhost' IDENTIFIED BY 'password';

GRANT ALL PRIVILEGES ON *.* TO 'elliotthu'@'localhost';

mysql -u elliotthu -p

show databases;

use mysql

show tables;

SELECT * FROM user;

create database te19;

use te19;

show tables;

CREATE TABLE users (id INT UNSIGNED AUTO_INCREMENT, PRIMARY KEY(id)) ENGINE = innodb CHARACTER SET 'utf8mb4';

show tables;

describe users;

ALTER TABLE users ADD name VARCHAR (140) NOT NULL;

describe users;

INSERT INTO users (name) VALUES ('Elliot');

SELECT * FROM users;

ALTER TABLE users ADD password VARCHAR (255) NOT NULL;
```