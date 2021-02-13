{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    function getVideos(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..'
        }
    }

    // Pick 반대로 원하는 것을 빼버릴때
    type VideoMetadata = Omit<Video, 'url' | 'data'>

    function getVideoMetadatas(id: string): VideoMetadata {
        return {
            id,
            title: 'title'
        }
    }
}