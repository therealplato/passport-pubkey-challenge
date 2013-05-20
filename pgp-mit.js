var request = require('request');

var hexFP='0x1927D3053E30A739'
var options = {
  uri: 'http://pgp.mit.edu:11371/pks/lookup',
  qs: {
    op:'get',
    search:hexFP,
  },
}; 

request(options, function(err, res, body){
  if(err){ 
    console.log(err);
  } else {
    console.log(body);
  };
});
