DROP TABLE IF EXISTS toilets;

CREATE TABLE toilets (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  tname TEXT NOT NULL,
  lat Decimal(8,6) NOT NULL,
  long Decimal(9,6) NOT NULL,
  requested BOOLEAN NOT NULL
);