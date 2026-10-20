import { Icon } from "./icons";

const steps = [
  {
    name: "Parse",
    icon: "file" as const,
    summary:
      "The desktop folder is a Google Takeout of Gemini and My Activity. That export is an activity log, not a chat archive. I group records into conversations, turn Claude, ChatGPT, and DeepSeek exports into one markdown file per session, and strip names before the later steps.",
  },
  {
    name: "Journey",
    icon: "path" as const,
    summary:
      "Chats that only ask the model to do a task drop out. What remains gets a topic, then small facts quoted from the person, then stages in date order. A spreadsheet sits between the two passes so a person can correct the model before extraction.",
  },
  {
    name: "Simulate",
    icon: "square" as const,
    summary:
      "A persona plays the user across several days. One crisis lands in the middle. The assistant is not trained. It reads and writes files, and the score checks whether a reply fits where the person is, agrees with a harmful claim, or turns generic after the crisis.",
  },
];

export function Mandoo() {
  return (
    <section className="mandoo" id="mandoo" aria-labelledby="mandoo-title">
      <div className="section-head">
        <h2 id="mandoo-title">Mandoo</h2>
        <p>
          A model that is not retrained. The memory is files, and those files
          are what the next prompt is allowed to see.
        </p>
      </div>
      <ol className="steps">
        {steps.map((step) => (
          <li key={step.name}>
            <Icon name={step.icon} />
            <h3>{step.name}</h3>
            <p>{step.summary}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
