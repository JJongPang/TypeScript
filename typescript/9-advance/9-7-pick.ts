{
    type Video = {
        id: string;
        title: string;
        url: string;
        data: string;
    };

    function getVideo(id: string): Video {
        return {
            id,
            title: 'video',
            url: 'https://..',
            data: 'byte-data..'
        }
    }

    // 기존의 타입에서 원하는 데이타만 쏙쏙 가지고 올 때
    type VideoMetadata = Pick<Video, 'id' | 'title'>

    function getVideoMetadata(id: string): VideoMetadata {
        return {
            id,
            title: 'title'
        }
    }
}