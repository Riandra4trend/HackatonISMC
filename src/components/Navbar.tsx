"use client";
import React, { useEffect } from "react";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NotificationDropdown from "./NotificationDropdown";
import { Session } from "next-auth";
import { Notification } from "@prisma/client";

const Navbar = ({
  user,
  notifications,
}: {
  user: Session["user"];
  notifications: Notification[];
}) => {
  const pathname = usePathname();
  const [isBurgerOpen, setIsBurgerOpen] = React.useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = React.useState(false);
  const [notificationsState, setNotificationsState] =
    React.useState(notifications);
  const hasUnreadNotifications = notifications.some(
    (notification) => !notification.isRead
  );

  // Add heartbeat effect when there are unread notifications
  useEffect(() => {
    const icon = document.getElementById("notificationIcon");

    if (icon && hasUnreadNotifications) {
      icon.classList.add("heartbeat");
    } else {
      icon?.classList.remove("heartbeat");
    }
  }, [hasUnreadNotifications]);

  // Change the first word of the pathname to uppercase and remove the "/"
  const formattedPathName = () => {
    const formattedPathName = pathname
      .split("/")[1]
      .replace(/^\w/, (c) => c.toUpperCase());
    return formattedPathName;
  };

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  const toggleNotification = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  return (
    <div className="w-full z-50 bg-[#EDF2F7] relative top-0 left-0 transition">
      <style>
        {`
          @keyframes heartbeat {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.2);
            }
            100% {
              transform: scale(1);
            }
          }

          .heartbeat {
            animation: heartbeat 1s infinite;
          }
        `}
      </style>

      <div className="px-12 py-4">
        <div className="flex items-center justify-between">
          <p className=" text-4xl font-bold text-gray-800 lg:pl-[19rem]">
            {formattedPathName() === "Dashboard"
              ? "Clothing List"
              : formattedPathName() === "Account"
              ? "Account Page"
              : formattedPathName()}
          </p>
          <div className="icon-container hidden lg:flex items-center gap-4">
            <h3 className="text-black">
              Hi, <strong>{user?.username}</strong>!
            </h3>
            <div>
              <button className="relative" onClick={toggleNotification}>
                {hasUnreadNotifications ? (
                  <Image
                    src="/icons/red-bell.svg"
                    alt="red-bell"
                    width={19}
                    height={29}
                    className={hasUnreadNotifications ? "heartbeat" : ""}
                  />
                ) : (
                  <MdOutlineNotificationsActive
                    id="notificationIcon"
                    size={24}
                  />
                )}
                <NotificationDropdown
                  isOpen={isNotificationOpen}
                  notifications={notificationsState}
                  username={user?.username || ""}
                  userId={user?.id || ""}
                />
              </button>
            </div>
            <div>
              <a href="/account">
                <button className="rounded-full shadow-lg px-6 py-2 bg-white text-black flex items-center gap-2 hover:bg-slate-200 transition-all">
                  {/* <MdOutlineAccountCircle size={24} /> */}
                  <Image
                    src={user?.image || "/icons/default_pfp.svg"}
                    alt="Profile Picture"
                    width={24}
                    height={24}
                    className="rounded-full"
                  />
                  Account
                </button>
              </a>
            </div>
          </div>

          <div className="icon-container flex lg:hidden items-center gap-4">
            <button className="relative" onClick={toggleNotification}>
              <MdOutlineNotificationsActive
                id="notificationIcon"
                size={24}
                className={hasUnreadNotifications ? "heartbeat" : ""}
              />
              <NotificationDropdown
                isOpen={isNotificationOpen}
                notifications={notificationsState}
                username={user?.username || ""}
                userId={user?.id || ""}
              />
            </button>
            <button onClick={toggleBurger}>
              <Image
                src="/icons/hamburger-list.svg"
                alt="logo"
                width={30}
                height={100}
              />
            </button>
          </div>
        </div>
        <p className=" text-xs font-thin text-gray-500 lg:pl-[19rem]">
          Order / {formattedPathName()}
        </p>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`lg:hidden transition absolute inset-x-0 origin-top ${
          isBurgerOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <div className="px-4 py-2 bg-white border rounded-md shadow-md mt-2">
          <a href="/account" className="block px-2 py-2 hover:bg-gray-50">
            Account
          </a>
          <a href="/dashboard" className="block px-2 py-2 hover:bg-gray-50">
            Dashboard
          </a>
          <a href="/order" className="block px-2 py-2 hover:bg-gray-50">
            Order
          </a>
          <a href="/history" className="block px-2 py-2 hover:bg-gray-50">
            History
          </a>
          <a
            href="/logout"
            className="py-1 px-2 bg-red-600 hover:bg-red-800 text-white rounded-lg cursor-pointer"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
