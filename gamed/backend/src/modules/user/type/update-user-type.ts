import UserInterface from './user.interface';
import UpdateRecordGeneric from 'src/types/generic/update-record-type';

type UpdateUserRecordPayload = Partial<UserInterface>;
type UpdateUserRecordOptions = UpdateRecordGeneric<
  UpdateUserRecordPayload,
  Record<string, unknown>
>;

export default UpdateUserRecordOptions;
