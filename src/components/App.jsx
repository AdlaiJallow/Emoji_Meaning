import React from "react";
import Entry from "./Entry";
import Header from "./Header";
import emojipedia from "../emojipedia";

export default function App() {
  function createEmoji(emo) {
    return (
      <Entry
        key={emo.id}
        emoji={emo.emoji}
        name={emo.name}
        meaning={emo.meaning}
      />
    );
  }
  return (
    <div>
      <Header />
      {emojipedia.map(createEmoji)}
      {/* <Entry
        emoji="💪"
        name="Tense Biceps"
        meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      />
      <Entry
        emoji="💪"
        name="Tense Biceps"
        meaning="“You can do that!” or “I feel strong!” Arm with tense biceps. Also used in connection with doing sports, e.g. at the gym."
      /> */}
    </div>
  );
}
