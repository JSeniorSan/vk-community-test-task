import { User } from "../model/types";

const FriendList = ({ friendList }: { friendList: User[] | undefined }) => {
  return (
    <div className="h-fit bg-slate-300 w-full rounded-b-xl p-3">
      {friendList?.map((user, i) => {
        return <div key={i}>{user.first_name + " " + user.last_name}</div>;
      })}
    </div>
  );
};

export default FriendList;
