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

exports.register = async (req,res) => {
    try{
        console.log('validation passed')
        // const {rows} = await db.query('insert into users ($1, $2)', [req.email, req.password])
        res.send(rows);
    }catch (error) {
        console.log(error.message)
    }
}