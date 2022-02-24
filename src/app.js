const yargs = require("yargs")
const {client, connection} = require("./db/connection")
const Movie = require("./utills")

const app =async (yargsObj) =>{
    const collection = await connection();
    try {
        if(yargsObj.add){
            const movie = new Movie(yargsObj.title,yargsObj.actor);
            console.log(await movie.add(collection));
            // take moive info, add it to the mongodb datebase and console.log a success message
         } else if(yargsObj.list){
             const moive = new Movie(yargsObj.title,yargsObj.actor);
             console.log(await moive.list(collection));
        // list all movies in datebase
         }else if(yargsObj.update){
            const moive = new Movie(yargsObj.title,yargsObj.actor);
            console.log(await moive.update(collection));
         
        }else if(yargsObj.delete){
            const moive = new Movie(yargsObj.title,yargsObj);
            console.log(await moive.delete(collection));
        
        }else{
        console.log("Incorrect command");
         }
      await client.close();  
    } catch (error) {
    console.log(error); 
        
    }
};

app(yargs.argv);