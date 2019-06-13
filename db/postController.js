const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: `localhost`,
  database: 'postgres',
  password: 'safeTea',
  port: 5432
});

module.exports = {
  getPosts(req, res, next) {
    const queryString = `SELECT *, post.id AS postId FROM post JOIN "forumUser" ON post."userId" = "forumUser".id;;`
    pool.query(queryString, (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows || 'no data';
      return next();
    });
  },
  getAPost(req, res, next) {
    const queryString = `SELECT * FROM post JOIN "forumUser" ON post."userId" = "forumUser".id WHERE post.id = $1`;
    pool.query(queryString, [req.params.id], (err, result) => {
      if (err) {
        return next(err);
      }
      res.locals.result = result.rows[0];
      return next();
    })
  },
  sendPost(req, res, next) {
    const queryString = `INSERT INTO post (title, text, "userId") VALUES ($1, $2, $3)`
    pool.query(queryString, [req.body.title, req.body.text, req.body.userId], (err, result) => {
      if (err) {
        return next(err);
      }
      return next();
    });
  }
}