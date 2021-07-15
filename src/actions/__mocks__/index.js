// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...jest.requireActual('..'),
  __esModule: true,
  // TODO: Update return value for Redux / context implementation
  getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
};

// export {};
// module.exports = {
//   ...jest.requireActual('..'),
//   __esModule: true,
//   // TODO: Update return value for Redux / context implementation
//   getSecretWord: jest.fn().mockReturnValue(Promise.resolve('party')),
// };
