"use client";
const Loading = () => {
  // Array of colors for the spinners
  const colors = [
    "text-primary",
    "text-secondary",
    "text-success",
    "text-danger",
    "text-warning",
    "text-info",
    "text-neutral-50",
    "text-[#332d2d]",
  ];

  return (
    <div className="flex justify-center items-center space-x-4">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`inline-block h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] ${color} opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]`}
          role="status"
          aria-label="Loading"
        >
          <span className="sr-only">Loading...</span>
        </div>
      ))}
    </div>
  );
};

export default Loading;
