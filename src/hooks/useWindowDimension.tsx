import { useContext } from "react";
import { WindowDimensionContext } from "@/providers/WindowDimensionProvider";
import { type WindowDimensionContextData } from "@/models/WindowDimension";

function useWindow(): WindowDimensionContextData {
  const context = useContext(WindowDimensionContext);

  if (!context) {
    throw new Error("useWindow must be used within a WindowDimensionProvider");
  }

  return context;
}

export { useWindow };
