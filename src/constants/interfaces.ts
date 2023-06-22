export interface IUser {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  city: string;
  postal_code: number;
  country: string;
  phone: string;
  isAdmin: boolean;
  createAt: Date;
  updateAt: Date;
  orders: TOrder[];
}

export type TOrder = {
  id: number;
  userId: number;
  status: string;
  createAt: Date;
  updateAt: Date;
};
