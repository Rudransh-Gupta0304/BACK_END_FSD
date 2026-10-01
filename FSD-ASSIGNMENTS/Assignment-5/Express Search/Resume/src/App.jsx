import { useState } from "react";
import "./App.css";

const App = () => {
  const [search, setSearch] = useState("");

  const documents = [
    {
      name: "FSD",
      file: "Resume(2).pdf",
      category: "Development",
      size: "PDF",
    },
    {
      name: "React",
      file: "React-Notes.pdf",
      category: "Frontend",
      size: "PDF",
    },
    {
      name: "JavaScript",
      file: "JavaScript-Notes.pdf",
      category: "Programming",
      size: "PDF",
    },
  ];

  const filteredDocuments = documents.filter((doc) =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <span className="logo-icon">N</span>
          <span>Notes<span>Hub</span></span>
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Notes</a>
          <a href="#">About</a>
        </div>

        <div className="profile">
          <div className="profile-circle">U</div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">

        <div className="hero-content">
          <span className="badge">
            ✦ STUDENT KNOWLEDGE HUB
          </span>

          <h1>
            Your Notes.
            <br />
            <span>Organized.</span>
          </h1>

          <p>
            Search, access and download your study materials
            from one simple workspace.
          </p>
        </div>

        {/* SEARCH */}
        <div className="search-box">
          <span className="search-icon">⌕</span>

          <input
            type="text"
            placeholder="Search your notes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <span className="search-shortcut">
            Ctrl K
          </span>
        </div>

      </section>

      {/* CONTENT */}
      <main className="content">

        <div className="content-header">
          <div>
            <h2>Study Materials</h2>
            <p>
              {filteredDocuments.length} resources available
            </p>
          </div>

          <button className="filter-btn">
            ☰ Filter
          </button>
        </div>

        {/* CARDS */}
        <div className="documents-grid">

          {filteredDocuments.length > 0 ? (

            filteredDocuments.map((doc) => (

              <div className="document-card" key={doc.file}>

                <div className="card-top">

                  <div className="pdf-icon">
                    PDF
                  </div>

                  <button className="more-btn">
                    ⋮
                  </button>

                </div>

                <div className="card-content">

                  <span className="category">
                    {doc.category}
                  </span>

                  <h3>{doc.name}</h3>

                  <p>
                    Study material and notes for
                    {` ${doc.name}`}.
                  </p>

                </div>

                <div className="card-footer">

                  <span className="file-type">
                    📄 {doc.size}
                  </span>

                  <a
                    href={`http://localhost:5000/files/${doc.file}`}
                    download
                  >
                    <button className="download-btn">
                      Download
                      <span>↓</span>
                    </button>
                  </a>

                </div>

              </div>

            ))

          ) : (

            <div className="empty-state">
              <div>🔎</div>
              <h3>No notes found</h3>
              <p>
                Try searching for another subject.
              </p>
            </div>

          )}

        </div>

      </main>

      {/* FOOTER */}
      <footer>
        <p>
          NotesHub © 2026 · Built for students
        </p>
      </footer>

    </div>
  );
};

export default App;