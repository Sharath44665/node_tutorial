const logger = (req, res,next) => {
    const method  = req.method
    const url = req.url
    const time = new Date().getFullYear()

    console.log(method, url, time) // GET / 2024  
    // res.send('do something') 
    next()
} 

module.exports = logger