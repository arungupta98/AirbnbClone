const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

const MONGO_URL="mongodb://127.0.0.1:27017/wanderlust";

main().then(()=>{
    console.log("Connected to DB");
    
}).catch((err)=>{
    console.log(err);
});

async function main(){
    await mongoose.connect(MONGO_URL)
}

async function initDB() {
    await Listing.deleteMany({});
    initData.data=initData.data.map((obj)=>({...obj,owner:"685cfb736ad7ebac7a162b46"}));
    await Listing.insertMany(initData.data);
    console.log("data was initialized");
}

initDB();