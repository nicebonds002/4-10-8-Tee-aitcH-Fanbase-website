"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import MemberCard from "@/components/members/MemberCard";
import { Member } from "@/components/members/index";

export default function Members() {
  const [members, setMembers] = useState<Member[]>([]);
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/data/members.json")
      .then((res) => res.json())
      .then(setMembers)
      .catch((err) => console.error("Failed to load members:", err));
  }, []);

  // กรองสมาชิกตาม search + filter และเรียงตาม name
  const filteredMembers = members
    .filter((m) => {
      const teams = Array.isArray(m.team) ? m.team : [m.team];
      const matchesFilter = filter === "All" || teams.includes(filter);
      const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => a.name.localeCompare(b.name)); // ✅ เพิ่ม sort

  return (
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 20px",
        textAlign: "center",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "38px",
          fontWeight: 800,
          letterSpacing: "-0.5px",
          marginBottom: "10px",
        }}
      >
        สมาชิกทีมของเรา
      </h1>
      <p
        style={{
          color: "#666",
          marginBottom: "36px",
          fontSize: "15px",
        }}
      >
        ค้นหาและเลือกดูสมาชิกในแต่ละทีม
      </p>

      {/* Search */}
      <div style={{ marginBottom: "32px" }}>
        <input
          type="text"
          placeholder="ค้นหาชื่อสมาชิก..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            maxWidth: "320px",
            padding: "12px 18px",
            borderRadius: "999px",
            border: "1px solid #ddd",
            outline: "none",
            fontSize: "14px",
          }}
        />
      </div>

      {/* Filter */}
      <div
        style={{
          display: "inline-flex",
          gap: "6px",
          padding: "6px",
          borderRadius: "999px",
          background: "#f4f4f5",
          marginBottom: "48px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {["All", "BIII", "NV", "Trainee", "Captain"].map((f) => {
          const isActive = filter === f;

          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              style={{
                padding: "8px 18px",
                borderRadius: "999px",
                fontSize: "14px",
                fontFamily: "Inter",
                fontWeight: 900,
                border: "none",
                background: isActive ? "#000" : "transparent",
                color: isActive ? "#fff" : "#555",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Members Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "24px",
        }}
      >
        {filteredMembers.map((member) => (
          <MemberCard
            key={`${filter}-${search}-${member.id}`} // ✅ เพิ่ม search ใน key
            member={{
              ...member,
              img: `${member.img}?t=${Date.now()}`, // ✅ เพิ่ม timestamp ให้รูป reload ใหม่
            }}
            onClick={() =>
              (window.location.href = `/members/${member.id}`)
            }
          />
        ))}
      </div>

      {/* Empty State */}
      {filteredMembers.length === 0 && (
        <p style={{ marginTop: "60px", color: "#999" }}>
          ไม่พบสมาชิกที่ค้นหา
        </p>
      )}
    </div>
  );
}
