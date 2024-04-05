import { useState } from "react";

import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  function handleClick(sel) {
    setSelectedTopic(sel);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2> Core concept </h2>
          <ul>
            {CORE_CONCEPTS.map((coreItem) => (
              <CoreConcept key={coreItem.title} {...coreItem} />
            ))}
          </ul>
        </section>
        <h2>Time to get started!</h2>
        <section id="examples">
          <h2>Examples </h2>
          <menu>
            <TabButton
              isSelected={selectedTopic === "components"}
              onSelect={() => handleClick("components")}
            >
              Components
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "jsx"}
              onSelect={() => handleClick("jsx")}
            >
              JSX{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "props"}
              onSelect={() => handleClick("props")}
            >
              Props{" "}
            </TabButton>
            <TabButton
              isSelected={selectedTopic === "state"}
              onSelect={() => handleClick("state")}
            >
              State{" "}
            </TabButton>
          </menu>
          {!selectedTopic ? (
            <p> Please select a topic </p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title} </h3>
              <p>{EXAMPLES[selectedTopic].description} </p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
