CREATE DATABASE ice_cream_DB;

USE ice_cream_DB;

CREATE TABLE flavors(
    type VARCHAR(100),
    price DECIMAL(5,2),
    id INT AUTO_INCREMENT,
    PRIMARY KEY (id)
)