/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  var comments_votes = sequelize.define('comments_votes', {
    vote_type: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'comments_votes'
  });

  comments_votes.associate = function (models) {
    models.comments_votes.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.comments_votes.belongsTo(models.comments, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    
  };

  return comments_votes
};
