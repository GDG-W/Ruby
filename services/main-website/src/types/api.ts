export interface Room {
  room_id: string;
  room_name: string;
  capacity: number;
}

export interface SessionType {
  type_id: string;
  type_name: string;
}

export interface Speaker {
  speaker_id: string;
  speaker_name: string;
  speaker_tagline: string;
  speaker_bio: string;
  speaker_img: string;
  speaker_twitter: string;
  speaker_linkedin: string;
}

export interface Session {
  session_type: string;
  day: string;
  start_time: string;
  end_time: string;
  duration_minutes: number;
  session_title: string;
  speaker_id?: string;
  speaker_name?: string;
  room_type?: string;
  room_name?: string;
  room_size?: number;
  track_type?: string;
  track_id?: string;
}

export interface ConferenceData {
  Rooms: Room[];
  "Session Tyoe": SessionType[]; // Note: keeping the typo as it appears in the API
  Speakers: Speaker[];
  "Day 1": Session[];
  "Day 2": Session[];
  "Day 3": Session[];
  "Day 4": Session[];
}

export interface ApiResponse {
  data: ConferenceData;
  success: boolean;
  message?: string;
}