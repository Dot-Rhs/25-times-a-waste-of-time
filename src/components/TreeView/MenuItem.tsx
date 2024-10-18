import { useState } from "react";
import { MenuList } from "./MenuList";
import { IMenuData } from "./mockData";
import { FaMinus, FaPlus } from "react-icons/fa";

interface IProps {
  item: IMenuData;
}

export const MenuItem = ({ item }: IProps) => {
  const [displayChildren, setDisplayChildren] = useState<{
    [label: string]: boolean;
  }>({});

  const handleToggle = (label: string) => {
    setDisplayChildren((prev) => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <li className="menu-item">
      <div>
        {item?.children?.length ? (
          <span onClick={() => handleToggle(item.label)}>
            {!displayChildren[item.label] ? (
              <FaPlus color="fff" size={25} />
            ) : (
              <FaMinus color="fff" size={25} />
            )}
          </span>
        ) : null}
        <p>{item.label}</p>
      </div>
      {item?.children?.length && displayChildren[item.label] ? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
};
