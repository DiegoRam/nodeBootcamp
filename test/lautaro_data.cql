CREATE KEYSPACE IF NOT EXISTS lautaro_data WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

USE lautaro_data;

DROP TABLE IF EXISTS attendant;
CREATE TABLE attendant (
  username varchar,
  timestamp timestamp,
  attend int,
  PRIMARY KEY((username), timestamp)
);


INSERT into attendant(username, timestamp, attend) 
values ('lautaro', 1412307540000, 1);