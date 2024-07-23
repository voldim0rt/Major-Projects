


const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const bcrypt = require('bcrypt');
const app = express();
const port = 5000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

// MongoDB connection
mongoose
  .connect("mongodb://0.0.0.0:27017/New")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the schema for user registration
const userSchema = new mongoose.Schema({
  FullName: String,
  email: String,
  password: String,
}, { collection: 'users' }); // Specify the collection name 'users'

// Create a model for the user schema
const User = mongoose.model("User", userSchema);

// Define the schema for user login
const loginSchema = new mongoose.Schema({
  email: String,
  password: String,
}, { collection: 'logins' }); // Specify the collection name 'logins'

// Create a model for the login schema
const Login = mongoose.model("Login", loginSchema);

// Create a model for the form schema
const dataSchema = new mongoose.Schema({
  fname: String,
  email: String,
  pnumber: Number,
  bdate: String,
  gender: String, // Change this to a single field
  address1: String,
  address2: String,
  city: String,
  region: String,
  zip: String,
  country: String,
},{collection:'formdatas'});

const Data1 = mongoose.model('Data1', dataSchema);
const Data = mongoose.model('Data', dataSchema);

// schema creation endpoint dont create a model below this point

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get('/services', (req, res) => {
    res.sendFile(path.join(__dirname, 'services.html'));
});

app.get('/getstarted', (req, res) => {
    res.sendFile(path.join(__dirname, 'form.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'register.html'));
});

app.get('/ed', (req, res) => {
    res.sendFile(path.join(__dirname, "ed.html"));
});

app.get("/reg_sucess", (req, res) => {
  res.sendFile(path.join(__dirname, "reg_sucess.html"));
});

app.get("/already_user", (req, res) => {
  res.sendFile(path.join(__dirname, "already_user.html"));
});

app.get("/login_success", (req, res) => {
  res.sendFile(path.join(__dirname, "login_success.html"));
});


app.get("/form_details", (req, res) => {
  res.sendFile(path.join(__dirname, "form_details.html"));
});

app.get("/form_details", (req, res) => {
  res.sendFile(path.join(__dirname, "form_details.html"));
});

app.get('/iot', (req, res) => {
  res.sendFile(path.join(__dirname, 'iot.html'));
});

app.get('/ba', (req, res) => {
  res.sendFile(path.join(__dirname, 'ba.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});


app.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, 'blog.html'));
});

app.get('/index', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/design', (req, res) => {
  res.sendFile(path.join(__dirname, 'design.html'));
});

app.get('/ecom', (req, res) => {
  res.sendFile(path.join(__dirname, 'ecom.html'));
});

app.get('/ma', (req, res) => {
  res.sendFile(path.join(__dirname, 'ma.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});


app.get('/aero', (req, res) => {
  res.sendFile(path.join(__dirname, 'aero.html'));
});

app.get('/agri', (req, res) => {
  res.sendFile(path.join(__dirname, 'agri.html'));
});

app.get('/auto', (req, res) => {
  res.sendFile(path.join(__dirname, 'auto.html'));
});

app.get('/chemical', (req, res) => {
  res.sendFile(path.join(__dirname, 'chemical.html'));
});

app.get('/consum', (req, res) => {
  res.sendFile(path.join(__dirname, 'consum.html'));
});

app.get('/ecom', (req, res) => {
  res.sendFile(path.join(__dirname, 'ecom.html'));
});

app.get('/areo', (req, res) => {
  res.sendFile(path.join(__dirname, 'areo.html'));
});

app.get('/edu', (req, res) => {
  res.sendFile(path.join(__dirname, 'edu.html'));
});

app.get('/electric', (req, res) => {
  res.sendFile(path.join(__dirname, 'electric.html'));
});

app.get('/eng_const', (req, res) => {
  res.sendFile(path.join(__dirname, 'eng_const.html'));
});

app.get('/finance', (req, res) => {
  res.sendFile(path.join(__dirname, 'finance.html'));
});

app.get('/health', (req, res) => {
  res.sendFile(path.join(__dirname, 'health.html'));
});

app.get('/lifesci', (req, res) => {
  res.sendFile(path.join(__dirname, 'lifesci.html'));
});

app.get('/metals', (req, res) => {
  res.sendFile(path.join(__dirname, 'metals.html'));
});

app.get('/oil', (req, res) => {
  res.sendFile(path.join(__dirname, 'oil.html'));
});

app.get('/pub', (req, res) => {
  res.sendFile(path.join(__dirname, 'pub.html'));
});

app.get('/real', (req, res) => {
  res.sendFile(path.join(__dirname, 'real.html'));
});

app.get('/social', (req, res) => {
  res.sendFile(path.join(__dirname, 'social.html'));
});

app.get('/travel', (req, res) => {
  res.sendFile(path.join(__dirname, 'travel.html'));
});

app.get('/userPrivacy', (req, res) => {
  res.sendFile(path.join(__dirname, 'userPrivacy.html'));
});

app.get('/IndustryInsights', (req, res) => {
  res.sendFile(path.join(__dirname, 'IndustryInsights.html'));
});

app.get('/ftAi', (req, res) => {
  res.sendFile(path.join(__dirname, 'ftAi.html'));
});

app.get('/ServiceInsights', (req, res) => {
  res.sendFile(path.join(__dirname, 'ServiceInsights.html'));
});

app.get('/books', (req, res) => {
  res.sendFile(path.join(__dirname, 'books.html'));
});
  




//Dont touch below here
//changes by bhavesh
app.post('/submit', (req, res) => {
    const { fname, email, pnumber, bdate, address1, address2, city, region, zip, country } = req.body;
    const gender = req.body.gender; // Extract gender value separately

    const newData = new Data({
        fname,
        email,
        pnumber,
        bdate,
        gender, // Use the extracted gender value
        address1,
        address2,
        city,
        region,
        zip,
        country,
    });

    newData.save()
        .then(() => {
            // console.log('Data saved successfully');
            // res.send('Data saved successfully');
            return res.redirect("/form_details");
        })
        .catch(err => {
            console.error('Error saving data:', err);
            res.status(500).send('Internal Server Error');
        });
});
//form endpoint

// Registration endpoint fixed by bhavesh
app.post("/register", async (req, res) => {
  const { FullName, email, password } = req.body;

  try {
    // Check if the email already exists in the database
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      // User with the same email already exists
      return res.redirect("/already_user");
      // return res.status(400).send("User already exists with this email");
    } else {
      // Hash the password before saving it to the database
      const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds
      
      // Create a new user with the hashed password
      const newUser = new User({
        FullName: FullName,
        email: email,
        password: hashedPassword,
      });

      // Save the new user to the database
      await newUser.save();
      // console.log("User registered successfully");
      return res.redirect("/reg_sucess");
    }
  } catch (err) {
    console.error("Error registering user:", err);
    return res.status(500).send("Internal Server Error");
  }
});
  



// Login endpoint
// Login endpoint fixed 
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
      // Find user by email
      const user = await User.findOne({ email: email });

      if (!user) {
          // User not found
          return res.status(401).send("Invalid email or password");
      } else {
          // Compare hashed passwords
          const passwordMatch = await bcrypt.compare(password, user.password);

          if (passwordMatch) {
              // Passwords match, login successful
              // return res.send("Login successful");
              return res.redirect("/login_success");
          } else {
              // Passwords do not match
              return res.status(401).send("Invalid email or password");
          }
      }
  } catch (err) {
      console.error("Error finding user:", err);
      return res.status(500).send("Internal Server Error");
  }
});



// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



















