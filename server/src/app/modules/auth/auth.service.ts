import httpStatus from 'http-status';

import AppError from '../../errors/AppError';

import { TLoginUser } from './auth.interface';

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  // const user = await User.isUserExistsByCustomId(payload.email);
  const user = {
    password: '12345',
  };

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }
  // checking if the user is already deleted

  const passwordMatch = user.password === payload.password;

  if (!passwordMatch) {
    throw new AppError(httpStatus.UNAUTHORIZED, 'user not authorized');
  }

  return {};
};

export const AuthServices = {
  loginUser,
};
