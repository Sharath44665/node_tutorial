const authorize = (req, res, next) => {
    // console.log('authenticated')
    // next()

    // not a real world example
    const {user} = req.query;

    if (user === 'sharath'){
        // adding new item user to req
        req.user = {name: 'sharath', id: 3} // acting like json web token
        next()
    }
    else {
        res.status(401).send('not authorized, please contact admin')
    }
}

module.exports = authorize