import { Headset } from "lucide-react";
import { FaDollarSign } from "react-icons/fa";
import { MdManageHistory } from "react-icons/md";
import { Globe, ListChecks, Megaphone } from "lucide-react";

export const services = [
  {
    id: 1,
    heading: "24/7 Guest Communication",
    icon: <Headset className="text-white w-6 h-6" />,
    imageUrl: "https://fastly.picsum.photos/id/1/5000/3333.jpg?hmac=Asv2DU3rA_5D1xSe22xZK47WEAN0wjWeFOhzd13ujW4",
    description: "We provide round-the-clock communication for your guests.", 
  },
  {
    id: 2,
    heading: "Revenue Management",
    icon: <FaDollarSign className="text-white w-6 h-6" />,
    imageUrl: "https://res.cloudinary.com/dp5assqjg/image/upload/v1756268064/WhatsApp_Image_2025-08-26_at_12.49.58_PM_vtv5ws.jpg",
  },
  {
    id: 3,
    heading: "End-to-End Management",
    icon: <MdManageHistory className="text-white w-6 h-6" />,
    imageUrl: "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4",
  },
  {
    id: 4,
    heading: "Multi-Platform Support",
    icon: <Globe className="text-white w-6 h-6" />,
    imageUrl: "https://res.cloudinary.com/dp5assqjg/image/upload/v1756270993/WhatsApp_Image_2025-08-27_at_10.00.26_AM_lhgnif.jpg",
  },
  {
    id: 5,
    heading: "Listing Optimization",
    icon: <ListChecks className="text-white w-6 h-6" />,
    imageUrl: "https://res.cloudinary.com/dp5assqjg/image/upload/v1756271397/WhatsApp_Image_2025-08-27_at_10.00.25_AM_lkasl6.jpg",
  },
  {
    id: 6,
    heading: "Marketing",
    icon: <Megaphone className="text-white w-6 h-6" />,
    imageUrl: "https://res.cloudinary.com/dp5assqjg/image/upload/v1756277542/WhatsApp_Image_2025-08-27_at_11.42.01_AM_lpuwvh.jpg",
  },
];
