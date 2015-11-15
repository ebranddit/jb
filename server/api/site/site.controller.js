use strict;

// Creates a new site in the DB.
exports.create = function(req, res) {
  Site.create(req.body, function(err, site) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(site);
  });
};
