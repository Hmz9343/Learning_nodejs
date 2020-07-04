const express = require('express');
require('./db/mongoose');
const User = require('./db/model/user');
const Task = require('./db/model/task');
const app = express();

const TaskRouter = require('./routers/task');
const UserRouter = require('./routers/user');

app.use(express.json());
app.use('/task', TaskRouter);
app.use('/user', UserRouter);

const port = process.env.port || 5000;




app.listen(port, () => {
    console.log('server running at http://localhost:' + port);
});

const bcrypt = require('bcryptjs');

const myfunction = async() => {

    const password = "Hamza@1997";
    const hashpasword = await bcrypt.hash(password, 10);
    console.log(password);
    console.log(hashpasword);
    const ismatch = await bcrypt.compare('Hamza@1997', hashpasword);
    console.log(ismatch);

}

myfunction();