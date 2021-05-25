const conexion = require('../databse/db')

exports.save = (req, res) => {
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('insert into users set ?', { user: user, rol: rol }, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
}

exports.update = (req, res) => {
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    conexion.query('UPDATE users SET ? WHERE id = ?', [{ user: user, rol: rol }, id], (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/')
        }
    })
}