import User from '../models/User';

class UserController {
  async store(req, res) {
    // Verifica se o e-mail não está em uso
    const findUser = await User.findOne({ where: { email: req.body.email } });

    if (findUser) {
      return res.status(401).json({ error: 'This e-mail is already in use.' });
    }

    // Cria o novo usuário no database
    const { id, name, email, admin } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
      admin,
    });
  }
}

export default new UserController();
