import { getGroups } from "@/entities/getGroups";
import { useEffect, useState } from "react";
import { GetGroupsResponse } from "../model/types";
import GroupsFilter from "./groups-filter";
import GroupList from "./group-list";


const Layout = () => {
  const [error, setError] = useState<string>("");
  const [empty, setEmpty] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");
  const [color, setColor] = useState<string | null>("");
  const [isOnlyFriends, setIsOnlyFriends] = useState<boolean>(false);
  const [access, setAccess] = useState<boolean | null>(null);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [groups, setGroups] = useState<GetGroupsResponse["data"]>([]);
  useEffect(() => {
    setIsLoading(true);
    const getData = () => {
      getGroups
        .then((res: any) => {
          if (res.data?.length) {
            setGroups(res.data);
          } else {
            setEmpty("No data!");
          }
        })
        .catch((err) => {
          console.log(err instanceof Error && err.message);
          if (err instanceof Error) {
            setError(err.message);
          }
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getData();
  }, []);

  const groupsResult = groups?.filter((group) => {

    if (access === null && !isOnlyFriends ) {
      return group.name.toLowerCase().includes(inputValue.toLowerCase())
    }
    if (access === null && isOnlyFriends) {
      return group.name.toLowerCase().includes(inputValue.toLowerCase()) && group.friends?.length
    }
    if ((access || !access) && !isOnlyFriends) {
      return group.name.toLowerCase().includes(inputValue.toLowerCase()) && group.closed === access
    }

    return group.closed === access && group.friends?.length && group.name.toLowerCase().includes(inputValue.toLowerCase()) ;
    
  });

  const colorResult = color !== '' ?  groupsResult?.filter((value)=>{
    return value.avatar_color === color
  }) : groupsResult;


  return (
    <div className="flex flex-col gap-4">
      <GroupsFilter
        setInputValue={setInputValue}
        inputValue={inputValue}
        setIsOnlyFriends={setIsOnlyFriends}
        setAccess={setAccess}
        setColor={setColor}
      />
      <GroupList groups={colorResult} />
      {error !== "" && error + " " + "При загрузке случилась преднамеренная ошибка попробуйте перезагрузить страницу, пока не загрузится материал"}
      {empty !== "" && empty}
      {isLoading && <p>Loading...</p>}
    </div>
  );
};

export default Layout;
