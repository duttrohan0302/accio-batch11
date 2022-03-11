const rufus = {
    name: "Rufus",
    birthday: "2/1/2020",
    age: function(){
        return Date.now() - this.birthday
    },
    attendance: 0,
    breed: "Golden Retriever"
}

const cooper = {
    name: "Cooper",
    birthday: "20/7/2020",
    age: function(){
        return Date.now() - this.birthday
    },
    attendance: 0
}


