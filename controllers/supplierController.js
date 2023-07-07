// operaciones CRUD suppliers and yuor items asociated,

const { db } = require("../prisma/client");

db.supplier.update()
class SupplierController {
  db;
  constructor(db) {
    this.db = db;
  }
  async create(payload) {
    try {
      const newSupplier = await this.db.supplier.create({
        data: { ...payload },
      });
      return newSupplier;
    } catch (err) {
      console.error(err);
    }
  }
  async addItem(payload) {
    const newItem = db.itemToSupplier.create({
      data: { ...payload },
    });
    return newItem;
  }
  async getOne(id) {
    try {
      const data = await this.db.supplier.findUnique({
        include: {
          itemToSupplier: {
            include: {
              item: true,
            },
          },
        },
        where: { id },
      });
      return data;
    } catch (err) {
      console.error(err);
    }
  }
 
  async getAll() {
    try {
      const data = await this.db.supplier.findMany();
      return data;
    } catch (err) {
      console.error(err);
    };
   
  }
  async getByType(type) {
    try {
      const items = await this.db.maker.findMany({
        include: {
          items: { where: { type } },
        },
      });
      return items;
    } catch (err) {
      console.error(err);
    }
  }
  async getByMarker(markerId) {
    try {
      const items = await this.db.maker.findMany({
        include: {
          items: true,
        },
        where: { id: markerId },
      });
      return items;
    } catch (err) {
      console.error(err);
    }
  }
  async update(payload,id){
    await this.db.supplier.update({
      data:{...payload},
      where: {id}
    });
  }
  async delete(id) {
    try {
      await this.db.supplier.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = { SupplierController };
