import { addAttributes, getCharacters } from "../services/characters.js";
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
        const caharacters = await getCharacters()
        const time = await getTime()

        //MAÑANA 5:00
        //cada jugador gana 2 puntos en strength o dex
        await addAttributes(characters);

        //recolecta: 1D100 recoger materiales
        for (let i = 0; i < characters.length; i++) {
            let rand = Math.ceil(Math.random() * 100)
            if (rand < 31 && rand >= 1) {
                //encuentra 1 de oro
                characters[i].pouch.gold++
            } else if (rand < 81 && rand >= 31) {
                let rand20 = Math.ceil(Math.random() * 20) //1D20
                characters[i].pouch.coins += rand20;

            } else if (rand < 101 && rand >= 81) { //pieza a escoger y 1 piedra preciosa
                characters[i].pouch.precious_stones.push();
            }
            
        }
        res.json({time: time });
    } catch (error) {
        console.error('Error with the day:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
