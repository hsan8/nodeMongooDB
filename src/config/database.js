const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://user:password2022@cluster0.poohc.mongodb.net/EMP_DB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) console.log(err);
    else console.log("mongdb is connected");
  }
);
