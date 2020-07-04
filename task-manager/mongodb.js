const { MongoClient, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

const id = new ObjectId();

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {

    if (error) {
        return console.log(error);
    }

    const db = client.db(databaseName);


    /*   const updatePromise = db.collection('users').updateOne({
        _id: new ObjectId('5ea41308007628577414ccec')
    }, {
        $set: {
            name: 'Fwetu'
        }
    });

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    });
 */


    /*  db.collection('users').find().toArray((error, result) => {
        if (error)
            return console.log(error)
        console.log(result)
    })
 */

    /* db.collection('tasks').updateMany({ completed: true }, { $set: { completed: false } }).then((result) => {
        console.log(result.modifiedCount)
    }).catch((error) => {
        console.log(error)
    }); */

    db.collection('tasks').updateMany({ completed: false }, { $set: { completed: true } }, (error, result) => {
        if (error)
            console.log(error)
        console.log(result.modifiedCount)
    })

    db.collection('users').deleteMany({ name: 'Shweta' }).then((result) => {
        console.log(result.deletedCount)
    }).catch((error) => {
        console.log(error)
    });

});