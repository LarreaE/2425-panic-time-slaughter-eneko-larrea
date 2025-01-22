import { Character } from "../db/models/Character.js";

export const getCharacters = async () => {
    try {
      const char = await Character.find();
      return char;
    } catch (error) {
      console.error('Error fetching Characters:', error);
      throw error;
    }
  };