import { Notification } from "@prisma/client";
import Image from "next/image";
import { formatDistanceToNow } from "date-fns";

const NotificationItem = ({
  notification,
  username,
}: {
  notification: Notification;
  username: string;
}) => {
  const isUnread = !notification.isRead;

  return (
    <div
      className={`w-full py-3 px-4 cursor-pointer rounded-lg transition ${
        isUnread ? "bg-blue-100 hover:bg-blue-200" : "bg-white"
      }`}
    >
      <div className="flex items-center mb-2">
        <h1 className="font-semibold text-base">Hi, {username}!</h1>
        <p className="text-text/50 text-sm ml-auto">
          {formatDistanceToNow(notification.createdAt, {
            addSuffix: true,
          })}
        </p>
      </div>
      <p className="text-[0.875rem]">{notification.body}</p>
    </div>
  );
};

export default NotificationItem;
