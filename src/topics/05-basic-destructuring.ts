// Desestructuración de Arreglos
interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: "Anmya",
        year: 2024
    }
}

const song = 'New song';

const { song:anotherSong, songDuration:duration, details } = audioPlayer

const { author } = details;

// console.log('Song:', song);
// console.log('Duration:', duration);
// console.log('Author:', author);






// Desestructuración de Arreglos
const [p1, p2, trunks= 'Not Found']: string[] = ['Goku','Vegeta','Trunks'];

console.warn('Personaje 3:', trunks);


export {};