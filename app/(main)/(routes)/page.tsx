
import { UserButton } from "@clerk/nextjs";



export default function Home() {
  return (
    <div className="bg-black text-white">
      <UserButton afterSwitchSessionUrl="/" />
      hi there
    </div>
  );
}
