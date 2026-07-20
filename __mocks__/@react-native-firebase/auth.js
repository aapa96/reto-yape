const authInstance = {
  onAuthStateChanged: jest.fn(listener => {
    listener(null);
    return jest.fn();
  }),
  signInWithEmailAndPassword: jest.fn(async (email) => ({
    user: {email, uid: 'demo-uid'},
  })),
  signOut: jest.fn(async () => undefined),
};

const auth = jest.fn(() => authInstance);
auth.__authInstance = authInstance;

module.exports = auth;
module.exports.default = auth;
