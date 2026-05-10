import { RefObject, useEffect } from "react";

type UseCloseOnActionProps = {
  ref: RefObject<HTMLElement | null>;

  onClose: () => void;

  closeOnOutsideClick?: boolean;
};

export default function useCloseOnAction({
  ref,
  onClose,
  closeOnOutsideClick = true,
}: UseCloseOnActionProps) {
  useEffect(() => {
   
    // close on ESC
    function handleEscape(
      event: KeyboardEvent
    ) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    // close on outside click
    function handleClickOutside(
      event: MouseEvent
    ) {
      if (!closeOnOutsideClick) return;

      if (
        ref.current &&
        !ref.current.contains(
          event.target as Node
        )
      ) {
        onClose();
      }
    }

    document.addEventListener(
      "keydown",
      handleEscape
    );

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape
      );

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [
    ref,
    onClose,
    closeOnOutsideClick,
  ]);
}