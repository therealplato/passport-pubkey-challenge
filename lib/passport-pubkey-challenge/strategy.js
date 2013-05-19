/**
 * Module dependencies.
 */
var util = require('util');


/**
 * `Strategy` constructor.
 *
 * The public key authentication strategy receives authentication requests for a
 * specific key fingerprint, and responds with a challenge string, encrypted to
 * the public key matching that fingerprint.
 *
 * The challenge contains a response URL. Any request to that URL is considered
 * proof that the user has successfully decrypted the challenge string, thus
 * proving ownership of the key with the requested fingerprint.
 *
 *  Next step is to modify a Passport strategy to find pubkeys and generate and
 *  encryt challenge strings.
 *
 *  BEGIN JAREDHANSON'S COMMENTS ON PASSPORT-GOOGLE
 *
 * Applications must supply a `validate` callback which accepts an `identifier`,
 * and optionally a service-specific `profile`, and then calls the `done`
 * callback supplying a `user`, which should be set to `false` if the
 * credentials are not valid.  If an exception occured, `err` should be set.
 *
 * Options:
 *   - `returnURL`  URL to which Google will redirect the user after authentication
 *   - `realm`      the part of URL-space for which an OpenID authentication request is valid
 *   - `profile`    enable profile exchange, defaults to _true_
 *
 * Examples:
 *
 *     passport.use(new GoogleStrategy({
 *         returnURL: 'http://localhost:3000/auth/google/return',
 *         realm: 'http://localhost:3000/'
 *       },
 *       function(identifier, profile, done) {
 *         User.findByOpenID(identifier, function (err, user) {
 *           done(err, user);
 *         });
 *       }
 *     ));
 *
 * @param {Object} options
 * @param {Function} verify
 * @api public
 */
function Strategy(options, validate) {
  options = options || {};
  options.providerURL = options.providerURL || 'https://www.google.com/accounts/o8/id';
  options.profile =  (options.profile === undefined) ? true : options.profile;

  //OpenIDStrategy.call(this, options, validate);
  this.name = 'gpg';


}

/**
 * Inherit from `OpenIDStrategy`.
 */
//util.inherits(Strategy, OpenIDStrategy);


/**
 * Expose `Strategy`.
 */ 
module.exports = Strategy;
