const db = require('../database/dbConfig');

async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}

  function findById(id) {
    return db('users')
      .select('id', 'username')
      .where({ id })
      .first();
  }

  function findBy(filter) {
    return db('users')
      .select('id', 'username', 'password')
      .where(filter);
  }

  module.exports = {
      add,
      findById,
      findBy
      
  }