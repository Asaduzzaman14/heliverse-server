import { SortOrder } from 'mongoose';
import calculatePagination from '../../../helpers/paginationHelper';
import { IGenericResponse } from '../../../interfaces/common';
import { IPagenaionOptions } from '../../../interfaces/pagination';

import { IUser, IUserFilterRequest } from './user.Interface';
import { Users } from './user.Modal';
import { userSearchableFields } from './user.constant';

const createUser = async (paylode: IUser): Promise<IUser> => {
  const result = await Users.create(paylode);
  return result;
};

const getAllUser = async (
  filters: IUserFilterRequest,
  pageinationOptions: IPagenaionOptions
): Promise<IGenericResponse<IUser[]>> => {
  // pagination helpers
  const { page, limit, skip, sortBy, sortOrder } =
    calculatePagination(pageinationOptions);

  const { searchTerm, ...filtersData } = filters;

  const andCondation = [];

  if (searchTerm) {
    andCondation.push({
      $or: userSearchableFields.map(field => ({
        [field]: { $regex: searchTerm, $options: 'i' },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andCondation.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortCondations: { [key: string]: SortOrder } = {};

  if (sortBy && sortOrder) {
    sortCondations[sortBy] = sortOrder;
  }
  const requestCondetion =
    andCondation.length > 0 ? { $and: andCondation } : {};

  const result = await Users.find(requestCondetion)
    .sort(sortCondations)
    .skip(skip)
    .limit(limit);

  const total = await Users.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};
const getSingleUser = async (id: string): Promise<IUser | null> => {
  const result = await Users.findById(id);
  return result;
};

const updateUserById = async (
  id: string,
  paylode: IUser
): Promise<IUser | null> => {
  const result = await Users.findByIdAndUpdate({ _id: id }, paylode, {
    new: true,
  });
  return result;
};

const deleteUser = async (id: string): Promise<IUser | any> => {
  const result = await Users.findByIdAndDelete(id);
  return result;
};

export const UserServices = {
  createUser,
  getAllUser,
  getSingleUser,
  updateUserById,
  deleteUser,
};
