import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MenuItemType } from './menu.interface';
import './menu.scss';


type AppMenuProps = {
    menuItems: Array<MenuItemType>;
};

const Menu = ({ menuItems }: AppMenuProps) => {
    const [expandedItems, setExpandedItems] = useState<Array<string>>([]);

    const handleToggle = (item: MenuItemType) => {
        setExpandedItems(prevExpandedItems => {
            if (prevExpandedItems.includes(item.key)) {
                return prevExpandedItems.filter(key => key !== item.key);
            } else {
                return [...prevExpandedItems, item.key];
            }
        });
    };

    const renderMenuItems = (items: MenuItemType[]) => {
        return items.map((item, index) => {
            return (
                <React.Fragment key={index.toString()}>
                    {item.isTitle ? (
                        <li className="side-nav-title side-nav-item">{item.label}</li>
                    ) : (
                        <>
                            {item.children ? (
                                <li className="side-nav-item">
                                    <NavLink
                                        className={({ isActive }) => {
                                            const linkClasses = ['side-nav-link'];
                                            if (isActive) linkClasses.push('menuitem-active');
                                            return linkClasses.join(' ');
                                        }}
                                        to={item.url || '#'}
                                        onClick={() => handleToggle(item)}
                                    >
                                        {item.label}
                                    </NavLink>
                                    <ul
                                        className={`side-nav-second-level ${
                                            expandedItems.includes(item.key) ? 'show' : ''
                                        }`}
                                    >
                                        {renderMenuItems(item.children)}
                                    </ul>
                                </li>
                            ) : (
                                <li className="side-nav-item">
                                    <NavLink
                                        className={({ isActive }) => {
                                            const linkClasses = ['side-nav-link'];
                                            if (isActive) linkClasses.push('menuitem-active');
                                            return linkClasses.join(' ');
                                        }}
                                        to={item.url || ''}
                                    >
                                        {item.label}
                                    </NavLink>
                                </li>
                            )}
                        </>
                    )}
                </React.Fragment>
            );
        });
    };

    return <ul className="side-nav">{renderMenuItems(menuItems)}</ul>;
};

export default Menu;
