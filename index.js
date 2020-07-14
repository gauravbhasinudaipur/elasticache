var AWS =require ('aws-sdk');
AWS.config.region='us-east-2';
var ep = new AWS.Endpoint('memcached.w7sebn.cfg.usw2.cache.amazonaws.com:11211');
var elasticache = new AWS.ElastiCache({endpoint: ep});
console.log(elasticache);
var params = {
  ResourceName: 'STRING_VALUE', /* required */
  Tags: [ /* required */
    {
      Key: 'abc',
      Value: 'aa'
    },
    /* more items */
  ]
};
elasticache.addTagsToResource(params, function(err, data) {
  if (err) console.log(err, err.stack); // an error occurred
  else     console.log(data);           // successful response
});
