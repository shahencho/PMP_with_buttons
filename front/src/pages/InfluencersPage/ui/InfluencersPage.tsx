import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './InfluencersPage.module.scss';

interface InfluencersPageProps {
    className?: string;
}

const InfluencersPage = (props: InfluencersPageProps) => {
    const { className } = props;
    return (
        <div className={classNames(cls.InfluencersPage, {}, [className])}>influencers page</div>
    );
};

export default memo(InfluencersPage);
