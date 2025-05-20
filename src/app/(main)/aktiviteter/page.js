"use client";

import { useEffect, useState } from "react";
import { getActivity } from "@/lib/api";
import CardAktiviteter from "@/ui/Atom/CardAktiviteter/CardAktiviteter";
import Filter from "./components/Filter";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "dayjs/locale/da";
import BuyTicketSection from "@/ui/Molekyle/BuyTicketSection/BuyTicketSection";

// gør at dator bliver danske
dayjs.locale("da");

export default function Aktiviteter() {
  const [aktiviteter, setAktiviteter] = useState([]);
  const [value, setValue] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getActivity();
      setAktiviteter(data);
    }
    fetchData();
  }, []);

  const filtered = aktiviteter
    .filter((a) => (selectedTag ? a.tag?.includes(selectedTag) : true))
    .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? 1 : -1));

  const visible = filtered.filter((a) =>
    value
      ? dayjs(a.date).isSame(value, "day") ||
        dayjs(a.date).isAfter(value, "day")
      : true
  );

  // Find alle datoer fra earliest til seneste aktivitet
  const startDate = value || (visible[0] ? dayjs(visible[0].date) : dayjs());
  const endDate = visible.length
    ? dayjs(visible[visible.length - 1].date)
    : startDate.add(7, "day"); // fallback til 1 uge frem

  const allDates = [];
  let cursor = startDate.startOf("day");
  while (cursor.isBefore(endDate) || cursor.isSame(endDate, "day")) {
    allDates.push(cursor);
    cursor = cursor.add(1, "day");
  }

  useEffect(() => {
    if (aktiviteter.length > 0 && !value) {
      setValue(dayjs());
    }
  }, [aktiviteter]);

  return (
    <div className="p-10 mt-[128px] mb-16">
      <h1 className="text-4xl font-semibold uppercase mt-20 mb-4">
        Alle aktiviteter
      </h1>
      <p className="mb-6 max-w-[553px]">
        Vikingeskibsmuseet’s kalender viser alle kommende aktiviteter. Udforsk
        vores aktiviteter for alle museumsbesøgende.
      </p>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="da">
          <DatePicker
            label="Vælg dato"
            value={value}
            className=" w-full md:w-[400px]"
            format="dddd D. MMMM YYYY"
            onChange={(newValue) => setValue(newValue)}
            slotProps={{
              textField: {
                variant: "standard", // Skift til standard variant for underline effekt
                sx: {
                  // Gennemsigtig baggrund
                  backgroundColor: "transparent",
                  // Underline styling
                  "& .MuiInputBase-root": {
                    paddingBottom: "12px", // Juster denne værdi efter behov
                  },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "hsla(36, 26%, 39%, 1)",
                    // Standard farve
                  },
                  "& .MuiInput-underline:after": {
                    borderBottomColor: "hsla(0, 0%, 85%, 1)", // Farve ved fokus
                  },
                  "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                    borderBottomColor: "rgba(0, 0, 0, 0.87)", // Farve ved hover
                  },

                  // Label styling
                  "& .MuiInputLabel-root": {
                    color: "rgba(0, 0, 0, 0.6)",
                    "&.Mui-focused": {
                      color: "hsla(0, 0%, 0%, 1)",
                    },
                  },
                  // Input tekst styling
                  "& .MuiInputBase-input": {
                    color: "#000000", // Sort tekst
                  },
                },
              },
              // Tilføj evt. popper styling hvis nødvendigt
              popper: {
                sx: {
                  "& .MuiPaper-root": {
                    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                  },
                },
              },
            }}
          />
        </LocalizationProvider>
        {value && (
          <button
            onClick={() => setValue(null)}
            className="text-sm text-bw-950 underline hover:font-semibold"
          >
            Ryd dato
          </button>
        )}

        <Filter
          tags={[...new Set(aktiviteter.flatMap((a) => a.tag || []))]}
          onTagSelect={setSelectedTag}
          selectedTag={selectedTag}
        />
      </div>

      {/* Viser hver dag, også uden events */}
      <div className="space-y-16 pt-12 pb-10 md:pt-[100px]">
        {allDates.map((dato) => {
          const dateStr = dato
            .format("dddd D. MMMM YYYY", { locale: "da" })
            .toLowerCase();

          const events = visible.filter((a) =>
            dayjs(a.date).isSame(dato, "day")
          );

          return (
            <div
              key={dateStr}
              className="grid grid-cols-1 md:grid-cols-2 border-b border-gray-200 pb-12"
            >
              <h2 className="text-[22px] font-bold md:text-center capitalize text-gray-800 mb-6 ">
                {dateStr}
              </h2>
              <div className="flex flex-col gap-3 md:gap-[22px]">
                {events.length > 0 ? (
                  events.map((aktivitet) => (
                    <CardAktiviteter
                      key={aktivitet.id}
                      src={aktivitet.image_url}
                      title={aktivitet.title}
                      dato={aktivitet.date}
                      slug={aktivitet.slug}
                      description={aktivitet.description}
                      tidspunkt={aktivitet.tidspunkt}
                    />
                  ))
                ) : (
                  <p className=" text-gray-500 ">Ingen events denne dag.</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <BuyTicketSection />
    </div>
  );
}
