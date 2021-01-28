
/*
 * GET home page.
 */
//this is view() in hello module.
exports.view = function(req, res){
  //username is the part of the route.
  var nameToShow = req.params.userName;
  console.log('name is ' + nameToShow);
  res.render('hello', {
  	'name': nameToShow,
  });
};
