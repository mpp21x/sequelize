import db from './models/index.mjs';


const result = await db.User.create({
    name: 'John',
    email: 'john@gmail.com',
    password: 'xxxxx',
});
console.log(result);