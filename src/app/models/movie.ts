export class Movie {

    
        public positive:number;
        public negative:number;

    constructor(
        public id: number,
        public title: String,
        public imgsrc: string,
        public description: string,
        public genre:String,
        public rating: number,
       public year:number
    ) {

    }
   
}