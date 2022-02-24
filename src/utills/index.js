const { Collection } = require("mongodb");

class Movie{
    constructor (title, actor = "not specified"){
        this.title = title;
        this.actor = actor;
    }
    async add(collection){
        await collection.insertOne(this)
        return 'success';
        //add this to the datebase
    }

    async list (collection){
    return await collection.find().toArray();
       // list all moives to the datebase 
    
    }
    
    async update(collection){
        return await collection.list().push()
    }

   

      async delete(collection){
      await collection.deleteOne()
            return "delete"
      }

}
module.exports = Movie

