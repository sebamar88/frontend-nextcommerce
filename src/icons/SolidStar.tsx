import { FC } from "react";

export interface SolidStarProps {
    type: "full" | "half" | "empty";
    fullColor?: string;
    emptyColor?: string;
    className?: string;
    ariaLabel?: string;
}

const SolidStar: FC<SolidStarProps> = ({
    type,
    fullColor = "#FFC226",
    emptyColor = "#CACCD9",
    className,
    ariaLabel,
}) => {
    const isHalf = type === "half";
    const isFull = type === "full";
    const fill = isFull ? fullColor : emptyColor;
    return (
        <svg
            viewBox="0 0 20 20"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label={ariaLabel || "star"}
        >
            <defs>
                <linearGradient id="gradient">
                    <stop offset="50%" stopColor={fullColor} />
                    <stop offset="50%" stopColor="#CACCD9" />
                </linearGradient>
            </defs>
            <path
                d="M9.04897 2.92708C9.34897 2.00608 10.652 2.00608 10.951 2.92708L12.021 6.21908C12.0863 6.41957 12.2134 6.59426 12.384 6.71818C12.5547 6.84211 12.7601 6.90892 12.971 6.90908H16.433C17.402 6.90908 17.804 8.14908 17.021 8.71908L14.221 10.7531C14.05 10.8771 13.9227 11.0521 13.8573 11.2529C13.7919 11.4538 13.7918 11.6702 13.857 11.8711L14.927 15.1631C15.227 16.0841 14.172 16.8511 13.387 16.2811L10.587 14.2471C10.4162 14.1231 10.2105 14.0563 9.99947 14.0563C9.78842 14.0563 9.58277 14.1231 9.41197 14.2471L6.61197 16.2811C5.82797 16.8511 4.77397 16.0841 5.07297 15.1631L6.14297 11.8711C6.20815 11.6702 6.20803 11.4538 6.14264 11.2529C6.07725 11.0521 5.94994 10.8771 5.77897 10.7531L2.97997 8.72008C2.19697 8.15008 2.59997 6.91008 3.56797 6.91008H7.02897C7.24002 6.91013 7.44568 6.84342 7.6165 6.71948C7.78732 6.59554 7.91455 6.42073 7.97997 6.22008L9.04997 2.92808L9.04897 2.92708Z"
                fill={isHalf ? "url(#gradient)" : fill}
            />
        </svg>
    );
};

export default SolidStar;
