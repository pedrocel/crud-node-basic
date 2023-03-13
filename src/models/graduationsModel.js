const connection = require('./connection')

const getAll = async () => {
   const [graduations] = await connection.execute('SELECT * FROM graduations');

   return graduations;
};

const postCreate = async (graduation) => {

   const { name, description, created_at} = graduation;

   const query = 'INSERT INTO graduations(name, description, created_at) VALUES (?,?,?)';

   const createGraduation = await connection.execute(query, [name, description, created_at]);

   return createGraduation;
}

const deleteGraduation = async (id) => {

   const [removeGraduation] = await connection.execute('DELETE FROM graduations WHERE id = ?', [id]);
   
   return removeGraduation;
 };
 
 const updateGraduation = async (id, graduation) => {
   const { name, description, created_at } = graduation;
   
   const query = 'UPDATE graduations SET name = ?, description = ?, created_at = ? WHERE id = ?';
 
   const [updateGraduation] = await connection.execute(query, [name, description, created_at, id]);

   return updateGraduation;
 };

module.exports = {
   getAll,
   postCreate,
   deleteGraduation,
   updateGraduation
}
