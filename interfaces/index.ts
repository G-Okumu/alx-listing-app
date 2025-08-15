interface CardProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}


interface ButtonProps{
    
}

interface PropertyProps {
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
    image:string,
    discount:string
}