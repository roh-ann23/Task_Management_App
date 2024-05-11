const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    let uri;
    if (process.env.NODE_ENV === 'test') {
        // Connect to the test database if NODE_ENV is set to 'test'
        uri = process.env.TEST_MONGO_URL;
    } else {
        // Connect to the regular database for other environments
        uri = process.env.MONGO_URL;
    }

    const conn = await mongoose.connect(uri) 
    //     {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });
    console.log(`Connected to MongoDB database ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    // process.exit(1); // Exit with failure
  }
};

module.exports = connectDB;

