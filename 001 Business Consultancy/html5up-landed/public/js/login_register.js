const express = require("express");
const app = express();
const bcrypt = require("bcrypt");
const passport = require("passport");
const initializePassport = require("./passport_config");
const flash = require("express-flash");
const session = require("express-session");
const path = require("path");

const initialize = require("bcrypt");

initializePassport(
    passport,
    email => users.find(user => user.email === email)
);

const users = [];

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Configure routes
app.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true
}));

app.post("/register", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        users.push({
            id: Date.now().toString(),
            name: req.body.FullName,
            email: req.body.email,
            password: hashedPassword,
        });
        console.log(users);
        res.redirect("/login");
    } catch (e) {
        console.error(e);
        res.redirect("/register");
    }
});

// Define routes for rendering views
app.get('/', (req, res) => {
    res.render("index");
});

app.get('/login', (req, res) => {
    res.render("login");
});

app.get('/register', (req, res) => {
    res.render("register");
});

app.get('/index', (req, res) => {
    res.render("index");
});

app.get('/elements', (req, res) => {
    res.render("elements");
});

app.get('/contact', (req, res) => {
    res.render("contact");
});

app.get('/left-sidebar', (req, res) => {
    res.render("left-sidebar");
});

app.get('/right-sidebar', (req, res) => {
    res.render("right-sidebar");
});

app.get('/no-sidebar', (req, res)=> {
    res.render("no-sidebar");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
