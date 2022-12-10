const { db } = require('./db')

//import our models from the file where we've created the associations
const { Message } = require('./index')


//write our test suite
describe('Message database', () => {

    //clear out our database
    //beforeAll() <- a jest method that will run something before we invoke any tests
    //we dont know how long its going to take to 
    beforeAll(async () => {
        await db.sync({
            force: true //clears out all entries in all of our tables in our db
        })
    })

    //make sure that we can create entries in our tables (rows)
    test('can create a message', async () => {
        //create a row in the Game table
        //.create
        const testMessage = await Message.create({"id":1,"message":"test"})
        expect(testMessage.id).toBe(1)
        expect(testMessage.message).toBe("test")
    })

})