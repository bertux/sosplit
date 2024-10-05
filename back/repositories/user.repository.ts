import { UserModel, IUser } from '../models/user.model';

export class UserRepository {
  async findByEmail(email: string): Promise<IUser | null> {
    return await UserModel.findOne({ email });
  }

  async create(userData: Partial<IUser>): Promise<IUser> {
    return await UserModel.create(userData);
  }

  async findById(userId: string): Promise<IUser | null> {
    return await UserModel.findById(userId);
  }
}
