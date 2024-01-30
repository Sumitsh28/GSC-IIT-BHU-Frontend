const Video = () => {
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 p-4">
        <div className="rounded-xl overflow-hidden bg-white bg-opacity-20 p-4 shadow-lg">
          <iframe
            className="rounded-lg"
            width="1440"
            height="560"
            src="https://www.youtube.com/embed/5rVw16UHLNw?autoplay=1&mute=1"
            title="Spardha&#39;18 | Aftermovie"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Video;
