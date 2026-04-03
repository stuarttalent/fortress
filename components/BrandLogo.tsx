export default function BrandLogo({
  className = ""
}: {
  className?: string;
}) {
  return (
    <span className={className} aria-label="Fotress Drone Solutions">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-sm"
      >
        <path
          d="M8.3 15.2c0-2.9 2.4-5.3 5.3-5.3h2.8c2.9 0 5.3 2.4 5.3 5.3 0 2.9-2.4 5.3-5.3 5.3H13.6c-2.9 0-5.3-2.4-5.3-5.3Z"
          stroke="#1E86FF"
          strokeWidth="1.6"
        />
        <path
          d="M7.8 10.5 4.7 9.1M7.8 19.9 4.7 21.3M22.2 10.5 25.3 9.1M22.2 19.9 25.3 21.3"
          stroke="#0F1115"
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M10.1 6.3 9.0 3.6M19.9 6.3 21.0 3.6"
          stroke="#1E86FF"
          strokeOpacity="0.9"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12.3 14.9h5.4"
          stroke="#0F1115"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M15 10.6v8.6"
          stroke="#0F1115"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeOpacity="0.55"
        />
      </svg>
    </span>
  );
}

