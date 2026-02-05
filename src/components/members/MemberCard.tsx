import { FC, useEffect, useState } from "react";
import styles from "@/components/members/MemberCard.module.css";
import { Member } from "@/components/members/index";

interface Props {
  member: Member;
  onClick: () => void;
}

const MemberCard: FC<Props> = ({ member, onClick }) => {
  const [show, setShow] = useState(false);

  // Animation ตอนโหลดการ์ด
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // แปลงให้ team เป็น array เสมอ
  const teams = Array.isArray(member.team) ? member.team : [member.team];

  return (
    <section
      className={`${styles.card} ${show ? styles.show : ""}`}
      onClick={onClick}
    >
      <section className={styles.img}
        style={{ backgroundImage: `url(${member.img})` }}
      ></section>

      <section className={styles.frontContent}>
        {teams.map((t) => (
          <span key={t} className={styles.badge} data-team={t}>
            Team {t}
          </span>
        ))}
        <section className={styles.description}>
          <strong>{member.name}</strong>
          <p className={styles.cardFooter}>{member.fullname}</p>
        </section>
      </section>
    </section>
  );
};

export default MemberCard;
