// PaginationNumber.tsx
export interface PaginationNumberProps {
    pageNumber?: number | string;
    isDots?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    onClick?: () => void;
  }
  
  export default function PaginationNumber({
    pageNumber,
    isDots = false,
    isActive = false,
    isDisabled = false,
    onClick,
  }: PaginationNumberProps) {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={`flex w-[9%] max-w-[2rem] aspect-square text-base md:text-lg ${
          isActive ? "bg-gradient-to-r from-[#c2c2c2] from-[-15%] to-[#c6cbc6] shadow-sm scale-110" : ""
        } justify-center items-center font-bold ${
          !isDots ? "rounded-md " : ""
        } ${
          !isActive && !isDots ? "hover:text-black ease-out duration-200 text-gray-500" : ""
        }`}
      >
        {isDots ? "..." : pageNumber}
      </button>
    );
  }
  