import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { paginationKeys } from '../../../constants/pagination';
import catchAsync from '../../../shared/catchAsync';
import pick from '../../../shared/pick';
import sendResponse from '../../../shared/sendResponse';
import { IUser } from './user.Interface';
import { userFilterableFields } from './user.constant';
import { UserServices } from './user.service';

const createUser = catchAsync(async (req: Request, res: Response) => {
  const { ...UserData } = req.body;

  const result = await UserServices.createUser(UserData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User Created Successfully',
    data: result,
  });
});

// get All Users

const getAllUser = catchAsync(async (req: Request, res: Response) => {
  const query = req.query;

  const paginationOptions = pick(query, paginationKeys);
  const filters = pick(query, userFilterableFields);

  const result = await UserServices.getAllUser(filters, paginationOptions);
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Users Retrieved  Succesfully',
    data: result,
  });
});
const getUserById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await UserServices.getSingleUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user Retrieved Successfully',
    data: result,
  });
});

// update user By Id
const updateUserById = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updatedData = req.body;

  const result = await UserServices.updateUserById(id, updatedData);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User  successfully updated',
    data: result,
  });
});

// Delete User
const deleteUser = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;

  const result = await UserServices.deleteUser(id);

  sendResponse<IUser>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User deleted Successfully',
    data: result,
  });
});

export const UserController = {
  createUser,
  getAllUser,
  getUserById,
  updateUserById,
  deleteUser,
};
