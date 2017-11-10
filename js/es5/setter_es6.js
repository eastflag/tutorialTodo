class O {
    constructor(name) {
        this._name = name;
    }

    // setter
    set name(name) {
        this._name = name;
    }

    // getter
    get name() {
        return this._name;
    }
}

let o = new O("adam");

o.name = "eve";
console.log(o.name);