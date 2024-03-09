import React from "react";

import SwitchProvider from "@dhiwise/react-switch";
import PropTypes from "prop-types";

const variants = {
  swtFillGreen600: {
    offColor: "#359766",
    onColor: "#359766",
    offHandleColor: "#ffffff",
    onHandleColor: "#ffffff",
    boxShadow: "0px 2px  5px 0px #00000019",
  },
  swtFillGray300: {
    offColor: "#e3e4e8",
    onColor: "#359766",
    offHandleColor: "#ffffff",
    onHandleColor: "#ffffff",
    boxShadow: "0px 2px  5px 0px #00000019",
  },
};
const sizes = {
  xs: {
    width: 60,
    height: 30,
  },
};

const Switch = ({
  value = false,
  className,
  checkedIcon = <></>,
  uncheckedIcon = <></>,
  onChange,
  variant = "swtFillGray300",
  size = "xs",
}) => {
  const [selected, setSelected] = React.useState(value);
  const handleChange = (val) => {
    setSelected(val);
    onChange?.(val);
  };
  return (
    <div className={className}>
      <SwitchProvider
        checked={selected}
        onChange={handleChange}
        {...variants[variant]}
        {...sizes[size]}
        checkedIcon={checkedIcon}
        uncheckedIcon={uncheckedIcon}
      />
    </div>
  );
};

Switch.propTypes = {
  value: PropTypes.bool,
  className: PropTypes.string,
  checkedIcon: PropTypes.node,
  uncheckedIcon: PropTypes.node,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["xs"]),
  variant: PropTypes.oneOf(["swtFillGreen600", "swtFillGray300"]),
};

export { Switch };
