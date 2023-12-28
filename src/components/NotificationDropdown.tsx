import { Notification as NotificationModel } from "@prisma/client";
import Notification from "./Notification";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const NotificationDropdown = ({
  isOpen,
  notifications,
  username,
  userId,
}: {
  isOpen: boolean;
  notifications: NotificationModel[];
  username: string;
  userId: string;
}) => {
  const handleReadAllNotification = async () => {
    // send API PATCH request to update all notifications to /api/v1/notifications
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_WEB_URL + `/api/v1/notifications/${userId}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (res?.ok) {
        toast.success("All notifications have been marked as read!");
        window.location.reload();
      } else {
        toast.error("Failed to mark all notifications as read!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to update notifications!");
    }
  };

  return (
    <div
      className={`w-96 py-4 px-1 absolute right-0 top-[210%] bg-gray-50 shadow-xl rounded-xl overflow-hidden transition origin-top text-left ${
        isOpen ? "scale-y-100" : "scale-y-0"
      }`}
    >
      <div className="flex justify-between px-4">
        <h1 className="font-semibold text-base">Notification</h1>
        <p
          className="text-sm text-secondary underline hover:scale-[105%] transition"
          onClick={handleReadAllNotification}
        >
          Mark as Read
        </p>
      </div>
      <div className="flex flex-col mt-2 overflow-y-auto max-h-[18rem]">
        {notifications.map((item, index) => (
          <Notification key={index} notification={item} username={username} />
        ))}
      </div>
    </div>
  );
};

export default NotificationDropdown;
