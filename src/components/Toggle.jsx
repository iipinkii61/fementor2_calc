export default function Toggle({ isWhite, setIsWhite }) {
  return (
    <div
      className={isWhite ? "toggle-light" : "toggle"}
      onClick={() => setIsWhite(!isWhite)}
    >
      <button className="innerToggle"></button>
    </div>
  );
}
