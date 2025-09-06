// Timeline
// import { timelineSteps } from "/services/js/timelineData";
// import { fillTimeline } from "/services/js/timelineService.js";

import { timelineSteps } from "../js/timelineData.js";
import { fillTimeline } from "../js/timelineService.js";
const timeline = document.getElementById("timeline");

fillTimeline(timelineSteps, timeline);
