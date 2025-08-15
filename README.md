# 🗺️ Netzwerk-Visualisierung & Dokumentation

Eine interaktive Webanwendung zur Darstellung und Dokumentation von Netzwerk- und IT-Infrastruktur – vom Gebäude über Räume und Racks bis hin zu einzelnen Geräten und Ports.  
Ziel ist es, klassische statische Netzpläne (Visio, PDF) durch eine dynamische, zoombare und filterbare Ansicht zu ersetzen.

---

## 📌 Features

- **Hierarchische Darstellung**  
  Gebäude → Räume → Racks → Geräte → Ports
- **Interaktive Navigation**  
  Zoom & Pan wie bei Google Maps, Drilldown in einzelne Ebenen
- **Filterfunktionen**  
  Gerätekategorien (Switch, Rack, USV, Workstation, …), Status, Tags
- **Verbindungsvisualisierung**  
  Physische und logische Links zwischen Geräten und Standorten
- **Suche**  
  Schnelle Lokalisierung von Geräten oder Ports
- **Benutzer- und Rechteverwaltung**  
  Rollen: Admin, Editor, Viewer
- **Datenexport**  
  Pläne als PDF/PNG

---

## 🛠️ Technologie-Stack

**Frontend**
- React
- Cytoscape.js / D3.js (Graph-Visualisierung)
- TailwindCSS

**Backend**
- Node.js (Express) *oder* Python (Django/Flask)
- REST- oder GraphQL-API
- PostgreSQL oder Neo4j (Graph-DB)

**Deployment**
- Docker & Docker Compose
- Nginx als Reverse Proxy

---

## 📂 Projektstruktur

