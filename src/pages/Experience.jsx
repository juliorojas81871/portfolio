import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
import StarIcon from '@material-ui/icons/Star';

function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        {/* Bergen */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='September 2015 - December 2018'
          iconStyle={{backgroundColor:"#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>Bergen Community College</h3>
          <h4 className="vertical-timeline-element-subtitle"> Paramus, NJ</h4>
          <p>Associate in Science, Major in Computer Science</p>
        </VerticalTimelineElement>
        {/* Bergen */}

        {/* MSKCC */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2018 - April 2020"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Assistant to Enterprise Storage Team - Memorial Sloan Kettering Cancer Center
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Lyndhurst, NJ
          </h4>
            <ul>
              <li>Creating reusable React component</li>
              <li>Optimizing web pages for mobile views</li>
              <li>Customize Material UI to follow brand styling guidelines</li>
              <li>Follow tight deadlines and track progress using issue tracking systems</li>
              <li>Debug, document, and fix client-facing bugs</li>
            </ul>
        </VerticalTimelineElement>
        {/* MSKCC */}

        {/* NJIT */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='January 2019 - August 2021'
          iconStyle={{backgroundColor:"#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>New Jersey Institute of Technology</h3>
          <h4 className="vertical-timeline-element-subtitle"> Newark, NJ</h4>
          <p>Bachelor of Science in Computer Science</p>
        </VerticalTimelineElement>
        {/* NJIT */}

        {/* ASW Cloud */}
        <VerticalTimelineElement 
          className='vertical-timeline-element--education' 
          date='Octuber 2021'
          iconStyle={{backgroundColor:"#3e497a", color: "#e9d35b" }}
          icon={<StarIcon />}
        >
          <h3 className='vertical-timeline-element-title'>AWS Certified Cloud Practitioner</h3>
          
        </VerticalTimelineElement>
        {/* AWS Cloud */}

        {/* Shurable */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="May 2021 - Current"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Jr. Frontend Website Development - Shurable Inc
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Saratoga Springs, NY
          </h4>
            <ul>
              <li>Creating reusable React component</li>
              <li>Optimizing web pages for mobile views</li>
              <li>Customize Material UI to follow brand styling guidelines</li>
              <li>Follow tight deadlines and track progress using issue tracking systems</li>
              <li>Debug, document, and fix client-facing bugs</li>
            </ul>
        </VerticalTimelineElement>
        {/* Shurable */}
      </VerticalTimeline>
      
    </div>
  );
}

export default Experience