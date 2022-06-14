const db = require('../db')

exports.getUsers = async (req, res) => {
    try{
       const {rows} = await db.query('select * from users')
       res.send(rows);
       console.log(rows);
    }catch(error){
        console.log(error.message)
    }
}  