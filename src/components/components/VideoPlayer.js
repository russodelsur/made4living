import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ introVideo }) => {
    return (
        <div style={{ pointerEvents: 'none', position: 'absolute', zIndex: 5, width: '100%', height: '100%' }}>
            <ReactPlayer
            className="react-player"
            url={introVideo}
            muted={true}
            autoPlay={true}
            playing={true}
            loop={true}
            width="100%"
            height="100%"
            controls={false}
            playsinline={true} // Add the playsinline attribute
            />
        </div>
    );
};

export default VideoPlayer;