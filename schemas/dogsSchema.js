const Joi = require("joi");

const dogSchema = Joi.object({
  name: Joi.string().required(),
  age: Joi.number().integer().min(0).required(),
});

exports.validateDog = (req, res, next) => {
  const { error } = dogSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
