// // utils/crud.js
// import { ValidationError } from 'sequelize';

// /**

//  * @param {Model} Model  – the Sequelize model (Users, Posts, …)
//  * @param {Object} data  – the payload to insert
//  * @param {Object} opts  – optional Sequelize options (transaction, etc.)
//  * @returns {Promise<Object>} plain created row
//  */
// export const createOne = async (Model, data, opts = {}) => {
//   try {
//     const record = await Model.create(data, opts);
//     return record.get({ plain: true }); // strip Sequelize wrapper
//   } catch (err) {
//     // turn Sequelize validation errors into readable messages
//     if (err instanceof ValidationError) {
//       const msg = err.errors.map(e => e.message).join(', ');
//       throw new Error(msg);
//     }
//     throw err;
//   }
// };

// /**
//  * Find one row by arbitrary WHERE clause.
//  * @param {Model} Model  – the Sequelize model
//  * @param {Object} where – where clause (e.g. {email: 'a@b.com'})
//  * @param {Object} opts  – optional Sequelize options (attributes, include, etc.)
//  * @returns {Promise<Object|null>} plain row or null
//  */
// export const findOne = async (Model, where, opts = {}) => {
//   const record = await Model.findOne({ where, ...opts });
//   return record ? record.get({ plain: true }) : null;
// };