"use server";

import { unstable_cache } from "next/cache";
import type { ConferenceData } from "@/types/api";

const API_ENDPOINT =
  "https://script.google.com/macros/s/AKfycbzm_bMJ2jUCF6Op7iDHioH5PzNCu7LL2FuLRLgNxmn0GPtM4ghJFrTKzVcufbNXD18a/exec";

const fetchConferenceDataUncached =
  async (): Promise<ConferenceData | null> => {
    try {
      const response = await fetch(API_ENDPOINT, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        console.error(
          `Failed to fetch data: ${response.status} ${response.statusText}`,
        );
        return null;
      }

      const data: ConferenceData = await response.json();

      return data;
    } catch (error) {
      console.error("Error fetching conference data:", error);
      return null;
    }
  };

export const fetchConferenceData = unstable_cache(
  fetchConferenceDataUncached,
  ["conference-data"],
  { revalidate: 600 },
);

export async function fetchSpeakers() {
  const data = await fetchConferenceData();
  return data?.Speakers || [];
}

export async function fetchRooms() {
  const data = await fetchConferenceData();
  return data?.Rooms || [];
}

export async function fetchSessionTypes() {
  const data = await fetchConferenceData();
  return data?.["Session Tyoe"] || [];
}

export async function fetchScheduleByDay(
  day: "Day 1" | "Day 2" | "Day 3" | "Day 4" | "Day 5",
) {
  const data = await fetchConferenceData();
  return data?.[day] || [];
}

export async function fetchAllSchedule() {
  const data = await fetchConferenceData();
  if (!data) return {};

  return {
    "Day 1": data["Day 1"] || [],
    "Day 2": data["Day 2"] || [],
    "Day 3": data["Day 3"] || [],
    "Day 4": data["Day 4"] || [],
    "Day 5": data["Day 5"] || [],
  };
}
