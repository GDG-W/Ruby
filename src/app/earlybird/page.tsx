"use client";

import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

const EarlyBirdPage = () => {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [thursdayOption, setThursdayOption] = useState<"standard" | "pro">("standard");
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const ticketPrices: { [key: string]: number } = {
    "2025-11-18": 5000,
    "2025-11-19": 5000,
    "2025-11-20-standard": 5000,
    "2025-11-20-pro": 50000,
    "2025-11-21": 5000,
    "2025-11-22": 5000,
  };

  const paystackLinks: { [key: string]: string } = {
    "2025-11-18": "https://paystack.com/buy/dflagos25-tuesday",
    "2025-11-19": "https://paystack.com/buy/dflagos25-wednesday",
    "2025-11-20-standard": "https://paystack.com/buy/dflagos25-thursday-standard",
    "2025-11-20-pro": "https://paystack.com/buy/dflagos25-thursday",
    "2025-11-21": "https://paystack.com/buy/dflagos25-friday",
    "2025-11-22": "https://paystack.com/buy/dflagos25-saturday",
  };

  const ticketDetails: { [key: string]: string } = {
    "2025-11-18": "Tuesday - Student Edition",
    "2025-11-19": "Wednesday - Design & Product Day",
    "2025-11-20-standard": "Thursday - Web3 & Open Source (Standard)",
    "2025-11-20-pro": "Thursday - Startups & Pro Dev (Pro)",
    "2025-11-21": "Friday - Engineering & Security Day",
    "2025-11-22": "Saturday - AI, Cloud & DevOps Day",
  };

  const ticketDescriptions: { [key: string]: string } = {
    "2025-11-18":
      "A day for students and aspiring tech enthusiasts to learn, connect, and explore the tech ecosystem through workshops and talks.",
    "2025-11-19":
      "Focused on product design, UX/UI, and building user-centered experiences that drive innovation.",
    "2025-11-20-standard":
      "Explore the world of decentralized technologies and open-source projects, with talks and sessions from experts shaping the future of tech.",
    "2025-11-20-pro":
      "Your exclusive chance to sit with top startups and industry pros, ask questions, gain insider insights, and level up your career. Limited slots, high-value connections, and exclusive swags await. You don't want to miss this!",
    "2025-11-21":
      "Deep dive into software engineering, infrastructure, and cybersecurity best practices for building secure and scalable solutions.",
    "2025-11-22":
      "Explore the future of AI, cloud computing, and DevOps, gaining actionable skills and insights to stay ahead in the tech world.",
  };

  const handleDateClick = (date: string) => {
    // Handle Thursday special case
    if (date === "2025-11-20") {
      const thursdayKey = `2025-11-20-${thursdayOption}`;
      setSelectedDates((prevDates) => {
        // Remove any existing Thursday option
        const filteredDates = prevDates.filter((d) => !d.startsWith("2025-11-20"));

        if (prevDates.some((d) => d.startsWith("2025-11-20"))) {
          return filteredDates;
        } else {
          return [...filteredDates, thursdayKey];
        }
      });
    } else {
      setSelectedDates((prevDates) => {
        if (prevDates.includes(date)) {
          return prevDates.filter((d) => d !== date);
        } else {
          return [...prevDates, date];
        }
      });
    }
  };

  const handleThursdayOptionChange = (option: "standard" | "pro") => {
    setThursdayOption(option);

    // Update selected dates if Thursday is already selected
    setSelectedDates((prevDates) => {
      const hasThursday = prevDates.some((d) => d.startsWith("2025-11-20"));
      if (hasThursday) {
        const filteredDates = prevDates.filter((d) => !d.startsWith("2025-11-20"));
        return [...filteredDates, `2025-11-20-${option}`];
      }
      return prevDates;
    });
  };

  const handleCheckout = () => {
    if (selectedDates.length === 1) {
      const paymentLink = paystackLinks[selectedDates[0]];
      if (paymentLink) {
        window.open(paymentLink, "_blank");
      } else {
        alert("Payment link not configured for this selection.");
      }
    } else if (selectedDates.length > 1) {
      window.open("https://paystack.shop/pay/dflagos25", "_blank");
    }
  };

  const formatDate = (dateString: string) => {
    const baseDate = dateString.split("-").slice(0, 3).join("-"); // Remove -standard/-pro suffix
    const date = new Date(baseDate);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
  };

  const isThursdaySelected = () => {
    return selectedDates.some((date) => date.startsWith("2025-11-20"));
  };

  useEffect(() => {
    const newTotal = selectedDates.reduce((acc, date) => acc + (ticketPrices[date] || 0), 0);
    setTotalPrice(newTotal);
  }, [selectedDates]);

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logo.svg" alt="DevFest Lagos Logo" />
      </header>

      <div className={styles.mainContent}>
        <div className={styles.leftSection}>
          <h1 className={styles.title}>
            Be a part of the
            <br />
            DevFest Lagos 2025 physically!
          </h1>
          <nav className={styles.breadcrumb}>
            <span className={styles.active}>Get your early bird ticket</span>
          </nav>

          <div className={styles.section}>
            <div className={styles.sectionHeader}>
              <div className={styles.stepNumber}>1</div>
              <h2 className={styles.sectionTitle}>Select Date(s)</h2>
            </div>

            <div className={styles.calendar}>
              <div className={styles.calendarHeader}>November 2025</div>
              <div className={styles.calendarGrid}>
                {["2025-11-18", "2025-11-19", "2025-11-20", "2025-11-21", "2025-11-22"].map(
                  (date) => (
                    <div
                      key={date}
                      className={`${styles.day} ${
                        date === "2025-11-20"
                          ? isThursdaySelected()
                            ? styles.selected
                            : ""
                          : selectedDates.includes(date)
                            ? styles.selected
                            : ""
                      }`}
                      onClick={() => handleDateClick(date)}
                    >
                      <div className={styles.dayName}>
                        {new Date(date).toLocaleDateString("en-US", { weekday: "short" })}
                      </div>
                      <div className={styles.dayNumber}>{new Date(date).getDate()}</div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Thursday Options */}
            {isThursdaySelected() && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "15px",
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                }}
              >
                <h4 style={{ marginBottom: "10px" }}>Choose Thursday Option:</h4>
                <div style={{ display: "flex", gap: "15px" }}>
                  <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="thursday-option"
                      value="standard"
                      checked={thursdayOption === "standard"}
                      onChange={() => handleThursdayOptionChange("standard")}
                      style={{ marginRight: "8px" }}
                    />
                    <span>Web3 & Open Source (₦5,000)</span>
                  </label>
                  <label style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
                    <input
                      type="radio"
                      name="thursday-option"
                      value="pro"
                      checked={thursdayOption === "pro"}
                      onChange={() => handleThursdayOptionChange("pro")}
                      style={{ marginRight: "8px" }}
                    />
                    <span>Startups & Pro Dev (₦50,000)</span>
                  </label>
                </div>
              </div>
            )}
          </div>

          <div className={styles.ticketDetailsPlaceholder}>
            {selectedDates.length > 0
              ? selectedDates.map((date, index) => (
                  <div key={date}>
                    {index > 0 && <hr style={{ margin: "10px 0" }} />}
                    <div>
                      <strong>{ticketDetails[date]}</strong>
                      <br />
                      <small
                        style={{
                          color: "#666",
                          fontSize: "0.9em",
                          marginTop: "5px",
                          display: "block",
                        }}
                      >
                        {ticketDescriptions[date]}
                      </small>
                      <small>{formatDate(date)}</small> - ₦{ticketPrices[date].toLocaleString()}
                    </div>
                  </div>
                ))
              : "Select your ticket date(s) to see ticket details."}
          </div>
        </div>

        <div className={styles.rightSection}>
          <h3 className={styles.orderTitle}>Order Summary</h3>

          {selectedDates.length === 0 ? (
            <div className={styles.orderPlaceholder}>
              Select your ticket date(s) to see order summary.
            </div>
          ) : (
            <div className={`${styles.orderSummary} ${styles.show}`}>
              <div className={styles.selectedDate}>
                <div className={styles.selectedDateLabel}>Selected Date</div>
                <div className={styles.selectedDateValue}>
                  {selectedDates.map((date) => (
                    <div key={date}>
                      {formatDate(date)} - {ticketDetails[date]}
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.ticketItem}>
                <span className={styles.ticketName}>
                  {selectedDates.length > 1 ? "Multi-Day Pass" : "Single Day Pass"}
                </span>
                <span className={styles.ticketPrice}>₦{totalPrice.toLocaleString()}</span>
              </div>

              <div className={styles.total}>
                <span>Total</span>
                <span>₦{totalPrice.toLocaleString()}</span>
              </div>

              <button
                className={styles.checkoutBtn}
                onClick={handleCheckout}
                disabled={selectedDates.length === 0}
              >
                Proceed to Payment
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EarlyBirdPage;
