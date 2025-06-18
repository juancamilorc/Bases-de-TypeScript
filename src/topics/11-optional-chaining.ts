
export interface Passenger { 
    name: string,
    children?: string [];
}

const passenger1: Passenger = {
    name: 'Camilo'
}

const passenger2: Passenger = {
    name: 'Juan',
    children: ['Hijo1','Hijo2'],
}

const printChildren = ( passenger: Passenger ) => {

    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name , howManyChildren );
}

printChildren(passenger1);