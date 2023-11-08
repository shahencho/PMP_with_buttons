import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './Layout.module.scss';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar/ui/Sidebar';

interface LayoutProps {
    className?: string;
    navbar?: boolean;
    sidebar?: boolean;
    children?: any;
}

export const Layout = memo(({ className, navbar, sidebar }: LayoutProps) => {
    return (
    <div className={classNames(cls.Layout, {}, [className])}>
        {sidebar && <div className={cls.sidebar}><Sidebar /></div>}
        <main className={cls.content}>
            {navbar && <Navbar />}
            <Outlet />
        </main>
    </div>
    );
});
