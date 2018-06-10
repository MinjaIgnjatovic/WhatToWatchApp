export class Movie {

    
        public positive:number
        public negative:number

    constructor(
        public id: number,
        public title: string,
        public imgsrc: string,
        public description: string,
        public genre:string,
        public rating: number,
        public year:string
    ) {

    }
}