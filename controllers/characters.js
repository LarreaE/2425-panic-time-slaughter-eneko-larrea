import { addAttributes, catatonia, getCharacters, recolecta, travesia } from "../services/characters.js";
import { getTime } from "../services/time.js";

export const characters = async (req, res) => {
    try {
        const characters = await getCharacters()
        
        res.json({characters: characters });
    } catch (error) {
        console.error('Error geting characters:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }

  export const time = async (req, res) => {
    try {
        const time = await getTime()
        
        res.json({time: time });
    } catch (error) {
        console.error('Error geting time:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }

  export const postDay = async (req, res) => {
    try {
        const characters = await getCharacters()
        const time = await getTime()

        //MAÑANA 5:00
        console.log('Time of the day: 5:00');

        //cada jugador gana 2 puntos en strength o dex
        await addAttributes(characters);

        //recolecta: 1D100 recoger materiales
        await recolecta(characters);

        //MEDIODIA 12:00
        console.log('Time of the day: 12:00');
        await travesia(characters);

        //TARDE 17:00
        await catatonia(characters)
        res.json({time: time, characters: characters });
    } catch (error) {
        console.error('Error with the day:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
