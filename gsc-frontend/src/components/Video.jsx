const Video = () => {
  return (
    <>
      <div className="flex justify-center items-center w-screen h-screen bg-black p-4">
        <iframe
          className="rounded-lg w-screen h-screen"
          src="https://www.youtube.com/embed/5rVw16UHLNw?autoplay=1&mute=1"
          title="Spardha&#39;18 | Aftermovie"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default Video;
