import { getCharacters } from "../services/characters.js";
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
        const time = await getTime()
        
        res.json({time: time });
    } catch (error) {
        console.error('Error geting time:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }
