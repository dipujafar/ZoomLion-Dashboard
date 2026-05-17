export const FilterIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M10 20C9.99992 20.1858 10.0516 20.368 10.1493 20.5261C10.247 20.6842 10.3868 20.8119 10.553 20.895L12.553 21.895C12.7055 21.9712 12.8749 22.0072 13.0452 21.9994C13.2156 21.9917 13.3811 21.9406 13.526 21.8509C13.671 21.7613 13.7907 21.636 13.8736 21.4871C13.9566 21.3381 14.0001 21.1705 14 21V14C14.0002 13.5044 14.1845 13.0265 14.517 12.659L21.74 4.67C21.8695 4.52656 21.9546 4.34868 21.9851 4.15788C22.0156 3.96708 21.9902 3.77153 21.9119 3.59487C21.8336 3.41822 21.7058 3.26802 21.544 3.16245C21.3822 3.05688 21.1932 3.00046 21 3H3.00001C2.80661 3.00007 2.61739 3.05622 2.45526 3.16164C2.29312 3.26706 2.16503 3.41723 2.08651 3.59396C2.00799 3.7707 1.98239 3.96641 2.01283 4.15739C2.04327 4.34837 2.12843 4.52643 2.25801 4.67L9.48301 12.659C9.81554 13.0265 9.99978 13.5044 10 14V20Z"
        stroke="#155DFC"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const ClockIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      className={className}
    >
      <path
        d="M11 21C16.5228 21 21 16.5228 21 11C21 5.47715 16.5228 1 11 1C5.47715 1 1 5.47715 1 11C1 16.5228 5.47715 21 11 21Z"
        stroke="#D08700"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M20 6L9 17L4 12"
        stroke="#00A63E"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const CancelIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M18 6L6 18"
        stroke="#E7000B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 6L18 18"
        stroke="#E7000B"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};


export const IncreaseIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1458_10224)">
        <path d="M10.6666 4.66675H14.6666V8.66675" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.6667 4.66675L9.00004 10.3334L5.66671 7.00008L1.33337 11.3334" stroke="#00A63E" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1458_10224">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DecreaseIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <g clip-path="url(#clip0_1510_9096)">
        <path d="M10.6666 11.3333H14.6666V7.33325" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
        <path d="M14.6667 11.3334L9.00004 5.66675L5.66671 9.00008L1.33337 4.66675" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
      </g>
      <defs>
        <clipPath id="clip0_1510_9096">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};


export const AddFileIcon = ({ className }: { className?: string }) => {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="17" height="20" viewBox="0 0 17 20" fill="none">
      <path d="M9.75293 0C10.0101 0.000247213 10.208 0.210125 10.208 0.459961V3.67969C10.208 5.50962 11.7029 7.00942 13.5146 7.01953C14.2669 7.01953 14.861 7.03027 15.3164 7.03027C15.6233 7.03027 16.1289 7.01953 16.5547 7.01953C16.802 7.01966 16.9999 7.21993 17 7.46973V15.5098C17 17.9896 15.0101 19.9998 12.5449 20H4.67285C2.0988 19.9998 2.1043e-05 17.8899 0 15.29V4.50977C0.000126126 2.02987 2.00055 0 4.46582 0H9.75293ZM8.31641 7.76953C7.91073 7.76976 7.57435 8.10002 7.57422 8.50977V10.2402H5.87109C5.46524 10.2403 5.12891 10.5703 5.12891 10.9902C5.12903 11.4001 5.46532 11.7304 5.87109 11.7305H7.57422V13.46C7.57422 13.8698 7.91066 14.2 8.31641 14.2002C8.72235 14.2002 9.0498 13.87 9.0498 13.46V11.7305H10.7627C11.1684 11.7303 11.5048 11.4 11.5049 10.9902C11.5049 10.5703 11.1685 10.2404 10.7627 10.2402H9.0498V8.50977C9.04968 8.09987 8.72227 7.76953 8.31641 7.76953ZM11.6494 0.90625C11.6494 0.47525 12.1678 0.261266 12.4639 0.572266C13.5341 1.69617 15.4037 3.66079 16.4492 4.75879C16.7382 5.0617 16.527 5.56512 16.1104 5.56641C15.2965 5.56941 14.3366 5.56657 13.6465 5.55957C12.5515 5.55949 11.6494 4.64794 11.6494 3.54199V0.90625Z" fill="#1A0D83" />
    </svg>
  )
}
