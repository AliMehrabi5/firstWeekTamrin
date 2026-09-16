const list = [
    {
        name : "ali",
        age : 55
    },
    {
        name : "reza",
        age : 15
    },
    {
        name : "ahmad",
        age : 18
    }
];

function print (list){
    list.forEach(element => {
        if (element.age > 18){
            console.log(element.name)
        }
    });
}

print(list);