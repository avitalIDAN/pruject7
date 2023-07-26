//import Joi from "joi";

const Joi = require("joi");

// const schemaUser = Joi.object().keys({
//   id: Joi.number().required(),
//   name: Joi.string().required(),
//   username: Joi.string().required(),
//   email: Joi.string().required(), //.email()

//   phone: Joi.string().required(),
//   website: Joi.string().required(), //.uri()
//   rank: Joi.string().required(),
//   api_key: Joi.string().required(),
// });


const ObjectCheck = {
  // users: schemaUser,
  
};

exports.check = function (type, object) {
  const schema = ObjectCheck[type];
  console.log("in check");
  console.log(type);
  return schema.validate(object);
};
