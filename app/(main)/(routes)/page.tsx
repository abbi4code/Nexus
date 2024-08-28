
import { ModeToggle } from "@/components/theme-toggle";
import { UserButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <div className="bg-red-400">
      <UserButton afterSwitchSessionUrl="/" />
      <ModeToggle/>
      hi there
    </div>
  );
}
