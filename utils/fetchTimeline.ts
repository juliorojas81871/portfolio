import { Timeline } from "../typings";

export const fetchTimeline = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getTimeline`
  );

  const data = await res.json();
  const timeline: Timeline[] = data.timeline;

  return timeline;
};
