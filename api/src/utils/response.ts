import type { Response } from 'express';

export type SuccessStatus = 200 | 201 | 202;
export type ErrorStatus = 400 | 401 | 403 | 404 | 500;
export type ResponseBody<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export function successResponse<TData>(
  response: Response,
  data: TData,
  statusCode: SuccessStatus = 200,
) {
  const responseBody: ResponseBody<TData> = {
    success: true,
    data,
  };

  return response.status(statusCode).json(responseBody);
}

export const errorResponse = (response: Response, message: string, statusCode: ErrorStatus = 500) => {
  const responseBody: ResponseBody<undefined> = {
    success: false,
    data: undefined,
    message,
  };

  return response.status(statusCode).json(responseBody);
};