---
title: "Product Tours"
summary: "I create product tours for new software releases using UX writing best practices, and I also teach a dedicated UX writing course."
---
<style>
/* Live, embedded tours. Wider than the text column so the tour UI has room. */
.tour-embed{
  width: min(1076px, calc(100vw - 44px));
  aspect-ratio: 4 / 3;
  margin: 14px 0 18px;
  border-radius: 16px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 12px 30px rgba(2,6,23,.12);
  background: var(--card);
}
.tour-embed iframe{
  width: 100%;
  height: 100%;
  border: 0;
  display: block;
}

/* On phones the tours are too cramped to use inline,
   so show the preview image as a link instead. */
.tour-mobile{ display: none; }
.tour-mobile img{
  width: 100%;
  height: auto;
  display: block;
  margin: 14px 0 18px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(2,6,23,.12);
}
@media (max-width: 760px){
  .tour-embed{ display: none; }
  .tour-mobile{ display: block; }
}
</style>

I create product tours for new software releases using UX writing best practices.

#### PagerDuty AI
<div class="tour-embed">
<iframe src="pagerduty-ai-tour/" title="PagerDuty AI interactive product tour" loading="lazy" allow="fullscreen" allowfullscreen></iframe>
</div>
<a class="tour-mobile" href="pagerduty-ai-tour/"><img src="pagerduty-ai-tour-preview.png" alt="PagerDuty AI product tour preview" /></a>

I built this interactive product tour to show where PagerDuty’s generative and agentic AI shows up across the incident workflow: during setup, while an incident is happening, and when measuring impact. It’s also packaged as a SCORM 1.2 module, so it can run inside an LMS.

👉 [Open the tour full screen →](pagerduty-ai-tour/)
