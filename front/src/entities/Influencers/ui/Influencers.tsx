//Influencers.tsx

import { classNames } from 'utils/classNames';
import { memo } from 'react';
import { Influencer } from 'entities/Influencer';
import cls from './Influencers.module.scss';

import { useState } from 'react';




interface InfluencersProps {
    className?: string;
    influencers?: Array<any>;
}

export const Influencers = memo(({ className, influencers }: InfluencersProps) => (
    <div className={classNames(cls.Influencers, {}, [className])}>
        {influencers?.map((influencer) => (
            <Influencer
                key={influencer.userName}
                {...influencer}
            />
        ))}
    </div>
));

export const InfluencersContainer = () => (
    <Influencers influencers={[
        {
            userName: 'Arto Minasyan COntainer',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
            infl_private_email: "shahen.grigoryan@gmail.com"
        },
        // {
        //     userName: 'Valodik Minasyan',
        //     profession: 'Co-Founder at Krisp & 10Web',
        //     charity: '1,750$',
        //     receivedMessages: 23,
        //     responseRate: '88%',
        //     responseTime: '72hr',
        // },
        // {
        //     userName: 'Arto Minasyan',
        //     profession: 'Co-Founder at Krisp & 10Web',
        //     charity: '1,750$',
        //     receivedMessages: 23,
        //     responseRate: '88%',
        //     responseTime: '72hr',
        // },
        {
            userName: 'Alex  Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
            infl_private_email: "Alex@gmail.com"
        },
        {
            userName: 'Max Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
            infl_private_email: "Max@gmail.com"
        },
        {
            userName: 'Koko Minasyan',
            profession: 'Co-Founder at Krisp & 10Web',
            charity: '1,750$',
            receivedMessages: 23,
            responseRate: '88%',
            responseTime: '72hr',
            infl_private_email: "Koko@gmail.com"
        },
    ]}
    />
);
