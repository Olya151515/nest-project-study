import { UserID } from '../../../../common/types/entity-ids.type';

export interface IUserData {
  userID: UserID;
  deviceId: string;
  email: string;
}
