import mongoose, {Schema, Document, Model} from "mongoose";

interface PointCard extends Document {
  cardNumber: number;
  cvc: number;
  email: string,
  name: string,
}

const cardSchema: Schema = new Schema({
    cardNumber: {
      type: Number,
      unique: true,
      required: [true, "Card number is required"],
    },
    cvc: {
      type: Number,
      unique: true,
      required: [true, "CVC number is required"],
    },
    email: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
  }
);

const Card: Model<PointCard> = mongoose.models.Card || mongoose.model<PointCard>("Card", cardSchema);

export default Card;
export type {PointCard};
