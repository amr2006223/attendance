"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import WarningModal from "./components/modal";
import ErrorModal from "./components/errorModal";

const CheckPage: React.FC = () => {
  const [isWarningModal, setWarningModal] = useState(false);
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const handleCheckIn = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.14:5000/api/attendance/checkin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const message = await response.json();
      if (!response.ok) {
        // throw new Error("Failed to check in.");
        setMessage(message["error"]);
        setTitle("Error");
        setWarningModal(true);
      } else {
        setMessage(message["message"]);
        setTitle("Success");
        setWarningModal(true);
      }
    } catch (error) {
      console.error("Error during check-in:", error);
    }
  };
  const handleCheckout = async () => {
    try {
      const response = await fetch(
        "http://192.168.1.14:5000/api/attendance/checkout",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const message = await response.json();
      if (!response.ok) {
        // throw new Error("Failed to check in.");
        setMessage(message["error"]);
        setTitle("Error");
        setWarningModal(true);
      } else {
        setMessage(message["message"]);
        setTitle("Success");
        setWarningModal(true);
      }
    } catch (error) {
      console.error("Error during check-in:", error);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="space-y-4">
        <Button
          onClick={handleCheckIn}
          className="w-40 py-2 px-4 text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-all"
        >
          Check In
        </Button>
        <Button
          onClick={handleCheckout}
          className="w-40 py-2 px-4 text-white bg-green-500 rounded-md hover:bg-green-600 transition-all"
        >
          Check Out
        </Button>
        <ErrorModal
          isOpen={isWarningModal}
          title={title}
          imgLink={""}
          message={message}
          setIsOpen={setWarningModal}
          // submitFuction={function (): void {}}
        ></ErrorModal>
      </div>
    </div>
  );
};

export default CheckPage;
