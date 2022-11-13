//Single Responsibility Principle

//BAD WAY

class Book {
    public title:string;
    public author:string;
    public desc:string;
    public pages:number;

    //constructor  and other methods:

    public saveToFile():void{
        //some fs.write method  to save book to file
    }
}

//GOOD WAY

class SecondBook {
    public title:string;
    public author:string;
    public desc:string;
    public pages:number;

    //constructor
}

class Persistence {
    public saveToFile(book:Book):void{
        //some fs.write  method to save  book to file 
    }
} 