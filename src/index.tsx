import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Providers } from "./providers";
import GlobalStyles from "./styles";
import Routes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <GlobalStyles />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes />
      </BrowserRouter>
    </Providers>
  </StrictMode>
);
