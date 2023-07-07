class MarkerController {
  db;
  constructor(DB) {
    this.db = DB;
  }

  async create(name) {
    try {
      const mark = await this.db.maker.create({
        data: {
          name,
        },
      });
      return mark;
    } catch (err) {
      console.error(err);
    }
  }

  async createMany(data) {
    let values="";
    data.forEach(name => {
      values += `('${name}'),`
    });
   
 const SQL=`insert into maker('name')
            values${values.slice(0,values.length-1)}`
    try {
      console.log(SQL)
      const mark = await this.db.$executeRawUnsafe(SQL);
      return mark;
    } catch (err) {
      console.error(err);
    }
  }

  async getAll() {
    try {
      makers = await this.db.maker.findMany();
    } catch (err) {
      console.error(err);
    }
  }

  async delete(name) {
    try {
      await this.db.maker.deleteMany({
        where: {
          name,
        },
      });
    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = MarkerController;
