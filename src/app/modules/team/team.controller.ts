import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import { teamServices } from './team.service';

const createTeam = catchAsync(async (req: Request, res: Response) => {
  const { ...partsData } = req.body;
  // console.log(partsData, 'this is data');

  const result = await teamServices.createTeam(partsData);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team Created Successfully',
    data: result,
  });
});

//  get All Parts

const getTeams = catchAsync(async (req: Request, res: Response) => {
  const result = await teamServices.getTeam();
  // console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Team Retrieved  Succesfully',
    data: result,
  });
});
export const teamController = {
  createTeam,
  getTeams,
};
