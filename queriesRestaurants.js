//TODO ficar enunciats (i comentaris?)
db.restaurants.find();
db.restaurants.find({},{restaurant_id: 1, name : 1, borough: 1, cuisine: 1});
db.restaurants.find({},{restaurant_id: 1, name : 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({},{restaurant_id: 1, name : 1, borough: 1, address: {zipcode: 1}, _id: 0});
db.restaurants.find({borough: "Bronx"});
db.restaurants.aggregate([{$match: {borough: "Bronx"}}, {$limit: 5}]);
db.restaurants.aggregate([{$match: {borough: "Bronx"}}, {$skip: 5}, {$limit: 5}]);
db.restaurants.find({'grades.score': {$gt: 90}});
db.restaurants.find({grades: {$elemMatch: {score: {$gt: 80, $lt: 100}}}});
db.restaurants.find({'address.coord.0': {$lt: -95.754168}});
db.restaurants.find({$and: [{cuisine: {$ne: "American "}}, {'grades.score': {$gt: 70}}, {'address.coord.0': {$lt: -65.754168}}]});
//negació lògica?
db.restaurants.find({$and: [{cuisine: {$ne: "American "}}, {'grades.grade': "A"}, {borough: {$ne: "Brooklyn"}}]}).sort({cuisine: 1});
db.restaurants.find({"name": /^Wil/},{restaurant_id: 1, name : 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({"name": /cel$/},{restaurant_id: 1, name : 1, borough: 1, cuisine: 1, _id: 0});
db.restaurants.find({"name": /Reg/},{restaurant_id: 1, name : 1, borough: 1, cuisine: 1, _id: 0});

