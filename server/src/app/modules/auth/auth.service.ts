import httpStatus from 'http-status';

import AppError from '../../errors/AppError';

import { TAuth } from './auth.interface';
import { Auth } from './auth.model';

const loginUser = async (payload: TAuth) => {
  console.log(payload);
  try {
    // checking if the user exists
    const user = await Auth.findOne({ email: payload.email });
    console.log(user);

    if (!user) {
      throw new AppError(httpStatus.NOT_FOUND, 'This user is not found!');
    }

    // checking if the password matches
    const passwordMatch = user.password === payload.password;

    if (!passwordMatch) {
      throw new AppError(httpStatus.UNAUTHORIZED, 'User not authorized');
    }

    return {};
  } catch (error) {
    // Handle the error without stopping the server
    console.error('Error during user login:', error);
    throw new AppError(
      httpStatus.INTERNAL_SERVER_ERROR,
      'An error occurred during login.',
    );
  }
};

export const AuthServices = {
  loginUser,
};
