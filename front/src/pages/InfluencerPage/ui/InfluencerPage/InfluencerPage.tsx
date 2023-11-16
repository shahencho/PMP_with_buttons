/* eslint-disable max-len */
import { classNames } from 'utils/classNames';
import { memo } from 'react';
import { Breadcrumb } from 'widgets/Breadcrumb';
import { HowItWorks } from 'entities/HowItWorks';
import { Rating, Stack } from '@mui/material';
import cls from './InfluencerPage.module.scss';
import { InfluencerDetails } from '../InfluencerDetails/InfluencerDetails';

interface InfluencerPageProps {
    className?: string;
}

const InfluencerPage = (props: InfluencerPageProps) => {
    const { className } = props;
    const influencer = {
        userName: 'Arto Minasyan',
        profession: 'Co-Founder at Krisp & 10Web',
        charity: '1,750$',
        receivedMessages: 23,
        responseRate: '88%',
        responseTime: '72hr',
    };

    return (
        <div className={classNames(cls.InfluencerPage, {}, [className])}>
            <div className={cls.container}>
                <Breadcrumb />
                <div className={cls.wrapper}>
                    <div className={cls.influencerInfo}>
                        <InfluencerDetails {...influencer} />
                    </div>
                    <div className={cls.detailedInfo}>
                        <div className={cls.card}>
                            <h3>Bio</h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                        </div>
                        <div className={cls.card}>
                            <h3>How it Works</h3>
                            <HowItWorks />
                        </div>
                        <div className={cls.card}>
                            <h3>Rating</h3>
                            <Stack direction="row" spacing={2} alignItems="center">
                                <div className={cls.ratingValue}>4.5</div>
                                <Rating name="read-only" value={4.5} readOnly />
                            </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default memo(InfluencerPage);
