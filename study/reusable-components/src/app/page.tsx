import Chip from "@/components/Chip";

export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-y-4">
      <Chip label="Primary" intent="primary" />
      <Chip label="Secondary" intent="secondary" />
      <Chip label="Danger" intent="danger" />
      <Chip label="Warning" intent="warning" />
      <Chip label="Info" intent="info" />
      <Chip label="Default" />
    </div>
  );
}
