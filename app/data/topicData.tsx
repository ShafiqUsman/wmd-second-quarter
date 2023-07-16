
// Topic Cover on 4th July' 2023
import { JsxElement } from "typescript";
import { AlternatingListOfProfiles, Card, CardWithHeaderAndFooter, CenterADiv, FlexWrap, FrequentQuestions, IconAndText, InlineSubscribeForm, Justify_Content, LogosWrapped, ProfileCard, Quotes_side_by_side, ServicesSection, StickyFooter, Tabs_Spaced_Out, TeamProfiles, TestimonialCard, WelcomeScreen } from "../component/Flex";

interface TopicCover {
  title: string;
  id: string;
  class: "onSite" | "onLine" | "Others";
  target?: JSX.Element;
  subMenu?: boolean;
}

export const topicCoverData: TopicCover[] = [
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
    title: "Profile Card - Small",
    class: "onSite",
    id: "",
    target: <ProfileCard />,
  },
  {
    title: "Services Section",
    class: "onSite",
    id: "",
    target: <ServicesSection />,
  },
  {
    title: "Frequent Questions",
    class: "onSite",
    id: "",
    target: <FrequentQuestions />,
  },
  {
    title: "Center a div",
    class: "onSite",
    id: "",
    target: <CenterADiv />,
  },
  {
    title: "Welcome Screen",
    class: "onSite",
    id: "",
    target: <WelcomeScreen />,
  },
  {
    title: "Testimonial Card",
    class: "onSite",
    id: "",
    target: <TestimonialCard />,
  },
  {
    title: "Alternating List of Profiles",
    class: "onSite",
    id: "",
    target: <AlternatingListOfProfiles />,
  },
  {
    title: "Inline Subscribe Form",
    class: "onSite",
    id: "",
    target: <InlineSubscribeForm />,
  },
  {
    title: "Sticky Footer",
    class: "onSite",
    id: "",
    target: <StickyFooter />,
  },
  {
    title: "Card with Header & Footer",
    class: "onSite",
    id: "",
    target: <CardWithHeaderAndFooter />,
  },
];
