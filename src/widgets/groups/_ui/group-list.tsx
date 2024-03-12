import { GetGroupsResponse } from "../model/types";
import GroupCard from "./group-card";

const GroupList = ({ groups }: { groups: GetGroupsResponse["data"] }) => {
  return (
    <>
      {groups?.map((group) => {
        return (
          <GroupCard
            key={group.id}
            closed={group.closed}
            members_count={group.members_count}
            name={group.name}
            avatar_color={group.avatar_color}
            friends={String(group.friends?.length)}
            id={group.id}
            friendList={group.friends}
          />
        );
      })}
    </>
  );
};

export default GroupList;
