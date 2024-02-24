export const ThreeDots = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="0.44em"
      height="1em"
      viewBox="0 0 7 16"
      className="text-gray-600"
      {...props}
    >
      <circle cx={3.5} cy={3.5} r={1.5} fill="currentColor"></circle>
      <circle cx={3.5} cy={8.5} r={1.5} fill="currentColor"></circle>
      <circle cx={3.5} cy={13.5} r={1.5} fill="currentColor"></circle>
    </svg>
  );
};
