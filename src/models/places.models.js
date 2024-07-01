const db = require('../config/db');

const getAll = () => {
  return db.query('SELECT * FROM places');
};
const createPlace = ({ title, description, size, address, postal_code, price }) => {
  const data = [title, description, size, address, postal_code, price];
  const query = 'INSERT INTO places(title, description, size, address, postal_code, price) VALUES($1, $2, $3, $4, $5, $6)';
  return db.query(query, data);
};

module.exports = { getAll, createPlace };
