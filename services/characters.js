import { Character } from "../db/models/Character.js";
import { Saddlebag } from "../db/models/Saddlebag.js";
import { Weapons } from "../db/models/Weapons.js";
import { Stone } from "../db/models/Stone.js";
import { Time } from "../db/models/Time.js";

export const getCharacters = async () => {
    try {
      const char = await Character.find();
      const populated = []
      for (let i = 0; i < char.length; i++) {
        populated.push(await populatePlayer(char[i]._id));
      }
      console.log(populated);
      
      return populated;
    } catch (error) {
      console.error('Error fetching Characters:', error);
      throw error;
    }
  };


export const populatePlayer = async (playerId) => {


  const playerPopulated = await Character.findById(playerId).populate('profile').exec();

  // Poblamos el equipo
  await playerPopulated.equipment.populate('saddlebag', { 'profiles': 0 });
  await playerPopulated.equipment.populate('weapons', { 'profiles': 0 });
  await playerPopulated.equipment.pouch.populate('stones');

  

  return playerPopulated;
}
