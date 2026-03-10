export interface Montacargas {
  id: number;
  imagen:string;
  modelo: string;
  capacidad: string;
  para:string;
  tipo: string;
  disponible: boolean;
  precio_renta: number;
}

export const datos: Montacargas[] = [
  {
    id: 1,
    imagen:"https://media.istockphoto.com/id/517818547/es/foto/carretilla-elevadora-aislado-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=F5hX-ym38pOQi-dGA8EvY64FvxQ7zHcqY8HGlU0tq-s=",
    modelo: "Toyota 8FGU25",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    precio_renta: 8500
  },
  {
    id: 2,
    imagen:"",
    modelo: "Toyota 8FGU25",
    capacidad: "2.5 toneladas",
    para:"compra",
    tipo: "Gas",
    disponible: true,
    precio_renta: 8500
  },
  {
    id: 3,
    imagen:"",
    modelo: "Toyota 8FGU26",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    precio_renta: 8500
  },
  {
    id: 3,
    imagen:"",
    modelo: "Toyota 8FGU26",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    precio_renta: 8500
  },
  {
    id: 4,
    imagen:"",
    modelo: "Toyota 8FGU25",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    precio_renta: 8500
  },
  {
    id: 5,
    imagen:"",
    modelo: "Toyota 8FGU27",
    capacidad: "2.5 toneladas",
    para:"renta",
    tipo: "Gas",
    disponible: true,
    precio_renta: 8500
  }
];