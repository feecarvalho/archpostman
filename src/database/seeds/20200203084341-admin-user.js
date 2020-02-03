const bcrypt = require('bcryptjs');

module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'ArchPostman Admin',
          email: 'admin@archpostman.com.br',
          password_hash: bcrypt.hashSync('passwordteste', 6),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
