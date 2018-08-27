/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('users', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    remote_id: {
      type: DataTypes.BIGINT(50),
      allowNull: false,
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'users'
  });

  User.associate = function(models) {
    models.users.hasMany(models.Posts)
    models.users.hasMany(models.comments)
  };

  return User;

};

