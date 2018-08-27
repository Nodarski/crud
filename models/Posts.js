/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
 var Posts =  sequelize.define('Posts', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subreddit: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    votes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'Posts'
  });

  Posts.associate = function (models) {
    models.Posts.belongsTo(models.users, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: true
      }
    });

    models.users.hasMany(models.comments)


    // models.Posts.belongsTo(models.comments, {
    //   onDelete: "CASCADE",
    //   foreignKey: {
    //     allowNull: false
    //   }
    // })
  };

  return Posts
};
