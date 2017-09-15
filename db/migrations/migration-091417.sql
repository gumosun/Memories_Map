\c memories_dev;

CREATE TABLE IF NOT EXISTS memories (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  description TEXT,
);

CREATE TABLE if NOT EXISTS comments (
  id SERIAL PRIMARY KEY,
  comment VARCHAR(255),
  memory_id INT REFERENCES memories(id)
);