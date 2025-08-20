interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}


interface ButtonProps{
    
}

export interface PropertyProps {
    id: number,
    name:string,
    address: {
        state:string,
        city:string,
        country:string
    },
    rating: number,
    category: string[],
    price: number,
    offers: {
        bed:string,
        shower:string,
        occupants:string
    },
    description: string,
    image:string,
    discount:string,
    reviews: any[]
}