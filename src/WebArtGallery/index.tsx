import React, { useState } from 'react';
import { Photo } from './types';
import s from './index.module.scss';
import { MainPhoto } from './MainPhoto';
import { PreviewGallery } from './PreviewGallery';
import { Navigation } from './Navigation';

interface WebArtGalleryProps {
    photos: Photo[];
}

export const WebArtGallery: React.FC<WebArtGalleryProps> = ({ photos }) => {
    if (!photos.length) {
        return null;
    }

    const [indexActivePhoto, setIndexActivePhoto] = useState(0);
    const activePhoto = photos[indexActivePhoto];
    const prevPhoto = photos[indexActivePhoto - 1];
    const nextPhoto = photos[indexActivePhoto + 1];

    return (
        <div className={s.webArtGallery}>
            <div className={s.webArtGalleryContainer}>
                <MainPhoto prevPhoto={prevPhoto} activePhoto={activePhoto} nextPhoto={nextPhoto} />
                <Navigation
                    className={s.webArtGalleryNavigation}
                    disabledPrev={!prevPhoto}
                    disabledNext={!nextPhoto}
                    onPrevClick={() => {
                        setIndexActivePhoto(indexActivePhoto - 1);
                    }}
                    onNextClick={() => {
                        setIndexActivePhoto(indexActivePhoto + 1);
                    }}
                />
            </div>
            <PreviewGallery
                indexActivePhoto={indexActivePhoto}
                photos={photos}
                className={s.webArtGalleryPreviewList}
            />
        </div>
    );
};
