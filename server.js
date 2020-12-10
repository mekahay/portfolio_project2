if(process.env.NODE_ENV ==='development') {
    require('dotenv').config()
}

//___________________
//Dependencies
//___________________
const express = require('express');
const methodOverride  = require('method-override');
const mongoose = require ('mongoose');
const app = express ();
const db = mongoose.connection;
const show = console.log
show("im cool")
const Comments = require('./models/comments.js')
//___________________
//Port
//___________________
// Allow use of Heroku's port or your own local port, depending on the environment
const PORT = process.env.PORT || 3000;

//___________________
//Database
//___________________
// How to connect to the database either via heroku or locally
const MONGO_STRING = process.env.MONGO_STRING

// Connect to Mongo
mongoose.connect(MONGO_STRING,  { useNewUrlParser: true, useUnifiedTopology: true });

// Error / success
db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected: ', MONGO_STRING));
db.on('disconnected', () => console.log('mongo disconnected'));

// open the connection to mongo
db.on('open' , ()=>{});

//___________________
//Middleware
//___________________

//use public folder for static assets
app.use(express.static('public'));

// populates req.body with parsed info from forms - if no data from forms will return an empty object {}
app.use(express.urlencoded({ extended: false }));// extended: false - does not allow nested objects in query strings
app.use(express.json());// returns middleware that only parses JSON - may or may not need it depending on your project

//use method override
app.use(methodOverride('_method'));// allow POST, PUT and DELETE from a form
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//___________________
// Routes
//___________________
//localhost:3000 
app.get('/' , (req, res) => {
    res.send('Hello World!');
}); 
// HOME
app.get('/home', (req, res) =>{
    res.render('Home')
})
// ABOUT ME
app.get('/about', (req, res) =>{
    res.render('About')
})
// CONTACT ME
app.get('/contact', (req, res) =>{
    res.render('Contact')
})
// RESUME
app.get('/resume', (req, res) =>{
    res.render('Resume')
})
//___________________
// INDEX 
//___________________
app.get('/project1', (req, res) => {
    Comments.find({}, (err, allComments) => {
        if(!err){
            res.render('Index', {
                comment: allComments
            })
        } else {
            res.send(err)
        }
    }) 
})
//___________________
// NEW 
//___________________
app.get('/project1/new', (req, res) =>{
    res.render('New')
})
//___________________
// DESTROY 
//___________________
app.delete('/project1/:id', (req, res) => {
    Comments.findByIdAndRemove(req.params.id, (err, foundComment) => {
        if(!err){
            res.redirect('/project1')
        } else {
            res.send(err);
        }
    })
})
//___________________
// UPDATE 
//___________________
app.put('/project1/:id', (req, res) => {
Comments.findByIdAndUpdate(req.params.id, req.body, (err, updatedComment) => {
if(!err){
    res.redirect('/project1');
} else {
    res.send(err);
}
})
});
//___________________
// CREATE 
//___________________
app.post('/project1', (req, res) => {
    Comments.create(req.body, (err, createdComment) =>{
    if(!err){
        res.redirect('/project1');
    } else {
        res.send(err);
    }
    })
});
//___________________
// EDIT 
//___________________
app.get('/project1/:id/edit', (req, res) => {
    Comments.findById(req.params.id, (err, foundComment) => {
        if(!err){
            res.render('Edit', {
                comment: foundComment
            })
        } else {
            res.send(err);
        }
    })
})
//___________________
// SHOW 
//___________________
app.get('/project1/:id', (req, res) => {
    Comments.findById(req.params.id, (err, foundComment) => {
        if(!err){
            res.render('Show', {
                comment: foundComment
            })
        }else {
            res.send(err);
        }
    })
})
//___________________
//Listener
//___________________
app.listen(process.env.PORT || PORT, () => console.log( 'Listening on port:', PORT));