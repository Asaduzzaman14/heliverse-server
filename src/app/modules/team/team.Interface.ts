import { Model } from 'mongoose';

export type IUser = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string;
  avatar: string;
  domain: string;
  available: boolean;
};

export type IUsers = {
  email: string;
  users: IUser[];
};

export type TeamModal = Model<IUsers, unknown>;
