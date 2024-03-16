import s from './index.module.scss';
import cn from 'classnames';
import { Photo, CommonClassProps } from '../types';
import { useEffect, useMemo, useRef } from 'react';

interface PreviewGalleryProps extends CommonClassProps {
    indexActivePhoto: number;
    photos: Photo[];
}

export const PreviewGallery: React.FC<PreviewGalleryProps> = ({ indexActivePhoto, photos, className }) => {
    const previewContainer = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (!previewContainer.current) {
            return;
        }

        previewContainer.current.style.transform = `translate3d(-${indexActivePhoto * 164}px, 0, 0)`;
    }, [indexActivePhoto]);

    return (
        <div className={cn(s.previewGallery, className)}>
            {useMemo(() => {
                return (
                    <ul className={s.previewGalleryTrack} ref={previewContainer}>
                        {photos.map((photo) => (
                            <li key={photo.id} className={s.previewGalleryPreview}>
                                <img className={s.previewGalleryImage} src={photo.preview} alt={photo.description} />
                            </li>
                        ))}
                    </ul>
                );
            }, [])}

            <div className={s.previewGalleryCover}>
                {indexActivePhoto + 1} / {photos.length}
            </div>
        </div>
    );
};
