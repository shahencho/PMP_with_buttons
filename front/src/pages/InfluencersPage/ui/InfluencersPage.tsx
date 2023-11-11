import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './InfluencersPage.module.scss';
import { Categories } from "entities/Categories";

interface InfluencersPageProps {
    className?: string;
}

const InfluencersPage = (props: InfluencersPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.InfluencersPage, {}, [className])}>
            <div>
                <h3 className={cls.sectionName}>Categories</h3>
                <Categories />
            </div>
        </div>
    );
};

export default memo(InfluencersPage);
