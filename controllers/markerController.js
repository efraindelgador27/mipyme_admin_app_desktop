

class   MarkerController{
    db;
    constructor(DB){
        this.db = DB;
    }

    async create(name){
        const mark= await this.db.maker.create({
            data:{
                name,
            }
        })
        return mark;
    }

    async getAll(){
        makers= await this.db.maker.findMany()
    }

    async delete(name){
      
        await this.db.maker.deleteMany({
            where: {
                name,
            },
          })
    }
}

module.exports = MarkerController;