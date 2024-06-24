// interface ChipProps {
//   label: string;
//   color?: "blue" | "red" | "yellow" | "white" | "black";
// }

// function Chip({ label, color }: ChipProps) {
//   const colorClassName =
//     color === "blue"
//       ? "bg-blue-500 border-blue-500 text-white"
//       : color === "yellow"
//       ? "bg-yellow-500 border-yellow-500 text-white"
//       : "";

//   return (
//     <div
//       className={`text-sm border rounded-full px-2.5 py-0.5 ${colorClassName}`}
//     >
//       {label}
//     </div>
//   );
// }

// export default Chip;

// import clsx from "clsx";

// interface ChipProps {
//   label: string;
//   color?: "blue" | "red" | "yellow" | "white" | "black";
//   outline?: boolean;
// }

// function Chip({ label, color, outline = false }: ChipProps) {
//   const colorClassName = clsx({
//     "bg-blue-500 border-blue-500 text-white": color === "blue" && !outline,
//     "border-blue-500 text-blue": color === "blue" && outline,
//     "bg-yellow-500 border-yellow-500 text-white":
//       color === "yellow" && !outline,
//     "border-yellow-500 text-yellow": color === "yellow" && outline,
//   });

//   return (
//     <div
//       className={`text-sm border rounded-full px-2.5 py-0.5 ${colorClassName}`}
//     >
//       {label}
//     </div>
//   );
// }

// export default Chip;

import { cva } from "class-variance-authority";

interface ChipProps {
  label: string;
  intent?: "primary" | "secondary" | "danger" | "warning" | "info" | "default";
}

const chipVariants = cva(
  [
    "text-sm",
    "border",
    "rounded-full",
    "px-2.5",
    "py-0.5",
    "hover:opacity-50",
    "transition-opacity",
  ],
  {
    variants: {
      intent: {
        primary: "bg-blue-500 border-blue-500 text-white",
        secondary: "bg-gray-500 border-gray-500 text-white",
        danger: "bg-red-500 border-red-500 text-white",
        warning: "bg-yellow-500 border-yellow-500 text-white",
        info: "bg-violet-500 border-violet-500 text-white",
        default: "bg-white border-black text-black",
      },
    },
    // compoundVariants: [],
    defaultVariants: {
      intent: "default",
    },
  }
);

function Chip({ label, intent }: ChipProps) {
  return <div className={`${chipVariants({ intent })}`}>{label}</div>;
}

export default Chip;
