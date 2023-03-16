import { MenuItemType } from './menu.interface';

export type SubMenu = {
    item: MenuItemType;
    linkClassName?: string;
    subMenuClassNames?: string;
    activeMenuItems?: Array<string>;
    toggleMenu?: (item: MenuItemType, status: boolean) => void;
    className?: string;
};
