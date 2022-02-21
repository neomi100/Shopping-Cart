const userService = require('./user.service')
const logger = require('../../services/logger.service')

async function setUser(req, res) {
  try {
    const { username, password, imgUrl, productsInCart } = req.body
    const account = await userService.signup(username, password, imgUrl, productsInCart)
    logger.debug(`controller - new account created: ` + JSON.stringify(account))
    const user = await userService.login(username, password)
    req.session.user = user
    res.json(user)
  } catch (err) {
    logger.error('Failed to signup ' + err)
    res.status(500).send({ err: 'Failed to signup' })
  }
}

async function login(req, res) {
  const { username, password } = req.body;
  try {
    const user = await userService.login(username, password);
    req.session.user = user;
    res.json(user);
  } catch (err) {
    logger.error('Failed to Login ' + err);
    res.status(401).send({ err: 'Failed to Login' });
  }
}

async function logout(req, res) {
  try {
    req.session.destroy();
    res.send({ msg: 'Logged out successfully' });
  } catch (err) {
    res.status(500).send({ err: 'Failed to logout' });
  }
}


module.exports = {
  setUser,
  login,
  logout
}