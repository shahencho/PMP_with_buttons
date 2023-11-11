import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './Sidebar.module.scss';
import { Breadcrumb } from '../../Breadcrumb';
import { Filters } from "../../Filters";

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    return (
        <aside
            className={classNames(cls.Sidebar, {}, [className])}
        >
            <div className={cls.container}>
                <div className={cls.appName}><h2>PaidEmail</h2></div>
                <Breadcrumb />
                <Filters />
            </div>
        </aside>
    );
});
