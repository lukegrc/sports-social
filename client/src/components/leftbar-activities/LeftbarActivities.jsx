import "./leftbar-activities.css";

export default function LeftbarActivities() {
  return(
    <ul className="leftbarList">
      <li className="leftbarListItem">
        {/* <RssFeed className="leftbarIcon" /> */}
        <span className="leftbarListItemText">Feed</span>
      </li>
      <li className="leftbarListItem">
        {/* <Chat className="leftbarIcon" /> */}
        <span className="leftbarListItemText">Chats</span>
      </li>
      <li className="leftbarListItem">
        {/* <PlayCircleFilledOutlined className="leftbarIcon" /> */}
        <span className="leftbarListItemText">Videos</span>
      </li>
      <li className="leftbarListItem">
        {/* <Group className="leftbarIcon" /> */}
        <span className="leftbarListItemText">Groups</span>
      </li>
    </ul>
  );
}
