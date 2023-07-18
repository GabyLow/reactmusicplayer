import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: "Midnight City",
    songArtist: "M83",
    songSrc: "./Assets/songs/Midnight city-M83.mp3",
    songAvatar: "./Assets/Images/Avatar1.jpg",
    songLyrics: "./Assets/Lyrics/Image-A2.jpg",
  });

  //UseStates Variables
  const [audioProgress, setAudioProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState("00 : 00");
  const [musicCurrentTime, setMusicCurrentTime] = useState("00 : 00");
  const [videoIndex] = useState(0);
  const [volume, setVolume] = useState(50);

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime =
      (e.target.value * currentAudio.current.duration) / 100;
  };

  //Change Avatar Class
  let avatarClass = ["objectFitCover", "objectFitContain", "none"];
  const [avatarClassIndex, setAvatarClassIndex] = useState(0);
  const handleAvatar = () => {
    if (avatarClassIndex >= avatarClass.length - 1) {
      setAvatarClassIndex(0);
    } else {
      setAvatarClassIndex(avatarClassIndex + 1);
    }
  };

  //Change Lyrics Class
  let lyricsClass = ["objectFitCover", "objectFitContain", "none"];
  const [lyricsClassIndex, setLyricsClassIndex] = useState(0);
  const handleLyrics = () => {
    if (lyricsClassIndex >= lyricsClass.length - 1) {
      setLyricsClassIndex(0);
    } else {
      setLyricsClassIndex(lyricsClassIndex + 1);
    }
  };

  //Play Audio Function

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true);
    } else {
      currentAudio.current.pause();
      setIsAudioPlaying(false);
    }
  };
 
  //Audio Controls

const handleNextSong = () => {
  if (musicIndex >= musicAPI.length - 1) {
    let setNumber = 0;
    setMusicIndex(setNumber);
    updateCurrentMusicDetails(setNumber);
  } else {
    let setNumber = musicIndex + 1;
    setMusicIndex(setNumber);
    updateCurrentMusicDetails(setNumber);
  }
};

const handlePrevSong = () => {
  if (musicIndex === 0) {
    let setNumber = musicAPI.length - 1;
    setMusicIndex(setNumber);
    updateCurrentMusicDetails(setNumber);
  } else {
    let setNumber = musicIndex - 1;
    setMusicIndex(setNumber);
    updateCurrentMusicDetails(setNumber);
  }
};

const updateCurrentMusicDetails = (number) => {
  let musicObject = musicAPI[number];
  currentAudio.current.src = musicObject.songSrc;
  currentAudio.current.play();
  setCurrentMusicDetails({
    songName: musicObject.songName,
    songArtist: musicObject.songArtist,
    songSrc: musicObject.songSrc,
    songAvatar: musicObject.songAvatar,
    songLyrics: musicObject.songLyrics,
  });
  setIsAudioPlaying(true);
};

const handleAudioUpdate = () => {
  //Input total length of the audio
  let minutes = Math.floor(currentAudio.current.duration / 60);
  let seconds = Math.floor(currentAudio.current.duration % 60);
  let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
  setMusicTotalLength(musicTotalLength0);

  //Input Music Current Time
  let currentMin = Math.floor(currentAudio.current.currentTime / 60);
  let currentSec = Math.floor(currentAudio.current.currentTime % 60);
  let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${
    currentSec < 10 ? `0${currentSec}` : currentSec
  }`;
  setMusicCurrentTime(musicCurrentT);

  const progress = parseInt(
    (currentAudio.current.currentTime / currentAudio.current.duration) * 100
  );
  setAudioProgress(isNaN(progress) ? 0 : progress);
};

//Volume Mute
  
  const toggleMute = () => {
    setIsMuted(!isMuted);
    currentAudio.current.muted = !isMuted;
  };

//Media API
const musicAPI = [
  {
    songName: "Midnight City",
    songArtist: "M83",
    songSrc: "./Assets/songs/Midnight city-M83.mp3",
    songAvatar: "./Assets/Images/Avatar1.jpg",
    songLyrics: "./Assets/Lyrics/Image-A2.jpg",
  },
  {
    songName: "Latch",
    songArtist: "Disclosure",
    songSrc: "./Assets/songs/Latch.mp3",
    songAvatar: "./Assets/Images/Avatar2.jpg",
    songLyrics: "./Assets/Lyrics/Image-B2.jpg",
  },
  {
    songName: "Worth Nothing",
    songArtist: "Twisted",
    songSrc: "./Assets/songs/Worth Nothing-Twisted.mp3",
    songAvatar: "./Assets/Images/Avatar3.jpg",
    songLyrics: "./Assets/Lyrics/Image-C2.jpg",
  },
  {
    songName: "Players",
    songArtist: "Coi Leray",
    songSrc: "./Assets/songs/Players-Coi Leray.mp3",
    songAvatar: "./Assets/Images/Avatar4.jpg",
    songLyrics: "./Assets/Lyrics/Image-D2.jpg",
  },
  {
    songName: "Dancing with a stranger",
    songArtist: "Sam Smith",
    songSrc: "./Assets/songs/Dancing with a stranger-Sam Smith.mp3",
    songAvatar: "./Assets/Images/Avatar5.jpg",
    songLyrics: "./Assets/Lyrics/Image-E2.jpg",
  },
  {
    songName: "If we ever broke up",
    songArtist: "Mae Stephens",
    songSrc: "./Assets/songs/If we ever broke up-Mae Stephens.mp3",
    songAvatar: "./Assets/Images/Avatar6.jpg",
    songLyrics: "./Assets/Lyrics/Image-F2.jpg",
  },
  {
    songName: "Ocean Drive",
    songArtist: "Duke Dumont",
    songSrc: "./Assets/songs/Ocean Drive-Duke Dumont.mp3",
    songAvatar: "./Assets/Images/Avatar7.jpg",
    songLyrics: "./Assets/Lyrics/Image-G2.jpg",
  },
];

//Video Background
const vidArray = ["./Assets/Videos/video-background.mp4"];

return (
 <>
  
  <div className="container">
  <video src={vidArray[videoIndex]} loop muted autoPlay className='backgroundVideo'></video>
    <audio src='./Assets/songs/Midnight city-M83.mp3' ref={currentAudio} onEnded={handleNextSong} onTimeUpdate={handleAudioUpdate}></audio>
    <div className="music-Container">
      <p className='musicPlayer'>Now Playing</p>
      <p className='music-Head-Name'>{currentMusicDetails.songName}</p>
      <p className='music-Artist-Name'>{currentMusicDetails.songArtist}</p>
    <img src={currentMusicDetails.songAvatar} className={avatarClass[avatarClassIndex]} onClick={handleAvatar} alt="song Avatar" id='songAvatar'/>
    <div className="musicTimerDiv">
      <p className='musicCurrentTime'>{musicCurrentTime}</p>
      <p className='musicTotalLenght'>{musicTotalLength}</p>
    </div>
    <input type="range" name="musicProgressBar" className='musicProgressBar' value={audioProgress} onChange={handleMusicProgressBar} />
    <div className="musicControlers">
      <i className='fa-solid fa-backward musicControler' onClick={handlePrevSong}></i>
      <i className={`fa-solid ${isAudioPlaying? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
      <i className='fa-solid fa-forward musicControler' onClick={handleNextSong}></i>
    </div>
    <i className={`fa-solid ${isMuted ? "fa-volume-off" : "fa-volume-up"} volumeToggler`} onClick={toggleMute}></i>
      <input type="range" min="0" max="100" value={volume} onChange={(e) => {setVolume(e.target.value);currentAudio.current.volume = e.target.value / 100; }} className="volumeSlider"/>
      </div>
      <div>
       <img src={currentMusicDetails.songLyrics} className={lyricsClass[lyricsClassIndex]} onClick={handleLyrics} alt="song Lyrics" id='songLyrics'/>
      </div>
    </div>
    </>
  );
}

export default App;