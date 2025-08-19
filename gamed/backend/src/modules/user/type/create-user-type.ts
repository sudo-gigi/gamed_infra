import CreateRecordGeneric from 'src/types/generic/create-record-type';
import UserInterface from './user.interface';

type CreateUserRecordPayload = Partial<UserInterface>;
type CreateUserRecordOptions = CreateRecordGeneric<CreateUserRecordPayload>;

export default CreateUserRecordOptions;
