export default function BigCard({
  app,
  icon,
  account,
  follower,
  arrow,
  today,
}) {
  return (
    <div>
      <div className={app}>
        <div className="accName">
          {icon} {account}
        </div>
        <div className="amount">{follower}</div>
        <div className="follower">FOLLOWERS</div>
        <div className="increaseOrDecrease">
          {arrow} {today} Today
        </div>
      </div>
    </div>
  );
}
