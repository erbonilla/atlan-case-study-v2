/* global React */
// Shared figure embed — iframe stage with auto-sized height

function Figure({ num, title, src, height = 920, minHeight = 720 }) {
  const ref = React.useRef(null);
  const [actualHeight, setHeight] = React.useState(height);

  React.useEffect(() => {
    // Try to auto-fit on load. If cross-origin would block, fallback to provided height.
    const iframe = ref.current;
    if (!iframe) return;
    const tryFit = () => {
      try {
        const doc = iframe.contentDocument;
        if (doc && doc.body) {
          const h = Math.max(doc.documentElement.scrollHeight, doc.body.scrollHeight);
          if (h && h > 200) setHeight(h);
        }
      } catch (e) { /* cross-origin */ }
    };
    iframe.addEventListener('load', tryFit);
    return () => iframe.removeEventListener('load', tryFit);
  }, []);

  return (
    <figure className="figure" data-comment-anchor={`fig-${num}`}>
      <div className="figure-stage">
        <iframe
          ref={ref}
          src={src}
          loading="lazy"
          style={{ height: actualHeight, minHeight }}
          title={title}
        />
      </div>
      <figcaption className="figure-caption">
        <span className="figure-num">Fig. {num}</span>
        <span className="figure-title">{title}</span>
      </figcaption>
    </figure>
  );
}

window.Figure = Figure;
