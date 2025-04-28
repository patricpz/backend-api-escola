import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo NOME deever ter entre 3 e 255 caracteres'
            }
          }
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'Email já cadastrado'
          },
          validate: {
            isEmail: {
              msg: 'Email inválido'
            }
          }
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: '',
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: '',
          validate: {
            len: {
              args: [6, 50],
              msg: 'Campo SENHA dever ter entre 6 e 50 caracteres'
            }
          }
        },
      },
      {
        sequelize,
        modelName: 'User',
        tableName: 'users',
      }
    );

    this.addHook('beforeSave', async (user) => {
        user.password_hash = await bcrypt.hash(user.password, 8);
    });

    return this;
  }

  passwordIsValid(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
