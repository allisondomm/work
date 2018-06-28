export class SearchParameters{
    protected zipcode:String;
    protected category: String;
    protected lat: String;
    protected long: String;

    constructor(zip:String, cat:String){
        this.zipcode = zip;
        this.category = cat;
        this.lat = '';
        this.long = '';
        this.getLatLongFromZip();
    }

    getLatLongFromZip(){
       
    }
}