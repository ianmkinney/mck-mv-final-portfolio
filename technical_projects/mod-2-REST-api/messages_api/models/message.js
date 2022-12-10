const {db,DataTypes,Model} = require(`../db`)

class Message extends Model {

}

Message.init({
    message: DataTypes.STRING
}, {
    sequelize: db
}
)

module.exports = {
    Message
}