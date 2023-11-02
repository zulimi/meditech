import type { RegisteredComponent } from "@builder.io/sdk-qwik";
import Counter from "./counter/counter";
import introduction from "./introduction/introduction";
import latestNews from "./latest-news/latest-news";
import innovationCollaboration from "./innovation-collaboration/innovation-collaboration";
import strategicPartnership from "./strategic-partnership/strategic-partnership";

/**
 * This array is used to integrate custom components within Builder.
 * https://www.builder.io/c/docs/custom-components-intro
 *
 * These components will be found the "Custom Components"
 * section of Builder's visual editor.
 * You can also turn on "components only mode" to limit
 * editing to only these components.
 * https://www.builder.io/c/docs/guides/components-only-mode
 */
export const CUSTOM_COMPONENTS: RegisteredComponent[] = [
  {
    component: Counter,
    name: "Counter",
    inputs: [
      {
        name: "initialValue",
        type: "number",
      },
    ],
  },
  {
    component: introduction,
    name: "Introduction Section",
    noWrap: true,
    inputs: [
      {
        name: "welcomeTitle",
        type: "string"
      },
      {
        name: "shortDescription",
        type: "string"
      },
      {
        name: 'introMedia',
        type: 'file', 
        allowedFileTypes: ['jpeg', 'png', 'gif'] 
      }
    ]
  },
  {
    component: latestNews,
    name: "Latest News Section",
    noWrap: true
  },
  {
    component: strategicPartnership,
    name: "Strategic Partnership Section",
    noWrap: true
  },
  {
    component: innovationCollaboration,
    name: "Innovation and Collaboration Section",
    noWrap: true
  }
];
