const Joi = require("joi");

const dogSchema = Joi.object({
  name: Joi.string().required(),
  breed: Joi.string().required(), // 추가
  age: Joi.number().required(),
});

// exports.validateDog = (req, res, next) => {
//   const { error } = dogSchema.validate(req.body);
//   if (error) return res.status(400).json({ message: error.details[0].message });
//   next();
// };

exports.validateDog = (req, res, next) => {
  const { error } = dogSchema.validate(req.body);
  if (error) {
    console.error("Validation error:", error.details); // 에러 로그 추가
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};
