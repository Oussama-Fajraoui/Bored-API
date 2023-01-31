import "./Button.css";

const ButtonHover = ({ text }) => {
  return (
    <>
      <button>
        <div className="left"></div>
        {text}
        <div className="right"></div>
      </button>
    </>
  );
};

export default ButtonHover;