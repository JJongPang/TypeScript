{
    // 선택한 data 빼버리기 pick 반대

    type Videos = {
        id: string;
        title: string;
        url: string;
        data: string;
    }

    type VideoMetadatas = Omit<Videos, 'url' | 'data'>;

    function getVideos(id: string): Videos {
        return {
            id, 
            title: 'video',
            url: 'https//..',
            data: 'byte-data',
        };
    }

    function getVideoMetadata(id: string): VideoMetadatas {
        return{
            id: id,
            title: 'title'
        } 
    }
}