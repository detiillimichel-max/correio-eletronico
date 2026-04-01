import React, { useEffect, useState } from "react";
import { getProfile } from "./profileService";

export function ProfileDrawer({ userId }: { userId: string }) {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile(userId);
      setProfile(data);
    };
    fetchProfile();
  }, [userId]);

  if (!profile) return <p>Carregando perfil...</p>;

  return (
    <div style={{
      backdropFilter: "blur(20px)",
      border: "1px solid rgba(255,255,255,0.1)",
      padding: "16px"
    }}>
      <h2>{profile.username}</h2>
      <p>{profile.bio}</p>
      <p>Localização: {profile.location}</p>
      <p>Status: {profile.vibe_status}</p>
    </div>
  );
}
