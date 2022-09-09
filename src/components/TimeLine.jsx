import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import { AiFillStar } from 'react-icons/ai';
import { MdWork, MdSchool } from 'react-icons/md';
import { timeline } from '../utils/constants';


const TimeLine = () => {
//     <VerticalTimeline lineColor='rgb(6 182 212)'>
//     {/* Bergen */}
//     {timeline.map(({classNameV, date, icon, title, location, message, id })=>( 
//         <VerticalTimelineElement 
//             className={classNameV} 
//             date={date}
//             iconStyle={{background:"rgb(59 130 246)", color: "#fff" }}
//             contentStyle={{background:'rgb(31 41 55)', color: '#fff' }}
//             contentArrowStyle={{ borderRight: "7px solid  rgb(107 114 128)" }}
//             icon={icon}
//             key={id}
//         >
//             <h3 className='vertical-timeline-element-title'>{title}</h3>
//             <h4 className="vertical-timeline-element-subtitle">{location}</h4>
//             {message.length === 1 && <p>{message}</p>}
//             {message.length > 1 && 
//                 <ul className='list-disc'>
//                     <li>dsds</li>
//                     {message.forEach((list) =>{
//                         <li>{list}</li>
//                     })}
//                 </ul>
//             }     
            
//         </VerticalTimelineElement>
//     ))}
    
//     {/* Bergen */}

//     {/* MSKCC */}
//     <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="May 2018 - April 2020"
//         iconStyle={{ background: "rgb(59 130 246)", color: "#fff" }}
//         icon={<MdWork />}
//         contentStyle={{color: '#000'}}
//     >
//         <h3 className="vertical-timeline-element-title">
//         Assistant to Enterprise Storage Team - Memorial Sloan Kettering Cancer Center
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">
//         Lyndhurst, NJ
//         </h4>
//         <ul className='list-disc'>
//             <li>Creating reusable React component</li>
//             <li>Optimizing web pages for mobile views</li>
//             <li>Customize Material UI to follow brand styling guidelines</li>
//             <li>Follow tight deadlines and track progress using issue tracking systems</li>
//             <li>Debug, document, and fix client-facing bugs</li>
//         </ul>
//     </VerticalTimelineElement>
//     {/* MSKCC */}

//     {/* NJIT */}
//     <VerticalTimelineElement 
//         className='vertical-timeline-element--education' 
//         date='January 2019 - August 2021'
//         iconStyle={{backgroundColor:"rgb(59 130 246)", color: "#fff" }}
//         icon={<MdSchool />}
//         contentStyle={{color: '#000'}}
//     >
//         <h3 className='vertical-timeline-element-title'>New Jersey Institute of Technology</h3>
//         <h4 className="vertical-timeline-element-subtitle"> Newark, NJ</h4>
//         <p>Bachelor of Science in Computer Science</p>
//     </VerticalTimelineElement>
//     {/* NJIT */}

//     {/* ASW Cloud */}
//     <VerticalTimelineElement 
//         className='vertical-timeline-element--education' 
//         date='Octuber 2021'
//         iconStyle={{backgroundColor:"rgb(59 130 246)", color: "#fff" }}
//         icon={<AiFillStar />}
//         contentStyle={{ color: '#000' }}
//     >
//         <h3 className='vertical-timeline-element-title'>AWS Certified Cloud Practitioner</h3>
//     </VerticalTimelineElement>
//     {/* AWS Cloud */}

//     {/* Shurable */}
//     <VerticalTimelineElement
//         className="vertical-timeline-element--work"
//         date="May 2021 - Current"
//         iconStyle={{ background: "rgb(59 130 246)", color: "#fff" }}
//         contentStyle={{ color: '#000' }}
//         icon={<MdWork />}
//     >
//         <h3 className="vertical-timeline-element-title">
//         Jr. Frontend Website Development - Shurable Inc
//         </h3>
//         <h4 className="vertical-timeline-element-subtitle">
//         Saratoga Springs, NY
//         </h4>
//         <ul className='list-disc'>
//             <li>Creating reusable React component</li>
//             <li>Optimizing web pages for mobile views</li>
//             <li>Customize Material UI to follow brand styling guidelines</li>
//             <li>Follow tight deadlines and track progress using issue tracking systems</li>
//             <li>Debug, document, and fix client-facing bugs</li>
//         </ul>
//     </VerticalTimelineElement>
//     {/* Shurable */}
// </VerticalTimeline>    
  return (
    <div 
        name='timeline' 
        className="bg-gradient-to-b from-gray-800 to-black text-white"
    >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                TimeLine
            </p>
        </div>
        
    </div>
  </div>
  )
}

export default TimeLine

