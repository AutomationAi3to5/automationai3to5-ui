import React, { useState, useRef } from "react";

const Accordion = ({ title, children }) => {
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);

  // Gestion clavier : espace/entrée toggle, flèche bas focus panel
  const handleHeaderKey = (e) => {
    if (["Enter", " ", "ArrowDown"].includes(e.key)) {
      setOpen((v) => !v);
      if (e.key === "ArrowDown" && panelRef.current) {
        setTimeout(() => panelRef.current.focus(), 100);
      }
    }
  };

  return (
    <div className="mb-3">
      <button
        className="accordion-header"
        aria-expanded={open}
        aria-controls="panel-1"
        id="accordion-1"
        tabIndex="0"
        onClick={() => setOpen((v) => !v)}
        onKeyDown={handleHeaderKey}
        style={{
          width: "100%",
          textAlign: "left",
          background: open ? "var(--primary)" : "var(--secondary)",
          color: "var(--text)",
          padding: ".9em 1.1em",
          borderRadius: "12px",
          fontWeight: 600,
          border: "none",
          cursor: "pointer",
        }}
      >
        {open ? "– " : "+ "} {title}
      </button>
      <div
        className="accordion-panel"
        id="panel-1"
        style={{ display: open ? "block" : "none", outline: "none" }}
        ref={panelRef}
        tabIndex={open ? 0 : -1}
        aria-label={title}
      >
        <div className="card" style={{ marginTop: 12 }}>{children}</div>
      </div>
    </div>
  );
};

export default Accordion;

