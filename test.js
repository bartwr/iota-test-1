// Create IOTA instance directly with provider
var iota = new IOTA({
  'provider': 'http://sandbox.iotatoken.com/api/v1/',
  'sandbox': true,
  // 'token': 'EXAMPLE_TOKEN_HERE'
});

// now you can start using all of the functions
iota.api.getNodeInfo(function(error, success) {
  if (error) {
    console.error(error);
  } else {
    console.log(success);
  }
});

// you can also get the version
iota.version