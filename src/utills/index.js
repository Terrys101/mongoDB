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

    async list(collection) {
        if (this.title !== "Not Specified") {
          return await collection.find({ title: this.title }).toArray();
        } else if (this.actor !== "Not Specified") {
          return await collection.find({ actor: this.actor }).toArray();
        } else {
          return await collection.find().toArray();
        }
        //list all movies in the db
      }
    
      async update(collection) {
        const response = await collection.updateOne(
          { title: this.title },
          { $set: { actor: this.actor } }
        );
        if (response.modifiedCount > 0) {
          return "Success";
        } else {
          return "Nothing updated";
        }
      }
    
      async delete(collection) {
        const response = await collection.deleteOne({ title: this.title });
        if (response.deletedCount > 0) {
          return "Success";
        } else {
          return "Nothing deleted";
        }
      }
    }
    
    module.exports = Movie;

