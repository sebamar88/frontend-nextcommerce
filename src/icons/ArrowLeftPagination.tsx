import { FC } from "react";

type ArrowLeftPaginationProps = {
    className?: string;
};

const ArrowLeftPagination: FC<ArrowLeftPaginationProps> = ({ className }) => (
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
            d="M7.77527 0.724806C8.01935 0.968884 8.01935 1.36461 7.77527 1.60869L3.00888 6.37508H16.5C16.8452 6.37508 17.125 6.6549 17.125 7.00008C17.125 7.34526 16.8452 7.62508 16.5 7.62508H3.00888L7.77527 12.3915C8.01935 12.6356 8.01935 13.0313 7.77527 13.2754C7.5312 13.5194 7.13547 13.5194 6.89139 13.2754L1.05818 7.44215C1.05814 7.44211 1.0581 7.44206 1.05806 7.44202C1.05762 7.44158 1.05718 7.44114 1.05673 7.4407C0.997469 7.38108 0.952699 7.31249 0.922424 7.23932C0.891866 7.16563 0.875 7.08483 0.875 7.00008C0.875 6.91534 0.891866 6.83453 0.922424 6.76084C0.952924 6.68713 0.998135 6.61806 1.05806 6.55814L6.89139 0.724806C7.13547 0.480729 7.5312 0.480729 7.77527 0.724806Z"
        />
    </svg>
);
export default ArrowLeftPagination;
