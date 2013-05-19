passport-pubkey-challenge
=========================

**The strategy is not implemented yet**

Passport strategy for pubkey auth - successful decryption of an encrypted challenge demonstrates ownership of a public key


    GET /auth/gpg/start/5FC25A1E41602E3F99D8090381898844A1BF37D6
    Create and securely store
      challenge = {
        timestamp: new Date().valueOf(),
        secret: crypto.random(),
        fingerprint: '5FC25A1E41602E3F99D8090381898844A1BF37D6', 
      }

    Or use a mem cache:
      challenges = {
        _5FC25A1E41602E3F99D8090381898844A1BF37D6: {
          timestamp: new Date().valueOf(),
          secret: crypto.random(),
        }
      };

    Send response to auth request:
      <ciphertext encrypted to the key matching this fingerprint>
        the plaintext:
        https://server.tld/auth/gpg/callback?challenge=some-crypto-random-number&fingerprint=asdf

    GET /auth/gpg/callback?challenge=correct-number&fingerprint=asdf
    fetch user associated with this fingerprint; passport.callback(user);

    GET /auth/gpg/callback?challenge=wrong-number
    404
