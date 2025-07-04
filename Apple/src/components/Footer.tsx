import React from "react";
import { Globe } from "lucide-react";

const Footer: React.FC = () => {
  const footerLinks = [
    {
      title: "Shop and Learn",
      links: [
        "Store",
        "Mac",
        "iPad",
        "iPhone",
        "Watch",
        "AirPods",
        "TV & Home",
        "AirTag",
        "Accessories",
        "Gift Cards",
      ],
    },
    {
      title: "Services",
      links: [
        "Apple Music",
        "Apple TV+",
        "Apple Fitness+",
        "Apple News+",
        "Apple Arcade",
        "iCloud",
        "Apple One",
        "Apple Card",
        "Apple Books",
        "Apple Podcasts",
      ],
    },
    {
      title: "Apple Store",
      links: [
        "Find a Store",
        "Genius Bar",
        "Today at Apple",
        "Apple Camp",
        "Apple Store App",
        "Certified Refurbished",
        "Apple Trade In",
        "Financing",
        "Order Status",
        "Shopping Help",
      ],
    },
    {
      title: "For Business",
      links: ["Apple and Business", "Shop for Business"],
    },
    {
      title: "For Education",
      links: ["Apple and Education", "Shop for K-12", "Shop for College"],
    },
    {
      title: "Apple Values",
      links: [
        "Accessibility",
        "Education",
        "Environment",
        "Inclusion and Diversity",
        "Privacy",
        "Racial Equity and Justice",
      ],
    },
    {
      title: "About Apple",
      links: [
        "Newsroom",
        "Apple Leadership",
        "Career Opportunities",
        "Investors",
        "Ethics & Compliance",
        "Events",
        "Contact Apple",
      ],
    },
  ];

  return (
    <footer className="bg-gray-100 pt-8 text-xs">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Footer note */}
        <div className="border-b border-gray-300 pb-5">
          <p className="text-gray-600 leading-relaxed">
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device. Not all devices are
            eligible for credit. You must be at least 18 years old to be
            eligible to trade in for credit or for an Apple Gift Card. Trade-in
            value may be applied toward qualifying new device purchase, or added
            to an Apple Gift Card. Actual value awarded is based on receipt of a
            qualifying device matching the description provided when estimate
            was made. Sales tax may be assessed on full value of a new device
            purchase. In-store trade-in requires presentation of a valid photo
            ID. Offer may not be available in all stores, and may vary between
            in-store and online trade-in. Some stores may have additional
            requirements. Apple or its trade-in partners reserve the right to
            refuse or limit quantity of any trade-in transaction for any reason.
            More details are available from Apple's trade-in partner for
            trade-in and recycling of eligible devices. Restrictions and
            limitations may apply.
          </p>
        </div>

        {/* Main footer links */}
        <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {footerLinks.map((column, index) => (
            <div
              key={index}
              className={column.title === "About Apple" ? "lg:col-start-5" : ""}
            >
              <h3 className="font-medium text-gray-900 mb-4">{column.title}</h3>
              <ul className="space-y-2.5">
                {column.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-300 py-5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
      <div className="text-gray-600">
  <p className="mb-2">
    More ways to shop:{" "}
    <a href="#" className="text-blue-600 hover:underline">
      Find an Apple Store
    </a>{" "}
    or{" "}
    <a href="#" className="text-blue-600 hover:underline">
      other retailer
    </a>{" "}
    near you. Or call 1-800-MY-APPLE.
  </p>
  <p>
    Copyright © {new Date().getFullYear()} Apple Inc. All rights
    reserved.
  </p>
  <p className="mt-1 text-gray-600">
    Design and developed by{" "}
    <a
      href="https://www.boadtechnologies.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:underline"
    >
      Boad Technologies
    </a>
  </p>
</div>

            <div className="flex items-center space-x-3">
              <Globe size={16} className="text-gray-600" />
              <span className="text-blue-600 hover:underline cursor-pointer">
                United States
              </span>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            <a href="#" className="text-gray-600 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 hover:underline">
              Terms of Use
            </a>
            <a href="#" className="text-gray-600 hover:underline">
              Sales and Refunds
            </a>
            <a href="#" className="text-gray-600 hover:underline">
              Legal
            </a>
            <a href="#" className="text-gray-600 hover:underline">
              Site Map
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
