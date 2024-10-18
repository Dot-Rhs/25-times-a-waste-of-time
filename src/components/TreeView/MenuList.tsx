import { MenuItem } from "./MenuItem";
import { IMenuData } from "./mockData";
import "./styles.css";

interface IProps {
  list: IMenuData[];
}

export const MenuList = ({ list }: IProps) => {
  return (
    <ul className="menu-list-container">
      {list?.length
        ? list.map((item, i) => <MenuItem key={item.label + i} item={item} />)
        : null}
    </ul>
  );
};
