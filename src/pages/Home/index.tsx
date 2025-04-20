import { ToggleButton } from "@/components/ui/ToggleButton";
import { HeartSwitch } from "@/components/ui/HeartSwitch";
import { Header } from "@/components/layout/Header";
import { useTheme } from "@/hooks/useTheme";
function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <main>
      <Header />

      <HeartSwitch
        id="theme-heart"
        isActive={theme === "light"}
        onToggle={toggleTheme}
      />

      <ToggleButton
        id="theme-toggle"
        isActive={theme === "light"}
        onToggle={toggleTheme}
      />
    </main>
  );
}

export default Home;
