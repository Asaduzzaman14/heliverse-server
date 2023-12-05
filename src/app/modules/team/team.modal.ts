import { Schema, model } from 'mongoose';
import { IUsers, TeamModal } from './team.Interface';

const PcPartsSchema = new Schema<IUsers, TeamModal>(
  {
    email: {
      type: String,
    },
    users: [
      {
        id: { type: Number },
        _id: { type: String },
        first_name: { type: String },
        last_name: { type: String },
        email: { type: String },
        gender: { type: String },
        avatar: { type: String },
        domain: { type: String },
        available: { type: Boolean },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Team = model<IUsers, TeamModal>('teams', PcPartsSchema);
