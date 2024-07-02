const mongoose=require('mongoose')

const connect = async()=>{
    try {
        await mongoose.connect('mongodb+srv://achurehman786:OPPiFJO5sstZm3XI@cluster2.pmmthue.mongodb.net/ayas?retryWrites=true&w=majority&appName=Cluster2')
        console.log("SUCCESSFULLY CONNECTED TO THE DATABASE $$$$");
    } catch (err) {
        console.log("Something went Wrong Somewhere!!!,",err);
    }
}

module.exports=connect

// OPPiFJO5sstZm3XI