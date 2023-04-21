import React from "react";
import { AnimatedLoading } from "./style";

interface SkeletonLoadingProps {
  height: number;
  width: number;
}
const SkeletonLoading = ({ height, width }: SkeletonLoadingProps) => {
  return (
    <AnimatedLoading
      className="skeleton-loading"
      height={height}
      width={width}
    />
  );
};

export default SkeletonLoading;
