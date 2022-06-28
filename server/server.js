const express = require('express');
const cors = require('cors');
const {logger} = require('./middleware/logEvents');
const errorHandler = require('./middleware/errorHandler');
const corsOptions = require('./config/corsOptions');
const cookieParser = require('cookie-parser');
const app = express();

const PORT = process.env.PORT || 8000;
const contactRoutes = require('./routes/contact.routes')
const teachingRoutes = require('./routes/teaching.routes')

require('./config/mongoose.config');
// custom middleware logger
app.use(logger)

// CROSS ORIGIN RESOURCE SHARING
app.use(cors(corsOptions));
app.use(cookieParser());
// handling json
app.use(express.json());
// used for handling form data
app.use(express.urlencoded({extended: true}));


app.use('/api', contactRoutes);
app.use('/api/teaching', teachingRoutes)
app.all('*', (req, res) => {
    if(req.accepts('json')){
        res.status(404).json({error: '404 not found'})
    }
})
// require('./routes/contact.routes')(app);
// require('./routes/project.routes')(app);
app.use(errorHandler)
app.listen( PORT, () => console.log(`Escuchando en el puerto ${PORT}`));