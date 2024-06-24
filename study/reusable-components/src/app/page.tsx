import Chip from "@/components/Chip";

export default function Home() {
  return (
    <div className="h-screen grid place-items-center">
      <Chip label="chipchip" intent="primary" />
      <Chip label="chipchip!!" intent="secondary" />
      <Chip label="chipchip!!" intent="danger" />
      <Chip label="chipchip!!" intent="warning" />
      <Chip label="chipchip!!" intent="info" />
      <Chip label="chipchip!!" />
    </div>
  );
}
