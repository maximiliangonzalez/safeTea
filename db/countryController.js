const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: `localhost`,
  database: 'postgres',
  password: 'safeTea',
  port: 5432
});

module.exports = {
  getCountry(req, res, next) {
    const queryString = `SELECT * FROM country WHERE country = $1`
    pool.query(queryString, [req.params.country.toLowerCase()], (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows[0];
      return next();
    });
  },

  getRight(req, res, next) {
    let columns;
    let right;
    let condition = res.locals.not === true ? '!=' : '=';
    switch(req.params.right) {
      case 'sexualActivity': {
        columns = `"sameSexSexualActivityStatus", "sameSexSexualActivityText"`;
        right = `"sameSexSexualActivityStatus"`;
        break;
      }
      case 'unionRecognition': {
        columns = `"sameSexUnionRecognitionStatus", "sameSexUnionRecognitionText"`;
        right = `"sameSexUnionRecognitionStatus"`;
        break;
      }
      case 'marriage': {
        columns = `"sameSexMarriageStatus", "sameSexMarriageText"`;
        right = `"sameSexMarriageStatus"`;
        break;
      }
      case 'adoption': {
        columns = `"adoptionBySameSexCouplesStatus", "adoptionBySameSexCouplesText"`;
        right = `"adoptionBySameSexCouplesStatus"`;
        break;
      }
      case 'antiDiscrimination': {
        columns = `"antiDiscriminationStatus", "antiDiscriminationText"`;
        right = `"antiDiscriminationStatus"`;
        break;
      }
      case 'genderIdentity': {
        columns = `"genderIdentityRecognitionStatus", "genderIdentityRecognitionText"`;
        right = `"genderIdentityRecognitionStatus"`;
        break;
      }
      default: {
        return next('invalid endpoint');
      }
    }
    // const queryString = res.locals.not ? `SELECT country, $1 FROM country WHERE $2 != 'yes';` : `SELECT country, $1 FROM country WHERE $2 != 'yes';`S;
    const queryString2 = `SELECT country, ${columns} FROM country WHERE ${right} ${condition} 'yes';`;
    pool.query(queryString2, /*[columns, right, condition],*/ (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    });
  },

  getNotRight(req, res, next) {
    res.locals.not = true;
    return next();
  },

  getDeath(req, res, next) {
    const queryString = `SELECT country, "sameSexSexualActivityStatus", "sameSexSexualActivityText" FROM country WHERE "sameSexSexualActivityStatus" = 'death'`
    pool.query(queryString, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows;
      return next();
    })
  }
};