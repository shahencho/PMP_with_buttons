import { classNames } from 'utils/classNames';
import { memo } from 'react';
import { Influencer } from 'entities/Influencer';
import cls from './Influencers.module.scss';

interface InfluencersProps {
    className?: string;
    influencers?: Array<any>;
}

export const Influencers = memo(({ className, influencers }: InfluencersProps) => (
    <div className={classNames(cls.Influencers, {}, [className])}>
        {influencers?.map((influencer) => (
            <Influencer
                key={influencer.username}
                {...influencer}
            />
        ))}
    </div>
));

export const InfluencersContainer = () => (
    <Influencers influencers={[
        {
            userName: 'Arto Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
        },
        {
            userName: 'Arto Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
        },
        {
            userName: 'Arto Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
        },
        {
            userName: 'Arto Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
        },
        {
            userName: 'Arto Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
        },
        {
            userName: 'Arto Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
        },
    ]}
    />
);
