import React from 'react';

import { TSvgProps } from './Icon.types';
import { EIconColor } from './Icon.enums';

const Icon: React.FC<TSvgProps> = ({ color = EIconColor.BLACK }) => {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1406_5704)">
        <path
          d="M12.6667 0H3.33333C2.4496 0.00105857 1.60237 0.352588 0.97748 0.97748C0.352588 1.60237 0.00105857 2.4496 0 3.33333L0 12.6667C0.00105857 13.5504 0.352588 14.3976 0.97748 15.0225C1.60237 15.6474 2.4496 15.9989 3.33333 16H12.6667C13.5504 15.9989 14.3976 15.6474 15.0225 15.0225C15.6474 14.3976 15.9989 13.5504 16 12.6667V3.33333C15.9989 2.4496 15.6474 1.60237 15.0225 0.97748C14.3976 0.352588 13.5504 0.00105857 12.6667 0V0ZM3.33333 1.33333H12.6667C13.1971 1.33333 13.7058 1.54405 14.0809 1.91912C14.456 2.29419 14.6667 2.8029 14.6667 3.33333V12.6667C14.6655 12.9637 14.5971 13.2565 14.4667 13.5233L8.358 7.41467C8.04846 7.10504 7.68096 6.85944 7.27648 6.69186C6.87201 6.52429 6.43848 6.43805 6.00067 6.43805C5.56285 6.43805 5.12933 6.52429 4.72485 6.69186C4.32038 6.85944 3.95287 7.10504 3.64333 7.41467L1.33333 9.724V3.33333C1.33333 2.8029 1.54405 2.29419 1.91912 1.91912C2.29419 1.54405 2.8029 1.33333 3.33333 1.33333ZM3.33333 14.6667C2.8029 14.6667 2.29419 14.456 1.91912 14.0809C1.54405 13.7058 1.33333 13.1971 1.33333 12.6667V11.6093L4.58533 8.35733C4.77107 8.17148 4.9916 8.02405 5.23434 7.92346C5.47707 7.82287 5.73725 7.77109 6 7.77109C6.26275 7.77109 6.52293 7.82287 6.76566 7.92346C7.0084 8.02405 7.22893 8.17148 7.41467 8.35733L13.5233 14.4667C13.2565 14.5971 12.9637 14.6655 12.6667 14.6667H3.33333Z"
          fill={color}
        />
        <path
          d="M10.6673 6.99998C11.1288 6.99998 11.5799 6.86313 11.9636 6.60674C12.3474 6.35035 12.6464 5.98594 12.823 5.55958C12.9996 5.13321 13.0458 4.66406 12.9558 4.21144C12.8658 3.75881 12.6436 3.34305 12.3172 3.01673C11.9909 2.69041 11.5752 2.46818 11.1225 2.37815C10.6699 2.28812 10.2008 2.33432 9.77439 2.51093C9.34803 2.68753 8.98361 2.9866 8.72722 3.37032C8.47083 3.75403 8.33398 4.20516 8.33398 4.66665C8.33398 5.28549 8.57982 5.87898 9.0174 6.31656C9.45499 6.75415 10.0485 6.99998 10.6673 6.99998ZM10.6673 3.66665C10.8651 3.66665 11.0584 3.7253 11.2229 3.83518C11.3873 3.94506 11.5155 4.10124 11.5912 4.28396C11.6669 4.46669 11.6867 4.66776 11.6481 4.86174C11.6095 5.05572 11.5143 5.2339 11.3744 5.37375C11.2346 5.51361 11.0564 5.60885 10.8624 5.64743C10.6684 5.68602 10.4674 5.66622 10.2846 5.59053C10.1019 5.51484 9.94573 5.38667 9.83585 5.22222C9.72597 5.05777 9.66732 4.86443 9.66732 4.66665C9.66732 4.40143 9.77267 4.14708 9.96021 3.95954C10.1477 3.772 10.4021 3.66665 10.6673 3.66665Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1406_5704">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Icon;
