import { Meteors } from "@/components/ui";

export default function SlopedShape() {
  const height = 480;
  const width = 500;
  const triangleHeight = 270;

  return (
    <div
      className="absolute overflow-hidden -left-10 top-10 -z-10"
      style={{ clipPath: "url(#angled-mask)" }}
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        className="relative overflow-hidden"
      >
        <defs>
          <clipPath id="angled-mask" clipPathUnits="userSpaceOnUse">
            <polygon
              points={`0,${triangleHeight} ${width},${triangleHeight} ${width},0`}
            />
            <rect x="0" y={triangleHeight} width={width} height={height} />
          </clipPath>
        </defs>
      </svg>
      <div className="size-full">
        <Meteors number={10} />
      </div>
    </div>
  );
}
