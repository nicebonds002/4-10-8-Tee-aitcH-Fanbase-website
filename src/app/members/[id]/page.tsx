"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import styles from "@/app/members/[id]/page.module.css";
import { Member } from "@/components/members/index";

export default function MemberDetailPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const [member, setMember] = useState<Member | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/members.json")
      .then((res) => res.json())
      .then((data: Member[]) => {
        const found = data.find((m) => String(m.id) === id);

        if (!found) {
          setMember(null);
          return;
        }

        // ✅ normalize team ให้เป็น array เสมอ (กัน .map พัง)
        const normalizedMember: Member = {
          ...found,
          team: Array.isArray(found.team)
            ? found.team
            : found.team
            ? [found.team]
            : [],
        };

        setMember(normalizedMember);
      })
      .catch((err) => {
        console.error("Failed to load member:", err);
        setMember(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className={styles.loading}>กำลังโหลด...</p>;
  }

  if (!member) {
    return (
      <div className={styles.notFound}>
        <h2>ไม่พบสมาชิก</h2>
        <button onClick={() => router.push("/members")}>
          กลับหน้ารวมสมาชิก
        </button>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Back */}
      <button onClick={() => router.back()} className={styles.back}>
        ← กลับ
      </button>

      <div className={styles.card}>
        {/* Image */}
        <div className={styles.imageWrap}>
          <Image
            src={member.img}
            alt={member.name}
            fill
            priority
            className={styles.image}
          />
        </div>

        {/* Info */}
        <div className={styles.info}>
          <h1 className={styles.name}>{member.name}</h1>

          {member.fullname && (
            <p className={styles.fullname}>{member.fullname}</p>
          )}

          <div className={styles.teams}>
            {member.team.map((t) => (
              <span
                key={t}
                className={`${styles.badge} ${styles[`team_${t}`] || ""}`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}