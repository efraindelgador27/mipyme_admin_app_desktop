/*
  {
  name,
  type,
  cost, 
  ingredient: "{id:cantidad,id2:cantidad,id3:cantidad}",
  marker_id Int
}
  */

class ItemController {
  db;
  constructor(db) {
    this.db = db;
  }

  async create(payload) {

   const  data={
        ...payload,
        ingredient: JSON.stringify(payload.ingredient),
      }
    try {
      const newItem = await this.db.item.create({
        data
      });
      return newItem;
    } catch (err) {
      console.error(err);
    }
  }
  async delete(id) {
    try {
      await this.db.item.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
  async getOne(id) {
    try {
        const item= await this.db.item.findUnique({where: {id}});
        const ingredient= JSON.parse(item.ingredient)
        return {...item, ingredient}
    } catch (err) {
      console.error(err);
    }
  }

  async getAll() {
    try {
        const items= await this.db.maker.findMany({
            include: {
                items:true
            }
        })
        return items;
    } catch (err) {
      console.error(err);
    }
  }
  async getByType(type) {
    try {
        const items= await this.db.maker.findMany({
            include: {
                items:{where: {type}},
                
            },
            
        })
        return items;
    } catch (err) {
      console.error(err);
    }
  }
  async getByMarker(markerId) {
    try {
        const items= await this.db.maker.findMany({
            include: {
                items:true,              
            },
            where: {id:markerId}
        })
        return items;
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports={ItemController}