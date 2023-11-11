import { classNames } from 'utils/classNames';
import { memo } from 'react';
import cls from './Categories.module.scss';
import sportImage from '../../../assets/images/sport.jpg';

interface CategoriesProps {
    className?: string;
}

const styles = {
    backgroundImage: `url(${sportImage})`,
  }

export const Categories = memo(({ className }: CategoriesProps) => {
    return (
    <div className={classNames(cls.Categories, {}, [className])}>
        <div className={cls.category}>
        <div className={cls.categoryImage} style={styles}>
        </div>
        <div className={cls.categoryName}>
            Sports
        </div>
        </div>
    </div>
    );
});
