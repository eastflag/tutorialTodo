var o = {
    _name: "adam",
    // setter
    set name(myName) {
        this.myName = myName;
    },
    // getter
    get name() {
        return this.myName;
    }
};

console.log(o.name);
o.name = "eve"; //setter
console.log(o.name); //getter