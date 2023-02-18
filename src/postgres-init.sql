CREATE TABLE users(
   user_id INT GENERATED ALWAYS AS IDENTITY,
   username VARCHAR(50) NOT NULL UNIQUE,
   first_name VARCHAR(50) NOT NULL,
   last_name VARCHAR(50) NOT NULL,
   password VARCHAR(200) NOT NULL,
   PRIMARY KEY(user_id)
);
CREATE TABLE sessions(
   user_id INT NOT NULL UNIQUE,
   session_id VARCHAR NOT NULL,
   date_created TIMESTAMPTZ NOT NULL,
   CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id)
);
CREATE TABLE collections(
   collection_id INT GENERATED ALWAYS AS IDENTITY,
   name VARCHAR(50) NOT NULL,
   user_id INT,
   PRIMARY KEY(collection_id),
   CONSTRAINT fk_user FOREIGN KEY(user_id) REFERENCES users(user_id)
);
CREATE TABLE items(
   item_id INT GENERATED ALWAYS AS IDENTITY,
   name VARCHAR(50) NOT NULL,
   price NUMERIC,
   link VARCHAR NOT NULL,
   description VARCHAR(250) NOT NULL,
   image_link VARCHAR NOT NULL,
   collection_id INT,
   PRIMARY KEY(item_id),
   CONSTRAINT fk_collection FOREIGN KEY(collection_id) REFERENCES collections(collection_id)
);