"use client";

import React, { useEffect, useState } from "react";

import styles from "./styles.module.css";

const EarlyBirdPage = () => {
  const [selectedDates, setSelectedDates] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const ticketPrices: { [key: string]: number } = {
    "2025-11-18": 5000,
    "2025-11-19": 5000,
    "2025-11-20": 50000,
    "2025-11-21": 5000,
    "2025-11-22": 5000,
  };

  const paystackLinks: { [key: string]: string } = {
    "2025-11-18": "https://paystack.com/buy/dflagos25-tuesday",
    "2025-11-19": "https://paystack.com/buy/dflagos25-wednesday",
    "2025-11-20": "https://paystack.com/buy/dflagos25-thursday",
    "2025-11-21": "https://paystack.com/buy/dflagos25-friday",
    "2025-11-22": "https://paystack.com/buy/dflagos25-saturday",
  };

  const ticketDetails: { [key: string]: string } = {
    "2025-11-18": "Tuesday - Student Edition",
    "2025-11-19": "Wednesday - Design & Product Day",
    "2025-11-20": "Thursday - Startup & Pro Dev Day",
    "2025-11-21": "Friday - Engineering & Infrastructure Day",
    "2025-11-22": "Saturday - AI & Cloud Day",
  };

  const handleDateClick = (date: string) => {
    setSelectedDates((prevDates) => {
      if (prevDates.includes(date)) {
        return prevDates.filter((d) => d !== date);
      } else {
        return [...prevDates, date];
      }
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
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return date.toLocaleDateString("en-US", options);
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
                {Object.keys(ticketPrices).map((date) => (
                  <div
                    key={date}
                    className={`${styles.day} ${selectedDates.includes(date) ? styles.selected : ""}`}
                    onClick={() => handleDateClick(date)}
                  >
                    <div className={styles.dayName}>
                      {new Date(date).toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div className={styles.dayNumber}>{new Date(date).getDate()}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.ticketDetailsPlaceholder}>
            {selectedDates.length > 0
              ? selectedDates.map((date, index) => (
                  <div key={date}>
                    {index > 0 && <hr style={{ margin: "10px 0" }} />}
                    <div>
                      <strong>{ticketDetails[date]}</strong>
                      <br />
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
                    <div key={date}>{formatDate(date)}</div>
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
