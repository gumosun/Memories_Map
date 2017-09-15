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

module.exports = Memory;