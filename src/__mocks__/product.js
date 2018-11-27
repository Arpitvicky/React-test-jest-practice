export default {
  create: category => {},
  update: category => {},
  delete: categoryId => {},
  getById: categoryId => {},
  getAll: jest.fn(() => {
    return Promise.resolve([
      {
        id: "5bc9d01964151f13906681b7",
        name: "Sony bravia",
        price: 20000,
        categoryId: "5bc9a87d76e3833f73511a17",
        subCategoryId: "2",
        description: "asdasd"
      }
    ]);
  })
};
