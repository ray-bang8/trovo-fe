export const PlusIconSvg = ({ fillColor = "" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="24"
      height="24"
    >
      <line x1="12" y1="5" x2="12" y2="19" stroke={fillColor} strokeWidth="2" />
      <line x1="5" y1="12" x2="19" y2="12" stroke={fillColor} strokeWidth="2" />
    </svg>
  );
};