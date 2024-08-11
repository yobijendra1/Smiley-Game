
const InfoPannel = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 50,
        right: -100,
        backgroundColor: "#fafafa",
        color: "#000",
        width: 300,
        padding: 4,
        fontSize: 16,
      }}
    >
      <p>
        Developer: <b>Bijendra Gurung</b>
      </p>
      <p>
        Github:{" "}
        <a
          href="https://github.com/yobijendra1/Smiley-Game"
          target="_blank"
          style={{
            fontSize: 12,
          }}
        >
          https://github.com/rupandhungana/emoji-game
        </a>
      </p>
      <p>
        Language: <b>React + TypeScript</b>
      </p>
      <p>
        Info: <b>has bugs and more..</b>
      </p>
    </div>
  );
};

export default InfoPannel;
