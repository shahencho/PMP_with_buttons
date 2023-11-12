import { classNames } from 'utils/classNames';
import { memo } from 'react';
import sportImage from 'assets/images/sport.jpg';
import actorsImage from 'assets/images/actors.jpg';
import musicansImage from 'assets/images/musicans.jpg';
import tiktokImage from 'assets/images/tiktok.jpg';
import cls from './Categories.module.scss';

interface CategoriesProps {
    className?: string;
}

export const Categories = memo(({ className }: CategoriesProps) => (
    <div className={classNames(cls.Categories, {}, [className])}>
        <div className={cls.category}>
            <div className={cls.wrapper}>
                <img alt="" className={cls.categoryImage} src={sportImage} />
                <div className={cls.categoryName}>Sports</div>
            </div>
        </div>
        <div className={cls.category}>
            <div className={cls.wrapper}>
                <img alt="" className={cls.categoryImage} src={actorsImage} />
                <div className={cls.categoryName}>Actors</div>
            </div>
        </div>
        <div className={cls.category}>
            <div className={cls.wrapper}>
                <img alt="" className={cls.categoryImage} src={musicansImage} />
                <div className={cls.categoryName}>Musicians</div>
            </div>
        </div>
        <div className={cls.category}>
            <div className={cls.wrapper}>
                <img alt="" className={cls.categoryImage} src={tiktokImage} />
                <div className={cls.categoryName}>Tik Tok</div>
            </div>
        </div>
        <div className={cls.category}>
            <div className={cls.wrapper}>
                <img alt="" className={cls.categoryImage} src={sportImage} />
                <div className={cls.categoryName}>Sports</div>
            </div>
        </div>
        <div className={cls.category}>
            <div className={cls.wrapper}>
                <img alt="" className={cls.categoryImage} src={sportImage} />
                <div className={cls.categoryName}>Sports</div>
            </div>
        </div>
    </div>
));
