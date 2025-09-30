"use client";
import React, { useState } from "react";
import {
  User,
  Package,
  Clock,
  MapPin,
  CreditCard,
  Heart,
  MessageSquare,
  Settings,
  LogOut,
  ChevronRight,
  Edit,
  Truck,
  CheckCircle,
  XCircle,
  Eye,
  Download,
  Bell,
  Shield,
  Phone,
  Mail,
  Calendar,
  Home,
  ChevronDown,
  ChevronsUpDown,
  Check,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showMoreTabs, setShowMoreTabs] = useState(false);

  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    memberSince: "2023-01-15",
    totalOrders: 24,
    totalSpent: 3456.78,
  };

  // Sample orders data
  const currentOrders = [
    {
      id: "ORD-2025-1234",
      date: "2025-09-28",
      status: "in_transit",
      total: 299.99,
      items: 3,
      trackingNumber: "TRK123456789",
      estimatedDelivery: "2025-10-02",
      products: [
        {
          name: "Wireless Headphones",
          quantity: 1,
          price: 249.99,
          image:
            "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
        },
        {
          name: "USB Cable",
          quantity: 2,
          price: 25.0,
          image:
            "https://images.unsplash.com/photo-1585990267809-c1cf6c8c8a9c?w=100&h=100&fit=crop",
        },
      ],
    },
    {
      id: "ORD-2025-1233",
      date: "2025-09-25",
      status: "processing",
      total: 156.5,
      items: 2,
      trackingNumber: null,
      estimatedDelivery: "2025-10-05",
      products: [
        {
          name: "Phone Case",
          quantity: 1,
          price: 29.99,
          image:
            "https://images.unsplash.com/photo-1601593346740-925612772716?w=100&h=100&fit=crop",
        },
        {
          name: "Screen Protector",
          quantity: 1,
          price: 126.51,
          image:
            "https://images.unsplash.com/photo-1585366119957-e9730b6d0f60?w=100&h=100&fit=crop",
        },
      ],
    },
  ];

  const orderHistory = [
    {
      id: "ORD-2025-1200",
      date: "2025-08-15",
      status: "delivered",
      total: 599.0,
      items: 1,
    },
    {
      id: "ORD-2025-1150",
      date: "2025-07-10",
      status: "delivered",
      total: 89.99,
      items: 2,
    },
    {
      id: "ORD-2025-1100",
      date: "2025-06-05",
      status: "delivered",
      total: 199.99,
      items: 1,
    },
  ];

  const savedAddresses = [
    {
      id: 1,
      type: "Home",
      name: "John Doe",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zip: "10001",
      isDefault: true,
    },
    {
      id: 2,
      type: "Work",
      name: "John Doe",
      address: "456 Business Ave, Suite 200",
      city: "New York",
      state: "NY",
      zip: "10002",
      isDefault: false,
    },
  ];

  const savedPaymentMethods = [
    {
      id: 1,
      type: "Visa",
      last4: "4242",
      expiry: "12/25",
      isDefault: true,
    },
    {
      id: 2,
      type: "Mastercard",
      last4: "8888",
      expiry: "06/26",
      isDefault: false,
    },
  ];

  const wishlist = [
    {
      id: 1,
      name: "Smart Watch Pro",
      price: 399.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
      inStock: true,
    },
    {
      id: 2,
      name: "Laptop Stand",
      price: 49.99,
      image:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&h=200&fit=crop",
      inStock: true,
    },
  ];

  const getOrderStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "bg-green-100 text-green-700";
      case "in_transit":
        return "bg-blue-100 text-blue-700";
      case "processing":
        return "bg-yellow-100 text-yellow-700";
      case "cancelled":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getOrderStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return <CheckCircle className="w-4 h-4" />;
      case "in_transit":
        return <Truck className="w-4 h-4" />;
      case "processing":
        return <Clock className="w-4 h-4" />;
      case "cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Package className="w-4 h-4" />;
    }
  };

  const formatStatus = (status) => {
    return status
      .split("_")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const mainTabs = [
    { id: "overview", label: "Overview", icon: Home },
    { id: "orders", label: "Orders", icon: Package },
    { id: "history", label: "History", icon: Clock },
    { id: "wishlist", label: "Wishlist", icon: Heart },
  ];

  const moreTabs = [
    { id: "addresses", label: "Addresses", icon: MapPin },
    { id: "payments", label: "Payments", icon: CreditCard },
    { id: "support", label: "Support", icon: MessageSquare },
    { id: "settings", label: "Settings", icon: Settings },
  ];
  const margeTab = [...mainTabs, ...moreTabs];
  const [popOpen, setPopOpen] = useState(false);

  return (
    <div className="min-h-screen container mx-auto bg-gray-50 pb-20 lg:pb-8">
      {/* Header with User Info */}
      <div className="bg-white border-b border-gray-200">
        <div className="   px-4 py-4 lg:py-6">
          <div className="flex flex-col justify-start items-start sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover"
                width={64}
                height={64}
              />
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
                  {user.name}
                </h1>
                <p className="text-sm text-gray-500">{user.email}</p>
              </div>
            </div>
            <button className="flex items-center gap-2 text-red-600 hover:text-red-700 px-4 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors">
              <LogOut className="w-4 h-4" />
              <span className="text-sm font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Tabs Navigation - Desktop */}
      <div className="hidden lg:block bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-1">
            {mainTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{tab.label}</span>
                </button>
              );
            })}

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowMoreTabs(!showMoreTabs)}
                className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                  moreTabs.some((tab) => tab.id === activeTab)
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                }`}
              >
                <span className="font-medium">More</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    showMoreTabs ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showMoreTabs && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowMoreTabs(false)}
                  />
                  <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-lg z-50">
                    {moreTabs.map((tab) => {
                      const Icon = tab.icon;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id);
                            setShowMoreTabs(false);
                          }}
                          className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                            activeTab === tab.id
                              ? "bg-blue-50 text-blue-600"
                              : "text-gray-700"
                          }`}
                        >
                          <Icon className="w-5 h-5" />
                          <span className="font-medium">{tab.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Tab Selector */}
      {/*      <div className="lg:hidden bg-white border-b border-gray-200 sticky top-0 z-30">
        <div className="px-4 py-3">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg text-gray-900 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <optgroup label="Main">
              {mainTabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="More">
              {moreTabs.map((tab) => (
                <option key={tab.id} value={tab.id}>
                  {tab.label}
                </option>
              ))}
            </optgroup>
          </select>
        </div>
      </div> */}
      <Popover open={popOpen} onOpenChange={setPopOpen}>
        <PopoverTrigger className="lg:hidden" asChild>
          <Button
            variant="outline"
            role="combobox"
            className=" w-full m-1 justify-between shadow-none"
          >
            {activeTab
              ? margeTab.find((framework) => framework.id === activeTab)?.label
              : "Select a Tab"}
            <ChevronsUpDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Search framework..." className="h-9" />
            <CommandList>
              <CommandEmpty>No framework found.</CommandEmpty>
              <CommandGroup>
                {margeTab.map((framework) => (
                  <CommandItem
                    key={framework.id}
                    value={framework.id}
                    onSelect={(currentValue: string) => {
                      setActiveTab(
                        currentValue === activeTab ? "" : currentValue
                      );
                      setPopOpen(false);
                    }}
                  >
                    {<framework.icon />} {framework.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        activeTab === framework.id ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-4 lg:py-8">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-4 lg:space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4">
              <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs lg:text-sm text-gray-500">
                      Total Orders
                    </p>
                    <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">
                      {user.totalOrders}
                    </p>
                  </div>
                  <Package className="w-6 h-6 lg:w-8 lg:h-8 text-blue-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs lg:text-sm text-gray-500">
                      Total Spent
                    </p>
                    <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">
                      ${user.totalSpent}
                    </p>
                  </div>
                  <CreditCard className="w-6 h-6 lg:w-8 lg:h-8 text-green-600" />
                </div>
              </div>

              <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs lg:text-sm text-gray-500">Wishlist</p>
                    <p className="text-xl lg:text-2xl font-bold text-gray-900 mt-1">
                      {wishlist.length}
                    </p>
                  </div>
                  <Heart className="w-6 h-6 lg:w-8 lg:h-8 text-red-600" />
                </div>
              </div>
            </div>

            {/* Profile Information */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
                  Profile Information
                </h2>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <Edit className="w-4 h-4" />
                  <span className="text-sm">Edit</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                <div>
                  <label className="text-xs lg:text-sm text-gray-500">
                    Full Name
                  </label>
                  <p className="text-sm lg:text-base text-gray-900 mt-1">
                    {user.name}
                  </p>
                </div>
                <div>
                  <label className="text-xs lg:text-sm text-gray-500">
                    Phone Number
                  </label>
                  <p className="text-sm lg:text-base text-gray-900 mt-1">
                    {user.phone}
                  </p>
                </div>
                <div>
                  <label className="text-xs lg:text-sm text-gray-500">
                    Email Address
                  </label>
                  <p className="text-sm lg:text-base text-gray-900 mt-1">
                    {user.email}
                  </p>
                </div>
                <div>
                  <label className="text-xs lg:text-sm text-gray-500">
                    Member Since
                  </label>
                  <p className="text-sm lg:text-base text-gray-900 mt-1">
                    {new Date(user.memberSince).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Orders */}
            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
                  Recent Orders
                </h2>
                <button
                  onClick={() => setActiveTab("orders")}
                  className="text-blue-600 hover:text-blue-700 text-sm flex items-center gap-1"
                >
                  View All
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-3">
                {currentOrders.slice(0, 2).map((order) => (
                  <div
                    key={order.id}
                    className="border border-gray-200 rounded-lg p-3 lg:p-4"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-medium text-gray-900 text-sm lg:text-base">
                          {order.id}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500 mt-1">
                          {order.date}
                        </p>
                      </div>
                      <span
                        className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getOrderStatusColor(
                          order.status
                        )}`}
                      >
                        {getOrderStatusIcon(order.status)}
                        <span className="hidden sm:inline">
                          {formatStatus(order.status)}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-xs lg:text-sm text-gray-600">
                        {order.items} items
                      </p>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">
                        ${order.total}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Current Orders Tab */}
        {activeTab === "orders" && (
          <div className="space-y-4 lg:space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
                Current Orders
              </h2>

              <div className="space-y-4 lg:space-y-6">
                {currentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-gray-200 rounded-lg p-4 lg:p-6"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 pb-4 border-b border-gray-200">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-sm lg:text-base">
                          {order.id}
                        </h3>
                        <p className="text-xs lg:text-sm text-gray-500 mt-1">
                          {new Date(order.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                      <span
                        className={`px-3 lg:px-4 py-1.5 lg:py-2 rounded-lg text-xs lg:text-sm font-medium flex items-center gap-2 mt-2 sm:mt-0 w-fit ${getOrderStatusColor(
                          order.status
                        )}`}
                      >
                        {getOrderStatusIcon(order.status)}
                        {formatStatus(order.status)}
                      </span>
                    </div>

                    <div className="space-y-3 mb-4">
                      {order.products.map((product, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm lg:text-base text-gray-900 truncate">
                              {product.name}
                            </p>
                            <p className="text-xs lg:text-sm text-gray-500">
                              Qty: {product.quantity}
                            </p>
                          </div>
                          <p className="font-medium text-gray-900 text-sm lg:text-base">
                            ${product.price}
                          </p>
                        </div>
                      ))}
                    </div>

                    {order.trackingNumber && (
                      <div className="bg-blue-50 rounded-lg p-3 lg:p-4 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Truck className="w-4 h-4 lg:w-5 lg:h-5 text-blue-600" />
                          <p className="font-medium text-blue-900 text-sm lg:text-base">
                            Tracking
                          </p>
                        </div>
                        <p className="text-xs lg:text-sm text-blue-700">
                          {order.trackingNumber}
                        </p>
                        <p className="text-xs lg:text-sm text-blue-700">
                          Est. Delivery:{" "}
                          {new Date(
                            order.estimatedDelivery
                          ).toLocaleDateString()}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between pt-4 border-t border-gray-200 gap-3">
                      <p className="text-base lg:text-lg font-semibold text-gray-900">
                        Total: ${order.total}
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 lg:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          <Eye className="w-4 h-4" />
                          <span>Details</span>
                        </button>
                        <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-3 lg:px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                          <Download className="w-4 h-4" />
                          <span>Invoice</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Order History Tab */}
        {activeTab === "history" && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
              Order History
            </h2>

            <div className="space-y-3 lg:space-y-4">
              {orderHistory.map((order) => (
                <div
                  key={order.id}
                  className="border border-gray-200 rounded-lg p-3 lg:p-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1 min-w-0 mr-3">
                      <p className="font-medium text-gray-900 text-sm lg:text-base">
                        {order.id}
                      </p>
                      <p className="text-xs lg:text-sm text-gray-500 mt-1">
                        {new Date(order.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </p>
                      <p className="text-xs lg:text-sm text-gray-600 mt-1">
                        {order.items} items
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <span
                        className={`px-2 lg:px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getOrderStatusColor(
                          order.status
                        )}`}
                      >
                        {getOrderStatusIcon(order.status)}
                        <span className="hidden sm:inline">
                          {formatStatus(order.status)}
                        </span>
                      </span>
                      <p className="font-semibold text-gray-900 text-sm lg:text-base">
                        ${order.total}
                      </p>
                      <div className="flex gap-2 text-xs lg:text-sm">
                        <button className="text-blue-600 hover:text-blue-700">
                          View
                        </button>
                        <span className="text-gray-300">|</span>
                        <button className="text-blue-600 hover:text-blue-700">
                          Reorder
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Wishlist Tab */}
        {activeTab === "wishlist" && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
              My Wishlist
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
              {wishlist.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-lg p-3 lg:p-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-40 lg:h-48 object-cover rounded-lg mb-3"
                  />
                  <h3 className="font-medium text-gray-900 mb-2 text-sm lg:text-base">
                    {item.name}
                  </h3>
                  <p className="text-lg lg:text-xl font-bold text-gray-900 mb-3">
                    ${item.price}
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-3 lg:px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Add to Cart
                    </button>
                    <button className="p-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <XCircle className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Addresses Tab */}
        {activeTab === "addresses" && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-3">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
                Saved Addresses
              </h2>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Add New Address
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-4">
              {savedAddresses.map((address) => (
                <div
                  key={address.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-medium text-gray-900 text-sm lg:text-base">
                      {address.type}
                    </span>
                    {address.isDefault && (
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                        Default
                      </span>
                    )}
                  </div>
                  <p className="text-sm lg:text-base text-gray-900">
                    {address.name}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600 mt-1">
                    {address.address}
                  </p>
                  <p className="text-xs lg:text-sm text-gray-600">
                    {address.city}, {address.state} {address.zip}
                  </p>
                  <div className="flex gap-2 mt-4">
                    <button className="flex-1 text-blue-600 hover:text-blue-700 text-sm font-medium">
                      Edit
                    </button>
                    <button className="flex-1 text-red-600 hover:text-red-700 text-sm font-medium">
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Payment Methods Tab */}
        {activeTab === "payments" && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 lg:mb-6 gap-3">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900">
                Payment Methods
              </h2>
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                Add New Card
              </button>
            </div>

            <div className="space-y-3 lg:space-y-4">
              {savedPaymentMethods.map((payment) => (
                <div
                  key={payment.id}
                  className="border border-gray-200 rounded-lg p-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-8 lg:w-12 lg:h-8 bg-gray-100 rounded flex items-center justify-center">
                        <CreditCard className="w-5 h-5 lg:w-6 lg:h-6 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 text-sm lg:text-base">
                          {payment.type} •••• {payment.last4}
                        </p>
                        <p className="text-xs lg:text-sm text-gray-500">
                          Expires {payment.expiry}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      {payment.isDefault && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded">
                          Default
                        </span>
                      )}
                      <button className="text-blue-600 hover:text-blue-700 text-xs lg:text-sm font-medium">
                        Edit
                      </button>
                      <button className="text-red-600 hover:text-red-700 text-xs lg:text-sm font-medium">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Tab */}
        {activeTab === "support" && (
          <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
            <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">
              Customer Support
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-4 mb-6">
              <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors text-left">
                <div className="flex items-center gap-3 mb-2">
                  <MessageSquare className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  <h3 className="font-medium text-gray-900 text-sm lg:text-base">
                    Live Chat
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-gray-600">
                  Chat with our support team
                </p>
              </button>

              <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  <h3 className="font-medium text-gray-900 text-sm lg:text-base">
                    Email Support
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-gray-600">
                  support@example.com
                </p>
              </button>

              <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  <h3 className="font-medium text-gray-900 text-sm lg:text-base">
                    Phone Support
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-gray-600">
                  1-800-123-4567
                </p>
              </button>

              <button className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors text-left">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 lg:w-6 lg:h-6 text-blue-600" />
                  <h3 className="font-medium text-gray-900 text-sm lg:text-base">
                    Schedule Call
                  </h3>
                </div>
                <p className="text-xs lg:text-sm text-gray-600">
                  Book a callback
                </p>
              </button>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-medium text-gray-900 mb-4 text-sm lg:text-base">
                Frequently Asked Questions
              </h3>
              <div className="space-y-2 lg:space-y-3">
                {[
                  "How do I track my order?",
                  "What is your return policy?",
                  "How do I change my shipping address?",
                  "How can I cancel my order?",
                ].map((question, idx) => (
                  <button
                    key={idx}
                    className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors text-left"
                  >
                    <span className="text-gray-900 text-sm lg:text-base">
                      {question}
                    </span>
                    <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400 flex-shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-4 lg:space-y-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
                Account Settings
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Email Notifications",
                    desc: "Receive order updates via email",
                    checked: true,
                  },
                  {
                    title: "SMS Notifications",
                    desc: "Receive shipping updates via SMS",
                    checked: false,
                  },
                  {
                    title: "Marketing Emails",
                    desc: "Receive promotional offers",
                    checked: true,
                  },
                ].map((setting, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
                  >
                    <div className="flex-1 min-w-0 mr-3">
                      <p className="font-medium text-gray-900 text-sm lg:text-base">
                        {setting.title}
                      </p>
                      <p className="text-xs lg:text-sm text-gray-500 mt-1">
                        {setting.desc}
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer flex-shrink-0">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        defaultChecked={setting.checked}
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg border border-gray-200 p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
                Security
              </h2>

              <div className="space-y-2 lg:space-y-3">
                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    <span className="text-gray-900 text-sm lg:text-base">
                      Change Password
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                </button>

                <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                  <div className="flex items-center gap-3">
                    <Bell className="w-4 h-4 lg:w-5 lg:h-5 text-gray-600" />
                    <span className="text-gray-900 text-sm lg:text-base">
                      Two-Factor Authentication
                    </span>
                  </div>
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 text-gray-400" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg border border-red-200 p-4 lg:p-6">
              <h2 className="text-lg lg:text-xl font-semibold text-red-600 mb-4">
                Danger Zone
              </h2>
              <button className="w-full bg-red-600 text-white py-3 px-4 rounded-lg hover:bg-red-700 transition-colors text-sm">
                Delete Account
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-30">
        <div className="grid grid-cols-4 gap-1 p-2">
          {mainTabs.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex flex-col items-center gap-1 py-2 px-1 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-600"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
