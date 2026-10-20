"use client";

import { useState } from "react";
import { lanes, projects, type Lane } from "@/data/work";
import { Icon } from "./icons";

type Filter = "All" | Lane;

export function WorkBench() {
  const [lane, setLane] = useState<Filter>("All");
  const visible =
    lane === "All" ? projects : projects.filter((project) => project.lane === lane);

  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <div className="section-head">
        <h2 id="work-title">Work</h2>
        <div className="lanes" role="group" aria-label="Filter work">
          {lanes.map((item) => (
            <button
              key={item}
              type="button"
              className="lane-btn"
              aria-pressed={lane === item}
              onClick={() => setLane(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="empty">
          Nothing in this lane.{" "}
          <button type="button" className="text-btn" onClick={() => setLane("All")}>
            Show all work
          </button>
        </p>
      ) : (
        <ol className="index">
          {visible.map((project) => (
            <li key={project.name} className="project">
              <div className="project-meta">
                <p>{project.lane}</p>
                <p>{project.stack}</p>
              </div>
              <div className="project-body">
                <h3>
                  <a href={project.source}>{project.name}</a>
                </h3>
                <p>{project.summary}</p>
                {project.parts ? (
                  <dl className="parts">
                    {project.parts.map((part) => (
                      <div key={part.name}>
                        <dt>{part.name}</dt>
                        <dd>{part.note}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                <p className="project-links">
                  <a href={project.source}>
                    Source <Icon name="arrow" />
                  </a>
                  {project.live ? (
                    <a href={project.live}>
                      Open site <Icon name="arrow" />
                    </a>
                  ) : null}
                </p>
              </div>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
