import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { timeline } from "../utils/constants";

const TimeLine = () => {
  return (
    <div
      name="timeLine"
      className="min-h-screen flex items-center bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            TimeLine
          </p>
          <p className="py-6">A timeline of all my experiences and education</p>
        </div>
        <div className="webkit-box-shadow: ">
          <VerticalTimeline lineColor="rgb(6 182 212)">
            {timeline.map(
              ({ classNameV, date, icon, title, location, message, id }) => (
                <VerticalTimelineElement
                  className={classNameV}
                  date={date}
                  iconStyle={{ background: "rgb(59 130 246)", color: "#fff"}}
                  contentStyle={{ background: "rgb(31 41 55)", color: "#fff" }}
                  contentArrowStyle={{
                  borderRight: "7px solid  rgb(107 114 128)"
                  }}
                  icon={icon}
                  key={id}
                >
                  <h3 className="vertical-timeline-element-title">{title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {location}
                  </h4>

                  {message &&
                    (message.length === 1 ? (
                      <p>{message}</p>
                    ) : (
                      <ul className="list-disc list-inside">
                        {message.map((list) => (
                          <li key={list}>{list}</li>
                        ))}
                      </ul>
                    ))}
                </VerticalTimelineElement>
              )
            )}
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
