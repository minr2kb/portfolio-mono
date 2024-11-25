// import '@/style/gradient-bg.scss';

function GradientBackground({
  blue = true,
  pink = true,
  skyblue = true,
  orange = true,
  yellow = true,
  purple = true,
}: {
  blue?: boolean;
  pink?: boolean;
  skyblue?: boolean;
  orange?: boolean;
  yellow?: boolean;
  purple?: boolean;
}) {
  return (
    <div className="gradient-bg">
      <div className="gradients-container">
        {/* Blue */}
        {blue && <div className="g1" />}
        {/* Pink */}
        {pink && <div className="g2" />}
        {/* Sky-blue */}
        {skyblue && <div className="g3" />}
        {/* Orange */}
        {orange && <div className="g4" />}
        {/* Yellow */}
        {yellow && <div className="g5" />}
        {/* purple */}
        {purple && <div className="g6" />}
      </div>
    </div>
  );
}

export default GradientBackground;
