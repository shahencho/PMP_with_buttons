import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    return (
        <aside
            className={classNames(cls.Sidebar, {}, [className])}
        >
            <div>SIDEBAR</div>
        </aside>
    );
});
