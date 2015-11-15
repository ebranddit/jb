use strict;

/**
 * Get list of pages
 */
exports.index = function(req, res) {
  Page.find({req.param.siteId}, function (err, pages) {
    if(err) return res.status(500).send(err);
    res.status(200).json(pages);
  });
};

// Creates a new page
exports.create = function(req, res) {
  Page.create(req.body, function(err, page) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(page);
  });
};

exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Page.findById(req.params.id, function (err, page) {
    if (err) { return handleError(res, err); }
    if(!page) { return res.status(404).send('Not Found'); }
    var updated = _.merge(page, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(thing);
    });
  });
};

exports.destroy = function(req, res) {
  Page.findById(req.params.id, function (err, page) {
    if(err) { return handleError(res, err); }
    if(!page) { return res.status(404).send('Not Found'); }
    page.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};
