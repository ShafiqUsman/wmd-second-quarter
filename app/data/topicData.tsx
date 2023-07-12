
// Topic Cover on 4th July' 2023
import { JsxElement } from "typescript";
import { AlignItemsConcept, Card, FlexWrap, IconAndText, Justify_Content, LogosWrapped, Quotes_side_by_side, Tabs_Spaced_Out, TeamProfiles } from "../component/Flex";

interface TopicCover {
  title: string;
  id: string;
  class: "onSite" | "onLine" | "Others";
  target?: JSX.Element;
  subMenu?: boolean;
}

export const topicCoverData: TopicCover[] = [
  {
    title: "tailwind css",
    class: "onSite",
    id: "",
    subMenu: true,
  },
  {
    title: "Flex",
    class: "onSite",
    id: "",

  },
  {
    title: "Quotes_side_by_side",
    class: "onSite",
    id: "",
    target: <Quotes_side_by_side />,
  },
  {
    title: "Tabs_Spaced_Out",
    class: "onSite",
    id: "",
    target: <Tabs_Spaced_Out />,
  },
  {
    title: "Justify Content",
    class: "onSite",
    id: "",
    target: <Justify_Content />,
  },
  {
    title: "Card with Prev & Next Link",
    class: "onSite",
    id: "",
    target: <Card />,
  },
  {
    title: "Team Profiles",
    class: "onSite",
    id: "",
    target: <TeamProfiles />,
  },
  {
    title: "Flex Wrap",
    class: "onSite",
    id: "",
    target: <FlexWrap />,
  },
  {
    title: "Logos Wrapped",
    class: "onSite",
    id: "",
    target: <LogosWrapped />,
  },
  {
    title: "Icon and Text",
    class: "onSite",
    id: "",
    target: <IconAndText />,
  },
  {
    title: "Align Items Concept",
    class: "onSite",
    id: "",
    target: <AlignItemsConcept />,
  },
];
