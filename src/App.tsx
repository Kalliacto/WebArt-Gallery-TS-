import { WebArtGallery } from './WebArtGallery';

function App() {
    return (
        <div>
            <WebArtGallery
                photos={[
                    { id: 1, src: '/photos/1.jpg', preview: '/photos/preview/1.webp', description: 'Photo 1' },
                    { id: 2, src: '/photos/2.jpg', preview: '/photos/preview/2.webp', description: 'Photo 2' },
                    { id: 3, src: '/photos/3.jpg', preview: '/photos/preview/3.webp', description: 'Photo 3' },
                    { id: 4, src: '/photos/4.jpg', preview: '/photos/preview/4.webp', description: 'Photo 4' },
                    { id: 5, src: '/photos/5.jpg', preview: '/photos/preview/5.webp', description: 'Photo 5' },
                    { id: 6, src: '/photos/6.jpg', preview: '/photos/preview/6.webp', description: 'Photo 6' },
                    { id: 7, src: '/photos/7.jpg', preview: '/photos/preview/7.webp', description: 'Photo 7' },
                    { id: 8, src: '/photos/8.jpg', preview: '/photos/preview/8.webp', description: 'Photo 8' },
                ]}
            />
        </div>
    );
}

export default App;
