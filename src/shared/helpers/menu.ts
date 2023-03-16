import {MenuItemType } from '../modules/Menu/menu.interface';
import {MENU_ITEMS} from '../modules/Menu/menu.interface';

export const getMenuItems = () => {

    return MENU_ITEMS;

};

const findAllParent = (menuItems: MenuItemType[], menuItem: MenuItemType): string[] => {
    let parents: string[] = [];
    const parent = findMenuItem(menuItems, menuItem.parentKey);

    if (parent) {
        parents.push(parent.key);
        if (parent['parentKey']) parents = [...parents, ...findAllParent(menuItems, parent)];
    }

    return parents;
};

function isMenuItemType(obj: any): obj is MenuItemType {
    return obj && typeof obj === 'object' && 'key' in obj && 'parentKey' in obj;
}
export function findMenuItem(
    menuItems: MenuItemType[] | undefined = [],
    menuItemKey: MenuItemType['key'] | undefined = undefined
): MenuItemType | null {
    if (!menuItemKey) return null;
    for (let i = 0; i < menuItems.length; i++) {
        if (menuItems[i].key === menuItemKey) {
            return menuItems[i];
        }
        const found = findMenuItem(menuItems[i].children, menuItemKey);
        if (found) return found;
    }
    return null;
}



