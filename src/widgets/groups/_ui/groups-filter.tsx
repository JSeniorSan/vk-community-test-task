import { Input } from "@/shared/ui/input";
import { useRef } from "react";



const GroupsFilter = ({
  setInputValue,
  inputValue,
  setIsOnlyFriends,
  setAccess,
  setColor
}: {
  setInputValue: (value: string) => void;
  inputValue: string;
  setIsOnlyFriends: (value: boolean) => void;
  setAccess: (value: boolean | null) => void;
  setColor: (value: string | null) => void;
}) => {
  const ref = useRef<HTMLSelectElement>(null);
  const refColor = useRef<HTMLSelectElement>(null);
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsOnlyFriends(e.currentTarget.checked);
  };
  
  const handleSelectChange = ()=>{
    if (ref.current!.value === 'null') {
      setAccess(null)
    } else if (ref.current!.value === 'true') {
      setAccess(true)
    }else {
      setAccess(false)
    }
   
  }

  const handleColorSelect = ()=>{
      setColor(refColor.current!.value)
    
  }

  return (
    <div>
      <div className="flex flex-col gap-4">
        <Input
          placeholder="Введите название группы"
          value={inputValue}
          onChange={handleChangeInput}
          name="group"
        />
        <select onClick={handleColorSelect} ref={refColor}>
              <option value="">Любой</option>
              <option value="blue">blue</option>
              <option value="red">red</option>
              <option value="yellow">yellow</option>
              <option value="green">green</option>
              <option value="purple">purple</option>
              <option value="orange">orange</option>
        </select>
      <select onChange={handleSelectChange} ref={ref}>
        <option value='null'>Все</option>
        <option value='false'>Открытая</option>
        <option value='true'>Закрытая</option>
      </select>
        <div className="flex gap-2 justify-start items-center">
          <input
            id="friendsOnly"
            type="checkbox"
            onChange={handleCheckboxChange}
          />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Только с друзьями
          </label>
        </div>
      </div>
    </div>
  );
};

export default GroupsFilter;
