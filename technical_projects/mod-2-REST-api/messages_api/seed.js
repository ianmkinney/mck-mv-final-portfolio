const path = require('path')
const fs = require('fs').promises

const {db} = require('./db')
const { Message } = require('./models/index')

function popTable(db, table, json) {

    const seed = async () => {

        await db.sync({ force: true });

        const seedPath = path.join(__dirname, json);

        const buffer = await fs.readFile(seedPath);
        const {data} = JSON.parse(String(buffer));

        const messagePromises = data.map(stuff => table.create(stuff));

        await Promise.all(messagePromises);

        console.log(`db populated with ${json}`);
    }
    seed()
}

const seed = async () => {

    popTable(db, Message, 'message.json')

}

module.exports = seed