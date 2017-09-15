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

Memory.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM memories
    WHERE id = $1`, 
    [id]
  );
};

module.exports = Memory;