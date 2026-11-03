---
title: "Product Tours"
summary: "I create product tours for new software releases using UX writing best practices, and I also teach a dedicated UX writing course."
---
<style>
/* Live, embedded tour. The tour is laid out at 1076x807 (the size it was
   built for) and scaled down to 75%, so it takes less room without
   breaking its layout. */
.tour-embed{
  --tour-scale: .75;
  width: calc(1076px * var(--tour-scale));
  height: calc(807px * var(--tour-scale));
  margin: 14px 0 18px;
  border-radius: 14px;
  overflow: hidden;
  border: 1px solid var(--border);
  box-shadow: 0 12px 30px rgba(2,6,23,.12);
  background: var(--card);
}
.tour-embed iframe{
  width: 1076px;
  max-width: none;   /* the site's iframe{max-width:100%} would squeeze the layout */
  height: 807px;
  border: 0;
  display: block;
  transform: scale(var(--tour-scale));
  transform-origin: 0 0;
}

/* On narrower screens the scaled tour would be too small to use,
   so show the preview image as a link instead. */
.tour-mobile{ display: none; }
.tour-mobile img{
  width: 100%;
  max-width: 720px;
  height: auto;
  display: block;
  margin: 14px 0 18px;
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(2,6,23,.12);
}
@media (max-width: 860px){
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
