
function notfound404(req, res, next) {
        res.status(404);
       // respond with json
       if (req.accepts('json')) {
        res.json({ error: 'Page not found' });
        return;
      }
}

module.exports = notfound404;
