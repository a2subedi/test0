export class User{
    constructor(
        private name?:string,
        private age?:number,
        private address?:string){        
    }
    getName() {return this.name;}
    getAge() {return this.age;}
    getAddress() {return this.address}
}