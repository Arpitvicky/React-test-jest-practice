export default {
  create: category => {},
  update: category => {},
  delete: categoryId => {},
  getById: categoryId => {},
  getAll: jest.fn(() => {
    return Promise.resolve([
      {
        id: "5bc9a87d76e3833f73511a20",
        description: "Description for electronics goes here from Mock.",
        name: "Electronics",
        subCategory: [
          {
            id: null,
            description: "Hi Sub",
            name: "nameSub",
            subCategory: null,
            valid: null
          }
        ],
        valid: null
      }
    ]);
  })
};
