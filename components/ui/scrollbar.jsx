import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/css/OverlayScrollbars.css";

export const Scrollbar = ({ children, className, options, style }) => {
  return (
    <OverlayScrollbarsComponent
      options={{
        className: `${className} os-host-flexbox`,
        // scrollbars: {
        //   autoHide: 'leave',
        // },
        ...options,
      }}
      style={style}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
};
