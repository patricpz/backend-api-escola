import Sequelize, { Model } from 'sequelize';

class Aluno extends Model {
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
        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Campo SOBRENOME deever ter entre 3 e 255 caracteres'
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
        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser um valor inteiro'
            }
          }
        },
        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um valor float ou inteiro'
            }
          }
        },
        altura:  {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um valor float ou inteiro'
            }
          }
        },
      },
      {
        sequelize,
        modelName: 'Aluno',
        tableName: 'alunos',
      }
    );

    return this;
  }
}

export default Aluno;
