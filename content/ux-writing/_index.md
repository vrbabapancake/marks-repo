---
title: "Product Tours"
summary: "I create product tours for new software releases using UX writing best practices, and I also teach a dedicated UX writing course."
---
<style>
/* Live, embedded tour. The tour is always laid out at 1076x807 (the size
   it was built for) and scaled to fit the box, so it keeps the same 4:3
   ratio at any size without breaking its layout. The script below sets
   --tour-scale from the box's actual width. */
.tour-embed{
  --tour-scale: .65;
  width: min(700px, calc(100vw - 44px));   /* 700px = 65% of 1076 */
  aspect-ratio: 1076 / 807;
  margin: 14px 0 18px;
  border-radius: 14px;
  overflow: hidden;
  box-shadow: 0 0 0 1px var(--border), 0 12px 30px rgba(2,6,23,.12);
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

/* On phones the scaled tour would be too small to use,
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
@media (max-width: 600px){
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
<script>
  // Keep the tour scaled to its box so it holds the same 4:3 ratio at any width.
  (function(){
    document.querySelectorAll('.tour-embed').forEach(function(box){
      function fit(){ if (box.clientWidth) box.style.setProperty('--tour-scale', box.clientWidth / 1076); }
      fit();
      if (window.ResizeObserver) new ResizeObserver(fit).observe(box);
      else window.addEventListener('resize', fit);
    });
  })();
</script>

I built this interactive product tour to show where PagerDuty’s generative and agentic AI shows up across the incident workflow: during setup, while an incident is happening, and when measuring impact. It’s also packaged as a SCORM 1.2 module, so it can run inside an LMS.

👉 [Open the tour full screen →](pagerduty-ai-tour/)
