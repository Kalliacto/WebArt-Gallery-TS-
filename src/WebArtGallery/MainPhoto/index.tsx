import { Photo, CommonClassProps } from '../types';
import s from './index.module.scss';
import cn from 'classnames';

interface MainPhotoProps extends CommonClassProps {
    prevPhoto?: Photo;
    activePhoto: Photo;
    nextPhoto?: Photo;
}

export const MainPhoto: React.FC<MainPhotoProps> = ({ prevPhoto, activePhoto, nextPhoto, className }) => {
    return (
        <div className={cn(className, s.mainPhoto)}>
            {!!prevPhoto && <img className={s.mainPhotoImagePrev} src={prevPhoto.src} alt={prevPhoto.description} />}
            <img className={s.mainPhotoImage} src={activePhoto.src} alt={activePhoto.description} />
            {!!nextPhoto && <img className={s.mainPhotoImageNext} src={nextPhoto.src} alt={nextPhoto.description} />}
        </div>
    );
};
