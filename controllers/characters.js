import { getCharacters } from "../services/characters.js";

export const characters = async (req, res) => {
    try {
        const characters = getCharacters()
        res.json({ success: true, characters: characters });
    } catch (error) {
        console.error('Error geting characters:', error);
        res.status(500).json({ success: false, error: 'Internal server error' });
    }
  }