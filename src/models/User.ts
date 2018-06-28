export class User{
    protected zipcode:String;
    protected name: String;
    protected username: String;
    protected password: String;
    protected email: String;
    protected image: String;

    constructor(n:String, zp:String, un:String, pw: String, em: String, im:String){
        this.name = n;
        this.zipcode = zp;
        this.username = un;
        this. password = pw;
        this.email = em;
        this.image = im;
    }

}