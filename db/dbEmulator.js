class User {
    data={
        name:"EFrain",
            date:Date.now(),
            age:38,
            gender:"M"
    }

    getData(){
        return JSON.stringify(this.data);
    }
    
    setData(body){ 
        this.data ={...this.data, ...body};
    }
}

module.exports= {User}