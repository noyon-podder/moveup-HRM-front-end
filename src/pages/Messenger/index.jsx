import ChatList from "./ChatList";
import GroupsList from "./GroupsList";

const Messenger = () => {
  return (
    <div className="grid grid-cols-12 gap-5 mb-10">
      <div className="col-span-9">
        <ChatList />
      </div>
      <div className="col-span-3">
        <GroupsList />
      </div>
    </div>
  );
};

export default Messenger;
