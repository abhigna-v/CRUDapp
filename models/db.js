const mongoose =require ('mongoose');
var password="abhi";//process.env.MONGO_atlas_password;
var connectionString="mongodb+srv://abhi:"+password+"@cluster0.hhb8k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(connectionString,{useNewUrlParser: true,useUnifiedTopology: true , useFindAndModify: false});
mongoose.connection.on('connected',function(){
    console.log('Database connected');
});

require('./employee.model');
