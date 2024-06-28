import React from "react";

export const CopyIcon = ({ className = "", fill = "#A8A8A8", onClick = () => { } }) => {
  return (
    <svg onClick={onClick} className={`${className}`} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip0_1405_8594)">
        <path d="M13.3332 13.3332V15.6665C13.3332 16.5999 13.3332 17.0666 13.1515 17.4232C12.9917 17.7368 12.7368 17.9917 12.4232 18.1515C12.0666 18.3332 11.5999 18.3332 10.6665 18.3332H4.33317C3.39975 18.3332 2.93304 18.3332 2.57652 18.1515C2.26292 17.9917 2.00795 17.7368 1.84816 17.4232C1.6665 17.0666 1.6665 16.5999 1.6665 15.6665V9.33317C1.6665 8.39975 1.6665 7.93304 1.84816 7.57652C2.00795 7.26292 2.26292 7.00795 2.57652 6.84816C2.93304 6.6665 3.39975 6.6665 4.33317 6.6665H6.6665M9.33317 13.3332H15.6665C16.5999 13.3332 17.0666 13.3332 17.4232 13.1515C17.7368 12.9917 17.9917 12.7368 18.1515 12.4232C18.3332 12.0666 18.3332 11.5999 18.3332 10.6665V4.33317C18.3332 3.39975 18.3332 2.93304 18.1515 2.57652C17.9917 2.26292 17.7368 2.00795 17.4232 1.84816C17.0666 1.6665 16.5999 1.6665 15.6665 1.6665H9.33317C8.39975 1.6665 7.93304 1.6665 7.57652 1.84816C7.26292 2.00795 7.00795 2.26292 6.84816 2.57652C6.6665 2.93304 6.6665 3.39975 6.6665 4.33317V10.6665C6.6665 11.5999 6.6665 12.0666 6.84816 12.4232C7.00795 12.7368 7.26292 12.9917 7.57652 13.1515C7.93304 13.3332 8.39975 13.3332 9.33317 13.3332Z" stroke="#A8A8A8" stroke-width="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1405_8594">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};