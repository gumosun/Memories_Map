const db = require('../db/config');

const Memory = {};



Memory.create = memory => {
  return db.one(
    `
    INSERT INTO memories
    (title, description)
    VALUES ($1, $2)
    RETURNING *
  `,
    [ memory.title,memory.description]
  );
};

Memory.findAll = () => {
  return db.query(
    `SELECT * FROM memories`
  );
};

Memory.getAllComment = (id) => {
  return db.query(
    `
    SELECT * FROM comments
    WHERE memory_id = $1`, 
    [id]
  );
};

Memory.findById = id => {
  return db.one(
    `
    SELECT * FROM memories
    WHERE id = $1`, 
    [id]
  );
}

Memory.createNewComment = comment => {
  return db.one(
    `
    INSERT INTO comments
    (name, comment, memory_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [comment.name, comment.comment, comment.memory_id]
  );
};

Memory.deleteMemory = id => {
  return db.none(
    `
    DELETE FROM memories
    WHERE id = $1
  `,
    [id]
  );
};

Memory.update = memory => {
  return db.one(
    `
    UPDATE memories SET
    (title, description)
    VALUES ($1, $2)
    WHERE id = $3
    RETURNING *
  `,
    [memory.title, memory.description, memory.id]//these are place holders
  );
};

module.exports = Memory;