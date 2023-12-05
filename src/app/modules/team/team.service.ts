import { IUsers } from './team.Interface';
import { Team } from './team.modal';

const createTeam = async (paylode: IUsers): Promise<IUsers> => {
  console.log(paylode);

  const result = await Team.create(paylode);
  return result;
};

const getTeam = async (): Promise<IUsers[]> => {
  const result = await Team.find({});
  return result;
};

export const teamServices = {
  createTeam,
  getTeam,
};
