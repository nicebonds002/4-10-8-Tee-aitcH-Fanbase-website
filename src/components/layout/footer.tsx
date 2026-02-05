import "@/components/layout/footer.css";

export default function Footer() {
  return (
    <footer className="idol-footer">
      <div className="idol-footer-container">
        <p className="idol-copyright">
          © {new Date().getFullYear()} My Idol Group Official Website
        </p>

        <div className="idol-links">
          <a href="/news">News</a>
          <a href="/members">Members</a>
          <a href="/schedule">Schedule</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy Policy</a>
        </div>

        <p className="idol-note">
          All content and images are the property of My Idol Group.
        </p>
      </div>
    </footer>
  );
}
