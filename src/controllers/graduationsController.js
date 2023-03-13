const graduationsModel = require('../models/graduationsModel')

const getAll = async (_req, res) => {

   const graduations = await graduationsModel.getAll();
   return res.status(200).json(graduations)
};

const postCreate = async (req, res) => {

   const createGraduation = await graduationsModel.postCreate(req.body)

   return res.status(200).json(createGraduation)
}

const putUpdate = async (req, res) => {
   const { id } = req.params;
 
   await graduationsModel.updateGraduation(id, req.body);

   return res.status(204).json();
};

 const deleteGraduation = async (req, res) => {
   const { id } = req.params;
 
   await graduationsModel.deleteGraduation(id);
   return res.status(204).json();
 };

module.exports = {
   getAll,
   postCreate,
   putUpdate,
   deleteGraduation
}