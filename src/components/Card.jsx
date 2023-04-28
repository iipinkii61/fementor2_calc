export default function Card({ head, content, icon, amount, arrow, percent }) {
  return (
    <div>
      <div className={head}>
        <div className="upperCard">
          {content} {icon}
        </div>
        <div className="lowerCard">
          {amount}
          <div>
            {arrow} {percent}%
          </div>
        </div>
      </div>
    </div>
  );
}
