const { param, body, validationResult } = require('express-validator');

const errorValidator = (req, res, next) => {
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
   }
   next();
}

exports.idValidator = [
   param('id').isInt().withMessage("Id must be a number"),
   param('id').isLength({ min: 0 }).withMessage("Id must be equal or greater than 0"),
   errorValidator,
   
]

exports.keyShort = [
   body('name').isLength({ min: 3 }).withMessage("Body keys characters must be at least 3"),
   body('priority').if(body('priority').exists()).isLength({ min: 3 }).withMessage("Body keys characters must be at least 3"),
   errorValidator
]

