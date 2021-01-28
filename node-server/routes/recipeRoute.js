const express = require("express");
const yup = require("yup");
const knex = require("../database");
const { formatValidationErrors } = require("../lib/error");
const router = express.Router();
const recipeSchema = yup.object().shape({
  recipeId: yup.string().required(),
});

router.get("/saved-recipes", async (req, res) => {
  try {
    // await recipeSchema.validate(req.query, {abortEarly: false})
    // res.status(200).send({
    //     check: 'hello'
    // })
    const userId = req.session.userId;
    const recipeQuery = await knex("recipes").where(
      knex.raw("userId = ?", [userId])
    );
    res.send({ recipeQuery });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorRes = formatValidationErrors(error);
      res.status(400).send(errorRes);
    }
    console.log("Error on login", error);
  }
});

router.post("/saved-recipes", async (req, res) => {
  try {
    await recipeSchema.validate(req.body, { abortEarly: false });
    const recipeId = await knex("recipes").insert({
      userId: res.session.userId,
      recipeId: req.body.recipeId,
    });
    res.send({ check: "working", recipeId });
  } catch (error) {
    if (error.name === "ValidationError") {
      const errorRes = formatValidationErrors(error);
      res.status(400).send(errorRes);
=======
// router.post('/saved-recipe', async (req,res) =>{
//     try{
// 	console.log(req.body, req.session)
//         await recipeSchema.validate(req.body, {abortEarly:false})
//         const recipeId = await knex('recipes').insert({userId: req.session.userId,recipeId: req.body.recipeId})
//         res.send({check:'working', recipeId})
//     }
//     catch(error){
//         if (error.name === 'ValidationError') {
//             const errorRes = formatValidationErrors(error)
//             res.status(400).send(errorRes)
//           } 
//         console.log('Error on login', error)
// >>>>>>> main
//     }
//     console.log("Error on login", error);
//   }
// });

module.exports = router;
=======
// module.exports = router

