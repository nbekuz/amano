import { useState, useRef, useEffect } from "react";

const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(
    value || options[0]?.value || options[0]
  );
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (value !== undefined) {
      setSelectedValue(value);
    }
  }, [value]);

  const handleSelect = (option) => {
    const val = typeof option === "string" ? option : option.value;
    setSelectedValue(val);
    setIsOpen(false);
    if (onChange) {
      onChange(val);
    }
  };

  const displayValue =
    typeof selectedValue === "string"
      ? selectedValue
      : options.find(
          (opt) => (typeof opt === "string" ? opt : opt.value) === selectedValue
        )?.label || selectedValue;

  const displayOptions = options.map((opt) =>
    typeof opt === "string" ? { value: opt, label: opt } : opt
  );

  return (
    <div className={`relative isolate z-10  ${className}`} ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="btn-glass w-full rounded-lg px-4 py-2"
      >
        <span className="btn-glass-bg" />
        <span className="btn-glass-border" />
        <span className="dropdown-lg-content flex items-center justify-between w-full">
          <span className="flex pr-2 text-sm">{displayValue}</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 12 12"
            fill="none"
            className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
          >
            <path
              d="M3 4.5L6 7.5L9 4.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {isOpen && (
        <div className="dropdown-lg-menu absolute top-full left-0 right-0 mt-2 rounded-lg overflow-hidden z-10">
          <span className="dropdown-lg-menu-effect"></span>
          <span className="dropdown-lg-menu-tint"></span>
          <span className="dropdown-lg-menu-shine"></span>
          <div className="dropdown-lg-menu-content relative z-10 py-1">
            {displayOptions.map((option, index) => (
              <button
                key={index}
                type="button"
                onClick={() => handleSelect(option.value)}
                className={`dropdown-lg-menu-item w-full px-4 py-2 text-left text-sm transition-all flex items-center justify-between text-white ${
                  selectedValue === option.value
                    ? "dropdown-lg-menu-item-active"
                    : "hover:bg-white/5"
                }`}
              >
                <span>{option.label}</span>
                {selectedValue === option.value && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="shrink-0"
                  >
                    <path
                      d="M13.3333 4L6 11.3333L2.66667 8"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
