const whitelist = [
    'https://www.yoursite.com', 
    'http://74.208.115.218/',
    'http://127.0.0.1:3000', 
    'http://localhost:3000',
    'http://192.168.0.181:3000'
]
const corsOptions = {
    origin: (origin, callback) => {
        if(whitelist.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;