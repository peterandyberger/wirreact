import classNames from 'classnames';
import { SubMenu } from './menu-item.interfaces';
import MenuItemLink from './menu-item-link';

const MenuItem = ({ item, className, linkClassName }: SubMenu) => {
    return (
        <li className={classNames('side-nav-item', className)}>
            <MenuItemLink item={item} className={linkClassName} />
        </li>
    );
};

export default MenuItem;
