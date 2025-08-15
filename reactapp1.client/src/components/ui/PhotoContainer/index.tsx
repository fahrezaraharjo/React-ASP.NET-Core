import React from "react";

type PhotoContainerProps = {
    src: string;
    alt?: string;
    className?: string; 
    style?: React.CSSProperties; 
};

const PhotoContainer: React.FC<PhotoContainerProps> = ({
    src,
    alt = "Photo",
    className = "",
    style = {},
}) => {
    return (
        <div
            className={`flex items-center justify-center w-full h-full bg-gray-100 rounded-lg border border-dashed border-gray-300 overflow-hidden ${className}`}
            style={{ ...style }}
        >
            <img
                src={src}
                alt={alt}
                className="object-contain w-full h-full"
            />
        </div>
    );
};

export default PhotoContainer;
