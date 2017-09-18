const db = require('../db/config');

const Memory = {};



Memory.create = memory => {
  return db.one(
    `
    INSERT INTO memories
    (title, description, latitude, longitude)
    VALUES ($1, $2, $3, $4)
    RETURNING *
  `,
    [ memory.title, memory.description, memory.latitude, memory.longitude]
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

Memory.createNewComment = (comment,id) => {
  return db.one(
    `
    INSERT INTO comments
    (name, comment, memory_id)
    VALUES ($1, $2, $3)
    RETURNING *
  `,
    [comment.name, comment.comment, id]
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

Memory.update = (memory,id) => {
  return db.one(
    `
    UPDATE memories SET
    title = $1,
    description = $2
    WHERE id = $3
    RETURNING *
  `,
    [memory.title, memory.description, id]
  );
};

module.exports = Memory;