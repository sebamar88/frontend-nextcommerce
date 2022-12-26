import { FC } from "react";

type ArrowRightPaginationProps = {
    className?: string;
};

const ArrowRightPagination: FC<ArrowRightPaginationProps> = ({ className }) => (
    <svg
        width="18"
        height="14"
        viewBox="0 0 18 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.125 7.00008C17.125 6.91534 17.1081 6.83453 17.0776 6.76084C17.0626 6.72466 17.0441 6.6896 17.022 6.65619C16.9992 6.62153 16.9725 6.58865 16.942 6.55814L11.1086 0.724806C10.8645 0.480729 10.4688 0.480729 10.2247 0.724806C9.98065 0.968884 9.98065 1.36461 10.2247 1.60869L14.9911 6.37508L1.5 6.37508C1.15482 6.37508 0.875 6.6549 0.875 7.00008C0.875 7.34526 1.15482 7.62508 1.5 7.62508L14.9911 7.62508L10.2247 12.3915C9.98065 12.6356 9.98065 13.0313 10.2247 13.2754C10.4688 13.5194 10.8645 13.5194 11.1086 13.2754L16.9418 7.44215L16.9433 7.4407C17.0002 7.3834 17.0462 7.31512 17.0776 7.23932C17.1081 7.16563 17.125 7.08483 17.125 7.00008Z"
        />
    </svg>
);

export default ArrowRightPagination;
