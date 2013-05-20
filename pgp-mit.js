var request = require('request');

function getPubkeyFromFingerprint(hexFP, callback){
  //var hexFP='0x1927D3053E30A739'
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
      var mitErr = /Error handling request/;
      var mitPubkey = /Public Key Server -- Get/;
      if(body.match(mitErr)){
        callback('Error fetching pubkey');

      } else if (body.match(mitPubkey)){
        var lines = body.split('\n');
        var nl = lines.length;
        var pubKey = lines.slice(3, nl-3); // slice off html tags
        var goodKey = /^-----/;
        if(!pubKey[0].match(goodKey) || !pubKey[pubKey.length-1].match(goodKey)){
          // first or last lines didn't start with -----; parse error
          console.log(pubKey);
          callback('Error parsing pgp.mit.edu key lookup');
        } else {
          // good key
          var key = pubKey.join('\n');
          callback(null, key);
        };
      } else {
        console.log(body);
        callback('No pubkey found on pgp.mit.edu:');
      };
      //console.log(body);
    };
  });
};

getPubkeyFromFingerprint('0x1927D3053E30A739', function(err, key){
  if(err){ 
    console.log(err);
  } else {
    console.log('Found pubkey:');
    console.log(key);
  };
});
