import db from './models/index.mjs';



console.log(await db.User.findAll());