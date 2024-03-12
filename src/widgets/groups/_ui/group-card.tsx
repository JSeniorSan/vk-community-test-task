import { Avatar } from "@/shared/ui/avatar";
import { Button } from "@/shared/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { useState } from "react";
import { User } from "../model/types";
import FriendList from "./friend-list";

const GroupCard = ({
  name,
  avatar_color,
  closed,
  members_count,
  friends,
  friendList,
}: {
  id: number;
  name: string;
  closed: boolean;
  avatar_color?: string;
  members_count: number;
  friends?: string;
  friendList?: User[];
}) => {
  const [isFriendsChecked, setIsFriendsChecked] = useState<boolean>(false);
  const handleClick = () => {
    setIsFriendsChecked(!isFriendsChecked);
  };
  return (
    <div>
      <Card className="cursor-pointer hover:shadow-lg transition-all  hover:bg-slate-50 rounded-b-none">
        <CardHeader>
          <CardTitle>
            <Avatar style={{ backgroundColor: `${avatar_color}` }} />
            {name}
          </CardTitle>
          <CardDescription>{closed ? "Закрытая" : "Открытая"}</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Число участников: {members_count}</p>
        </CardContent>
        <CardFooter>
          {friends !== "undefined" && (
            <Button onClick={handleClick}>
              <p>{`Друзей: ${friends}`}</p>
            </Button>
          )}
        </CardFooter>
      </Card>
      {isFriendsChecked && <FriendList friendList={friendList && friendList} />}
    </div>
  );
};

export default GroupCard;
