import { AccountDetailsForm } from "../AccountDetails/AccountDetails";
import Building_Shiping from "../Building_Shiping/Building_Shiping";
import { Link, Route, Routes } from "react-router-dom";


export function MyAccountPage() {
  const accountNav= [
    "Dashboard",
    "Orders",
    "Downloads",
    "Addresses", // Active tab
    "Account details",
    "Log out",
  ];

  const accountTabs = [
    {
      id: 1,
      name: "Dashboard",
      path: "dashboard",
      isActive: false,
      element: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          voluptatem exercitationem vitae magnam assumenda repellendus
          consequuntur, ullam adipisci quod laboriosam dolorem minus aliquam
          nulla hic sunt reiciendis dolore praesentium tenetur!
        </p>
      ),
    },
    {
      id: 2,
      name: "Orders",
      path: "orders",
      isActive: false,
      element: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          voluptatem exercitationem vitae magnam assumenda repellendus
          consequuntur, ullam adipisci quod laboriosam dolorem minus aliquam
          nulla hic sunt reiciendis dolore praesentium tenetur!
        </p>
      ),
    },
    {
      id: 3,
      name: "Downloads",
      path: "downloads",
      isActive: false,
      element: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          voluptatem exercitationem vitae magnam assumenda repellendus
          consequuntur, ullam adipisci quod laboriosam dolorem minus aliquam
          nulla hic sunt reiciendis dolore praesentium tenetur!
        </p>
      ),
    },
    {
      id: 4,
      name: "Addresses",
      path: "addresses",
      isActive: true,
      element: <Building_Shiping />,
    },
    {
      id: 5,
      name: "Account details",
      path: "AccountDetailsForm",
      isActive: false,
      element: <AccountDetailsForm />,
    },
    {
      id: 6,
      name: "Log out",
      path: "logout", // Often a simple path that triggers a session end
      isActive: false,
      element: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
          voluptatem exercitationem vitae magnam assumenda repellendus
          consequuntur, ullam adipisci quod laboriosam dolorem minus aliquam
          nulla hic sunt reiciendis dolore praesentium tenetur!
        </p>
      ),
    },
  ];

  const AccountNavigation = ({ activeTab }) => (
    <nav className="flex space-x-6 text-sm font-medium border-b border-gray-200 mb-6">
      {accountNav.map((tab, index) => (
        <Link
          to={`/MyAccount/${accountTabs[index].path}`}
          key={tab}
          className="relative pb-3"
        >
          <span
            className={`cursor-pointer ${
              tab === activeTab
                ? "text-red-500 font-semibold"
                : "text-gray-600 hover:text-gray-800"
            }`}
          >
            {tab}
          </span>
          {/* Active indicator line */}
          {tab === activeTab && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500" />
          )}
        </Link>
      ))}
    </nav>
  );

  return (
    <div className="w-full flex flex-col justify-center mx-12 p-4 sm:p-6 lg:p-8">
      <AccountNavigation activeTab="Addresses" />
      <Routes>
        <Route index element={<Building_Shiping />} />
        {accountTabs.map((obj) => (
          <Route key={obj.id} path={obj.path} element={obj.element} />
        ))}
      </Routes>
    </div>
  );
}
