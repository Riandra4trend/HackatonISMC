import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const options = [
  {
    value: "CANCELLED",
    color: "Red",
    label: "Cancelled",
  },
  {
    value: "ON_PROGRESS",
    color: "#EF9500",
    label: "On Progress",
  },
  {
    value: "FINISHED",
    color: "#70CC40",
    label: "Finished",
  },
];

export default function Select({
  status,
  transactionId,
}: {
  status: string;
  transactionId: string;
}) {
  const [value, setValue] = useState(status);
  const router = useRouter();

  useEffect(() => {
    setValue(status); // Update the internal state when the status prop changes
  }, [status]);

  const colorOption = (val: string) => {
    if (val === "CANCELLED") {
      return "Red";
    } else if (val === "ON_PROGRESS") {
      return "#EF9500";
    } else if (val === "FINISHED") {
      return "#70CC40";
    }
  };

  const handleSelectChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = e.target.value;

    // send PATCH request to /api/v1/transactions/:transactionId
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL +
          `/api/v1/transactions/${transactionId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: selectedValue,
          }),
        }
      );

      // send notification to user
      const notificationRes = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL +
          `/api/v1/notifications/transactions/${transactionId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Pesananmu dengan ID pesanan ${transactionId}, sudah berubah statusnya menjadi ${
              options.find((option) => option.value === selectedValue)?.label
            }`,
            userId: transactionId,
          }),
        }
      );

      if (res?.ok && notificationRes?.ok) {
        toast.success("Success updating transaction status");
        router.refresh();
      } else {
        toast.error("Failed updating transaction status");
      }
    } catch (error) {
      console.error(error);
    }

    setValue(selectedValue);
  };

  return (
    <select
      className="px-4 py-2 rounded-full text-black text-xs font-normal font-Inter hover:bg-gray-500"
      value={value}
      onChange={handleSelectChange}
      style={{
        backgroundColor: colorOption(value),
      }}
    >
      {options.map((option) => (
        <option
          key={option.value}
          value={option.value}
          style={{
            backgroundColor: option.color,
          }}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
