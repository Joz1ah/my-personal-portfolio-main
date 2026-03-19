import tvStatic from "../assets/images/tv.gif";

const StaticBar = () => {
  return (
    <div
      className="w-full"
      style={{
        height: "50px",
        backgroundImage: `url(${tvStatic})`,
        backgroundRepeat: "repeat-x",
        backgroundSize: "auto 100%",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default StaticBar;
