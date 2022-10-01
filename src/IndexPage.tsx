import "./style.css";

const DEFAULT_STREAMER_ID = "codewithsiwalik";
const getStreamerId = () => {
  const url = new URL(document.location.href);
  const streamerId = url.searchParams.get("streamerId");
  return !!streamerId ? streamerId : DEFAULT_STREAMER_ID;
};

export const IndexPage = () => {
  const channelName = getStreamerId();
  return (
    <div>
      <div class="twitch-embed">
        <marquee width="60%" direction="left" height="100px">
          <h1 class="twitch-embed__title">
            You are watching {channelName} Live
          </h1>
        </marquee>
        <div class="box">
          <div class="title">
            <p class="title">Now Streaming {channelName}</p>
            <button>X</button>
            <button>?</button>
          </div>
          <div class="body">
            <iframe
              src={`https://player.twitch.tv/?channel=${channelName}&parent=solidtwitchapp.loca.lt`}
              frameborder="0"
              allowfullscreen="true"
              scrolling="no"
              height="378"
              width="620"
              muted={true}
              autoplay={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
