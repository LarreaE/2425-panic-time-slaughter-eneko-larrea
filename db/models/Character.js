import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const characterSchema = new Schema({
    _id: mongoose.Types.ObjectId,
    name: { type: String},    
    occupation: { type: String },
    description: { type: String},
    stats: {
      strength: {type: Number},
      dexterity: {type: Number},
      stamina: {type: Number},
    },
    equipment: {
        saddlebag: {type: Array},
        quiver: {type: Number},
        weapons: {type: Array},
        pouch: {
            coins: {type: Number},
            gold: {type: Number}
        },
        miscellaneous: {type: Array},
      },
  });


  export const Character = mongoose.model('Character', characterSchema);