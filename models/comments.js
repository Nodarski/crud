/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var comments = sequelize.define('comments', {
    comment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    body: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    tableName: 'comments'
  });

  comments.associate = function (models) {
    models.comments.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.comments.belongsTo(models.Posts, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  };

  return comments;
};
