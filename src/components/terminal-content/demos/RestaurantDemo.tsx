"use client";

import { useState } from "react";

type MenuItem = "burger" | "pasta" | "salad" | "drink";
const MENU: MenuItem[] = ["burger", "pasta", "salad", "drink"];

interface Table {
  id: number;
  seated: boolean;
  orders: MenuItem[];
}

function createTables(): Table[] {
  return Array.from({ length: 6 }, (_, i) => ({
    id: i + 1,
    seated: false,
    orders: [],
  }));
}

export default function RestaurantDemo() {
  const [tables, setTables] = useState<Table[]>(createTables);

  const toggleSeat = (id: number) => {
    setTables((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, seated: !t.seated, orders: !t.seated ? t.orders : [] }
          : t
      )
    );
  };

  const addOrder = (id: number, item: MenuItem) => {
    setTables((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, orders: [...t.orders, item] } : t
      )
    );
  };

  const clearOrders = (id: number) => {
    setTables((prev) =>
      prev.map((t) => (t.id === id ? { ...t, orders: [] } : t))
    );
  };

  return (
    <div className="font-mono">
      <div className="grid grid-cols-3 gap-2">
        {tables.map((table) => (
          <div
            key={table.id}
            className={`p-3 min-h-[110px] border ${
              table.seated ? "border-terminal-green/40" : "border-white/10"
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-white text-xs">T{table.id}</span>
              <button
                type="button"
                onClick={() => toggleSeat(table.id)}
                className={`text-[11px] px-2 py-1 border cursor-pointer transition-colors ${
                  table.seated
                    ? "text-terminal-green border-terminal-green/30 hover:border-terminal-green/60"
                    : "text-white/40 border-white/10 hover:border-white/30 hover:text-white/60"
                }`}
              >
                {table.seated ? "seated" : "empty"}
              </button>
            </div>

            {table.seated && (
              <>
                <div className="flex flex-wrap gap-1 mb-2">
                  {MENU.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => addOrder(table.id, item)}
                      className="text-[10px] text-terminal-green border border-terminal-green/20 px-1.5 py-0.5 cursor-pointer hover:border-terminal-green/50 transition-colors"
                    >
                      +{item}
                    </button>
                  ))}
                </div>

                {table.orders.length > 0 && (
                  <div>
                    <div className="text-[10px] text-white/50 mb-1">orders:</div>
                    {table.orders.map((order, i) => (
                      <div key={i} className="text-[10px] text-white pl-1.5">
                        - {order}
                      </div>
                    ))}
                    <button
                      type="button"
                      onClick={() => clearOrders(table.id)}
                      className="text-[10px] text-white/30 hover:text-white/60 cursor-pointer mt-1 border border-white/10 px-1.5 py-0.5 transition-colors"
                    >
                      clear
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
