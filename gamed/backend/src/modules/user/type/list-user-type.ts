import ListRecordGeneric from 'src/types/generic/list-record-type';

type UsersFilterOptions = {
  email?: string;
};

type ListUserRecordOptions = ListRecordGeneric<UsersFilterOptions>;

export default ListUserRecordOptions;
