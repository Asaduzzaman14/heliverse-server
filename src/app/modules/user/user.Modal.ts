import { Schema, model } from 'mongoose';
import { IUser, UserModal } from './user.Interface';

const UserSchema = new Schema<IUser, UserModal>(
  {
    id: {
      type: Number,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ['Male', 'Female', 'Other'], // Add other gender options if needed
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    domain: {
      type: String,
      required: true,
    },
    available: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Users = model<IUser, UserModal>('users', UserSchema);
