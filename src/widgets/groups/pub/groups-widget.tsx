import GroupList from "../_ui/layout";

const GroupWidget = () => {
  return (
    <div>
      <section className="p-4 border-2 rounded-xl border-black overflow-hidden overflow-y-scroll h-[700px]">
        <div className="flex flex-col gap-3 p-4 ">
          <GroupList />
        </div>
      </section>
    </div>
  );
};

export default GroupWidget;
