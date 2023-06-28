import { useState } from "react";

export const useModalPopup = (defaultValue = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  return [isOpen, openPopup, closePopup];
};
