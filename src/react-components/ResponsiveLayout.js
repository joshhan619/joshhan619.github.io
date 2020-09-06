import { useWindowDimensions } from "./WindowDimensionsProvider.js";

const ResponsiveLayout = ({ breakpoint, renderMobile, renderDesktop }) => {
  const {width} = useWindowDimensions();
  return (width > breakpoint ? renderDesktop() : renderMobile())
}

export default ResponsiveLayout;
