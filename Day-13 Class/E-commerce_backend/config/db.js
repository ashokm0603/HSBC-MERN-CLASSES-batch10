const mongoose=require('mongoose');


const connection=async()=>{
    try {
      await  mongoose.connect(process.env.MONGODB_URL)
        console.log("DB connected Successfully");
    } catch (error) {
        console.log('Failed to connect DB');
        
    }
}

module.exports=connection
