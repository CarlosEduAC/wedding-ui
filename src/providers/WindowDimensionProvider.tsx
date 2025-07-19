import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { type ProvidersProps } from "@/models/Providers";
import { type WindowDimensionContextData } from "@/models/WindowDimension";

const WindowDimensionContext = createContext<WindowDimensionContextData>(
  {} as WindowDimensionContextData
);

const WindowDimensionProvider = ({ children }: ProvidersProps) => {
  const getWindowWidth = useCallback((): number => {
    const { innerWidth } = window;

    return innerWidth;
  }, []);

  const getWindowHeight = useCallback((): number => {
    const { innerHeight } = window;

    return innerHeight;
  }, []);

  const [windowWidth, setWindowWidth] = useState<number>(getWindowWidth());
  const [windowHeight, setWindowHeight] = useState<number>(getWindowHeight());

  useEffect(() => {
    function handleResize(): void {
      setWindowWidth(getWindowWidth());
      setWindowHeight(getWindowHeight());
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [getWindowHeight, getWindowWidth]);

  const contextValue = useMemo(
    () => ({ windowWidth, windowHeight }),
    [windowWidth, windowHeight]
  );

  return (
    <WindowDimensionContext.Provider value={contextValue}>
      {children}
    </WindowDimensionContext.Provider>
  );
};

export { WindowDimensionContext, WindowDimensionProvider };
