// var AWS =require ('aws-sdk');
// AWS.config.region='us-east-2';
// console.log("dasd");
// var ep = new AWS.Endpoint('memcached.w7sebn.cfg.usw2.cache.amazonaws.com:11211');
// var elasticache = new AWS.ElastiCache({endpoint: ep});
// console.log(elasticache);
// var params = {
//   ResourceName: 'STRING_VALUE', /* required */
//   Tags: [ /* required */
//     {
//       Key: 'abc',
//       Value: 'aa'
//     },
//     /* more items */
//   ]
// };
// elasticache.addTagsToResource(params, function(err, data) {
//   if (err) console.log(err, err.stack); // an error occurred
//   else     console.log(data);           // successful response
// });
var Ecad = require('ecad');
var endpoints = ['memcached.w7sebn.cfg.usw2.cache.amazonaws.com:11211'];
var client = new Ecad({endpoints: endpoints, timeout: 10000});
client.fetch(function(err,hosts){console.log(err);console.log(hosts);});