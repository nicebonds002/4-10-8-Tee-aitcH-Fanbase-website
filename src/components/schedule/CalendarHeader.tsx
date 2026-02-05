type Props = {
  currentDate: Date;
  onPrev: () => void;
  onNext: () => void;
  onToday: () => void;
  onChangeMonthYear: (year: number, month: number) => void;
};

const MONTHS_TH = [
  "มกราคม",
  "กุมภาพันธ์",
  "มีนาคม",
  "เมษายน",
  "พฤษภาคม",
  "มิถุนายน",
  "กรกฎาคม",
  "สิงหาคม",
  "กันยายน",
  "ตุลาคม",
  "พฤศจิกายน",
  "ธันวาคม",
];

export default function CalendarHeader({
  currentDate,
  onPrev,
  onNext,
  onToday,
  onChangeMonthYear,
}: Props) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // ช่วงปี: -10 ถึง +10 จากปีปัจจุบันที่เลือก
  const START_YEAR = year - 10;
  const END_YEAR = year + 10;

  return (
    <div className="calendar-header">
      {/* ซ้าย */}
      <div className="header-left">
        <button className="nav-btn" onClick={onPrev} aria-label="Prev month">
          ◀
        </button>
        <button className="nav-btn" onClick={onNext} aria-label="Next month">
          ▶
        </button>
      </div>

      {/* กลาง */}
      <h2 className="calendar-title">
        {MONTHS_TH[month]} {year + 543}
      </h2>

      {/* ขวา */}
      <div className="header-right">
        {/* เลือกเดือน */}
        <select
          value={month}
          onChange={(e) =>
            onChangeMonthYear(year, Number(e.target.value))
          }
        >
          {MONTHS_TH.map((m, i) => (
            <option key={i} value={i}>
              {m}
            </option>
          ))}
        </select>

        {/* เลือกปี */}
        <select
          value={year}
          onChange={(e) =>
            onChangeMonthYear(Number(e.target.value), month)
          }
        >
          {Array.from(
            { length: END_YEAR - START_YEAR + 1 },
            (_, i) => {
              const y = START_YEAR + i;
              return (
                <option key={y} value={y}>
                  {y + 543}
                </option>
              );
            }
          )}
        </select>

        {/* Today */}
        <button className="today-btn" onClick={onToday}>
          Today
        </button>
      </div>
    </div>
  );
}
