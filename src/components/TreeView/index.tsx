import { MenuList } from "./MenuList";
import { IMenuData } from "./mockData";

interface IProps {
  menu: IMenuData[];
}

export const TreeView = ({ menu }: IProps) => {
  return (
    <div className="tree-view">
      <MenuList list={menu} />
    </div>
  );
};
