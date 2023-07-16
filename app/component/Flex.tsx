import Link from "next/link";
import Image from "next/image";
import React from "react";
import alexa from "/public/alexa.jpeg";
import adale from "/public/adale.webp";
import tavell from "/public/tavell.webp";
import thomas from "/public/thomas.webp";
import { BiSolidQuoteLeft } from "react-icons/bi";
import {
  BsCameraFill,
  BsCameraVideoFill,
  BsFillPencilFill,
} from "react-icons/bs";
export default function Flex() {
  return <div>Flex</div>;
}

export const Quotes_side_by_side = () => {
  return (
    <div>
      <div className="flexHeading">
        <h3>Quotes Side-by-Side</h3>
        <h4>Example 1a</h4>
      </div>
      <p className="mainP">
        Assume you have three motivational quotes to display on your web page in
        a single row (on Desktop screen size). You want the blocks to occupy the
        same height and hence adjust widths based on the length of each quote.
        These quotes are randomly picked. You don't know how long or short each
        one is, so you cannot specify widths in fixed units for them.
      </p>
      <div className="flex bg-gray-200">
        <div className="m-3 p-6 bg-blue-100 rounded-lg">
          <p className="font-serif text-lg italic text-gray-700 leading-snug mb-1">
            “The success combination in business is: Do what you do better...
            and: do more of what you do.”
          </p>
          <span className="text-sm text-gray-500">- David J. Schwartz</span>
        </div>
        <div className="m-3 p-6 bg-blue-100 rounded-lg">
          <p className="font-serif text-lg italic text-gray-700 leading-snug mb-1">
            “Give out what you most want to come back.”
          </p>
          <span className="text-sm text-gray-500">- Robin Sharma</span>
        </div>
        <div className="m-3 p-6 bg-blue-100 rounded-lg">
          <p className="font-serif text-lg italic text-gray-700 leading-snug mb-1">
            “You don't have to be great at something to start, but you have to
            start to be great at something.”
          </p>
          <span className="text-sm text-gray-500">- Zig Ziglar</span>
        </div>
      </div>
    </div>
  );
};
{
}
export const Tabs_Spaced_Out = () => {
  return (
    <div>
      <h2 className="inline-block">justify-between</h2>
      <div className="flexHeading">
        <h3>Tabs Spaced Out</h3>
        <h4>Example 2a</h4>
      </div>
      <p className="mainP">
        Let's say you have a few tabs on your page and you want them to space
        out fully with the first tab on the extreme left, last tab on the
        extreme right and the middle ones spaced out evenly. These tabs have
        different widths. How would you do it?
      </p>
      <div className="font-sans bg-purple-200 p-12 text-center">
        <div className="bg-white p-2 rounded-full flex justify-between">
          <Link
            href={"#"}
            className="bg-blue-500 text-white py-2 px-6 rounded-full"
          >
            Profile
          </Link>
          <Link
            href={"#"}
            className="bg-blue-50 text-gray-800 py-2 px-6 rounded-full"
          >
            Notifications
          </Link>
          <Link
            href={"#"}
            className="bg-blue-50 text-gray-800 py-2 px-6 rounded-full"
          >
            Payments
          </Link>
          <Link
            href={"#"}
            className="bg-blue-50 text-gray-800 py-2 px-6 rounded-full"
          >
            Settings
          </Link>
        </div>
      </div>
    </div>
  );
};

export const Justify_Content = () => {
  const menuItems = ["Profile", "Notifications", "Payments", "Settings"];
  return (
    <div>
      <h2 className="inline-block">Justify Content</h2>
      <div className="flexHeading">
        <h3>Understanding</h3>
        <h4>Concept</h4>
      </div>
      <p className="mainP">
        The utility classes justify-* are used to control spacing of the flex
        items in the direction they are placed. In our above example, it's the
        horizontal direction. justify-between is one of the available utilities
        we just used. Some more utilities are mentioned below:
      </p>
      <div className="font-sans bg-purple-200 py-9 px-12">
        <p className="font-bold mb-3 font-mono">justify-start</p>
        <div className="bg-white p-2 rounded-full mb-7 flex justify-start">
          {menuItems.map((menu) => (
            <Link
              href={"#"}
              className="bg-blue-500 text-white py-2 px-6 rounded-full"
            >
              {menu}
            </Link>
          ))}
        </div>
        <p className="font-bold mb-3 font-mono">justify-end</p>
        <div className="bg-white p-2 rounded-full mb-7 flex justify-end">
          {menuItems.map((menu) => (
            <Link
              href={"#"}
              className="bg-blue-500 text-white py-2 px-6 rounded-full"
            >
              {menu}
            </Link>
          ))}
        </div>
        <p className="font-bold mb-3 font-mono">justify-between</p>
        <div className="bg-white p-2 rounded-full mb-7 flex justify-between">
          {menuItems.map((menu) => (
            <Link
              href={"#"}
              className="bg-blue-500 text-white py-2 px-6 rounded-full"
            >
              {menu}
            </Link>
          ))}
        </div>
        <p className="font-bold mb-3 font-mono">justify-around</p>
        <div className="bg-white p-2 rounded-full mb-7 flex justify-around">
          {menuItems.map((menu) => (
            <Link
              href={"#"}
              className="bg-blue-500 text-white py-2 px-6 rounded-full"
            >
              {menu}
            </Link>
          ))}
        </div>
        <p className="font-bold mb-3 font-mono">justify-evenly</p>
        <div className="bg-white p-2 rounded-full mb-7 flex justify-evenly">
          {menuItems.map((menu) => (
            <Link
              href={"#"}
              className="bg-blue-500 text-white py-2 px-6 rounded-full"
            >
              {menu}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = () => {
  return (
    <div>
      <h2 className="inline-block">justify-between</h2>
      <div className="flexHeading">
        <h3>Card with Previous & Next Links</h3>
        <h4>Example 2b</h4>
      </div>
      <p className="mainP">
        Many times we need two elements at the extreme ends of a section /
        container, like these "Prev" and "Next" buttons placed at the extreme
        ends of a card. This is a great example of flexbox with justify-*
        utilities used for alignment.
      </p>
      <div className="bg-gray-200 text-gray-600 p-9">
        <div className="bg-white p-9 max-w-xs rounded-lg m-8">
          <h1 className="font-bold text-3xl text-blue-600">CSS Flex & Grid</h1>
          <p className="mt-4">
            This book takes a completely different approach. I won't teach you
            the things flex and grid can do. Instead, I will first show you some
            components and layouts and make you think how to build them using
            the CSS concepts you already know. Now you have a problem, and you
            want a solution.
          </p>
          <div className="links flex justify-between">
            <Link
              href="#"
              className="mt-4 px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm"
            >
              {" "}
              Prev{" "}
            </Link>
            <Link
              href="#"
              className="mt-4 px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm"
            >
              {" "}
              Next{" "}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TeamProfiles = () => {
  return (
    <div>
      <h2 className="inline-block">justify-around</h2>
      <div className="flexHeading">
        <h3>Team Profiles</h3>
        <h4>Example 2c</h4>
      </div>
      <p className="mainP">
        Assume you need to design a "Team" section to display profiles of four
        people as you can see below. Notice that there is some space to the
        extreme right and left. his is best achieved with flexbox and
        justify-around class for the container.
      </p>
      <div className="flex justify-around text-center m-8">
        <div>
          <Image
            src={alexa}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top shrink-0 "
          ></Image>
          <h5>Alexa Kardi</h5>
          <p className="p2">Founder & CEO</p>
        </div>
        <div>
          <Image
            src={tavell}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Tavell Monroe</h5>
          <p className="p2">Web Developer</p>
        </div>
        <div>
          <Image
            src={adale}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Adale Smith</h5>
          <p className="p2">Marketing Specialist</p>
        </div>
        <div>
          <Image
            src={thomas}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Thomas Mason</h5>
          <p className="p2">UX Designer</p>
        </div>
      </div>
    </div>
  );
};

export const FlexWrap = () => {
  return (
    <div>
      <h2 className="inline-block">Flex Wrap</h2>
      <div className="flexHeading">
        <h3>Responsive Team Profiles</h3>
        <h4>Example 3a</h4>
      </div>
      <p className="mainP">
        The above examples work great with desktop screen sizes. But try
        resizing the output panel to a mobile screen size and you will either
        notice a horizontal scrollbar or the design breaks in some way. How can
        we make those items move to next row for smaller screens like this?
      </p>
      <div className="flex justify-around flex-wrap text-center m-8">
        <div>
          <Image
            src={alexa}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top shrink-0 "
          ></Image>
          <h5>Alexa Karim</h5>
          <p className="p2">Founder & CEO</p>
        </div>
        <div>
          <Image
            src={tavell}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Tavell Monroe</h5>
          <p className="p2">Web Developer</p>
        </div>
        <div>
          <Image
            src={adale}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Adale Smith</h5>
          <p className="p2">Marketing Specialist</p>
        </div>
        <div>
          <Image
            src={thomas}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Thomas Mason</h5>
          <p className="p2">Founder & CEO</p>
        </div>
      </div>
    </div>
  );
};

export function LogosWrapped() {
  return (
    <div>
      <h2 className="inline-block">Flex Wrap</h2>
      <div className="flexHeading">
        <h3>Logos Wrapped</h3>
        <h4>Example 3b</h4>
      </div>
      <p className="mainP">
        Let's say you need to display a few logos of your clients in a row with
        spaces between and around them and you want them to be responsive on
        smaller screens. You can use justify-around for the spacing and the
        flex-wrap class to wrap the logos.
      </p>
      <div className="p-12 text-center bg-gray-100">
        <h3>Top Clients</h3>
        <div className="mt-6 flex justify-around flex-wrap">
          <Image
            src={"/safeLogo.png"}
            alt="logo"
            width={600}
            height={600}
            className="w-24 h-12 mx-4 mb-2"
          />
          <Image
            src={"/circleaiLogo.png"}
            alt="logo"
            width={600}
            height={600}
            className="w-24 h-12 mx-4 mb-2"
          />
          <Image
            src={"/onpointLogo.png"}
            alt="logo"
            width={600}
            height={600}
            className="w-24 h-12 mx-4 mb-2"
          />
          <Image
            src={"/ThirusLogo.png"}
            alt="logo"
            width={600}
            height={600}
            className="w-24 h-12 mx-4 mb-2"
          />
        </div>
      </div>
    </div>
  );
}

export const IconAndText = () => {
  return (
    <div>
      <h2 className="inline-block">Align Items</h2>
      <div className="flexHeading">
        <h3>Icon and Text</h3>
        <h4>Example 4a</h4>
      </div>
      <p className="mainP">
        Let's look at another simple use-case of flexbox. An icon and text
        placed next to each other vertically centered.
      </p>
      <div className="flex items-center m-12">
        <Image
          src={"/playIcon.png"}
          alt="icon"
          width={200}
          height={200}
          className="h-20 w-20 mr-3 p-2"
        />
        <span className="font-bold text-lg">Video Conference</span>
      </div>
      <div>
        <div className="flexHeading">
          <h3>Understanding Align Items</h3>
          <h4>Concept</h4>
        </div>
        <p className="mainP">
          The justify-* utilities allow us to control the spacing and alignment
          of the flex items in the direction they are placed (Horizontally in
          all our previous examples). While items-* utilities allow us to
          control the alignment in its perpendicular direction. This
          illustration might give you a better idea:
        </p>
        <div className="flex flex-wrap">
          <div className="flex items-stretch m-7">
            <Image
              src={"/playIcon.png"}
              alt="icon"
              width={200}
              height={200}
              className="h-16 w-16 "
            />
            <span className="font-bold text-lg border border-gray-400 px-3">
              Stretch
            </span>
          </div>
          <div className="flex items-center m-7">
            <Image
              src={"/playIcon.png"}
              alt="icon"
              width={200}
              height={200}
              className="h-16 w-16 "
            />
            <span className="font-bold text-base border border-gray-400 px-3">
              Center
            </span>
          </div>
          <div className="flex items-start m-6">
            <Image
              src={"/playIcon.png"}
              alt="icon"
              width={200}
              height={200}
              className="h-16 w-16 "
            />
            <span className="font-bold text-lg border border-gray-400 px-3">
              Start
            </span>
          </div>
          <div className="flex items-end m-6">
            <Image
              src={"/playIcon.png"}
              alt="icon"
              width={200}
              height={200}
              className="h-16 w-16 "
            />
            <span className="font-bold text-lg border border-gray-400 px-3">
              End
            </span>
          </div>
          <div className="flex items-baseline m-6">
            <Image
              src={"/playIcon.png"}
              alt="icon"
              width={200}
              height={200}
              className="h-16 w-16 "
            />
            <span className="font-bold text-lg border border-gray-400 px-3">
              Baseline
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const ProfileCard = () => {
  return (
    <div>
      <h2 className="inline-block">Align Items</h2>
      <div className="flexHeading">
        <h3>Profile Card - Small</h3>
        <h4>Example 4b</h4>
      </div>
      <p className="mainP">
        Many times we need a component with an avatar and a couple of lines next
        to it. The items-center utility is very useful for such requirements:
      </p>
      <div className="m-14 flex flex-wrap items-center shrink-0">
        <Image
          src={thomas}
          alt="profilePic"
          width={200}
          height={200}
          className="w-20 h-20 rounded-full mr-4 object-cover "
        />
        <div>
          <h5>Matt Cooper</h5>
          <p className="p2">Designer - CircleAI</p>
        </div>
      </div>
    </div>
  );
};

export const ServicesSection = () => {
  return (
    <div>
      <h2>Align Items </h2>
      <div className="flexHeading">
        <h3>Services Section</h3>
        <h4>Example 4c</h4>
      </div>
      <p className="mainP">
        When we need to list services as in the below screenshot, the text for
        one service may occupy 2 lines and for another it may occupy 1 or 3
        lines. But we don't want to set a fixed height to keep all the boxes the
        same height. This is the best use case for the default behavior of flex
        items which can also be applied using items-stretch utility class
      </p>
      <div className="bg-gray-200 text-gray-700 p-8 flex flex-wrap justify-center items-stretch w-auto max-w-none">
        <div className="max-w-xs bg-white m-6 px-8 py-10 rounded-lg shadow-md text-center">
          <BsCameraFill className="h-10 w-10 rounded-lg p-2 bg-teal-600 text-white inline-block" />
          <h5 className="mt-4">Photo Shoot</h5>
          <p className="p2 mt-4">
            In photo shoot we deliver best photo of your memory.
          </p>
        </div>

        <div className="max-w-xs bg-white m-6 px-8 py-10 rounded-lg shadow-md text-center">
          <BsCameraVideoFill className="h-10 w-10 rounded-lg p-2 bg-teal-600 text-white inline-block" />
          <h5 className="mt-4">Video Production</h5>
          <p className="p2 mt-4">
            In video production we deliver best videos of your event. you can
            use this option for your family, friends, & office event. best
            options available.
          </p>
        </div>

        <div className="max-w-xs bg-white m-6 px-8 py-10 rounded-lg shadow-md text-center">
          <BsFillPencilFill className="h-10 w-10 rounded-lg  p-2 bg-teal-600 text-white inline-block" />
          <h5 className="mt-4">Digital Illustration</h5>
          <p className="p2 mt-4">
            In Digital Illustration we provide best all digital solution of your
            personal & business requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export const FrequentQuestions = () => {
  return (
    <div>
      <h2>Align Items</h2>
      <div className="flexHeading">
        <h3>Frequent Questions</h3>
        <h4>Example 4d</h4>
      </div>
      <p className="mainP">
        Look at this example where some questions are preceded by numbers
        aligned to the top. Try using one of the items-* utilities to make this
        happen before looking at the working
      </p>
      <div className="bg-gray-200 p-8">
        <div className="max-w-md bg-white mx-auto p-5">
          <h6 className="text-center">
            <span className="text-red-600">Frequent</span> Questions
          </h6>
          <div className="max-w-md w-auto my-6 flex items-start">
            <span className="bg-red-600 text-white font-bold text-xl py-1 px-3 rounded mr-4">
              1
            </span>
            <div>
              <h6>Whom is this event intended for?</h6>
              <p className="mt-1">
                Rose event is organized for both aspiring and accomplished
                designers, developers and marketers around the world.
              </p>
            </div>
          </div>
          <div className="max-w-md w-auto my-6 flex items-start">
            <span className="bg-red-600 text-white font-bold text-xl py-1 px-3 rounded mr-4">
              2
            </span>
            <div>
              <h6>Why should I come maybe it's a waste of time?</h6>
              <p className="mt-1">
                You should come to Rose this year because it will be one of the
                most information packed events of the year.
              </p>
            </div>
          </div>
          <div className="max-w-md w-auto my-6 flex items-start">
            <span className="bg-red-600 text-white font-bold text-xl py-1 px-3 rounded mr-4">
              3
            </span>
            <div>
              <h6>Any restrictions that I should be aware of?</h6>
              <p className="mt-1">
                Yes you definitely need to leave your preconceptions behind,
                keep an open mind and enjoy the presentations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const CenterADiv = () => {
  return (
    <div>
      <h2>Align Items</h2>
      <div className="flexHeading">
        <h3>Center a div</h3>
        <h4>Example 4e</h4>
      </div>
      <p className="mainP">
        This is something you will always encounter. You want to center a div or
        any element within its parent, but there's no straightforward way to
        center it both horizontally and vertically. With flexbox, using the
        justify-* and items-* utilities, it's super easy.
      </p>
      <div className="w-full h-screen flex bg-teal-100 text-gray-700">
        <div className="m-auto">I'm at the center of this div</div>
      </div>
    </div>
  );
};
export const WelcomeScreen = () => {
  return (
    <div>
      <h2>Flex Direction</h2>
      <div className="flexHeading">
        <h3>Welcome Screen</h3>
        <h4>Example 5a</h4>
      </div>
      <p className="mainP">
        Here's an example you will come across a lot. Two or more items
        vertically centered within its container. <br /> Simple add the flex,
        flex-col and justify-center classes to the parent div:
      </p>
      <div className="bg-gray-300 mt-16 w-80 mx-auto rounded-md text-center p-10 h-[28rem] flex flex-col justify-center">
        <a
          href="#"
          className="mt-4 py-2 px-4  rounded-md border border-cyan-500 bg-cyan-500 text-white"
        >
          Login
        </a>
        <a
          href="#"
          className="mt-4 py-2 px-4 rounded-md border border-cyan-500 "
        >
          Create account
        </a>
      </div>
    </div>
  );
};

export const TestimonialCard = () => {
  return (
    <div>
      <h2>Flex Direction</h2>
      <div className="flexHeading">
        <h3>Testimonial Card</h3>
        <h4>Example 5b</h4>
      </div>
      <p className="mainP">
        Assume you have a testimonial card with fixed height. Within the card,
        there's a quote icon at the top, customer name at the bottom and the
        testimonial text at the middle. The testimonial text can vary in length,
        but needs to be equally spaced from the icon and the name
      </p>
      <div className="bg-gray-200 w-72 h-96 p-8 rounded-xl mt-20 mx-auto flex flex-col justify-between">
        <BiSolidQuoteLeft className="text-5xl text-purple-600 font-bold" />
        <p>
          I just finished my trial period and was so amazed with the support and
          good results that I purchased the Pro version for my business.
        </p>
        <h5>John Doe</h5>
      </div>
    </div>
  );
};

export const AlternatingListOfProfiles = () => {
  return (
    <div>
      <h2>Flex Direction</h2>
      <div className="flexHeading">
        <h3>Alternating List of Profiles</h3>
        <h4>Example 5c</h4>
      </div>
      <p className="mainP">
        Let's say you have to list some profiles on your page. To break the
        monotony, you'd like to alternate the photos and text like this. <br />
        The even: prefix helps apply the row-reverse direction only the the even
        child elements. This solution is helpful when you are using frameworks,
        where you have the profiles data stored in objects and you display them
        using loops.
      </p>
      <div className="max-w-xl mx-auto mt-16 ">
        <div className="mt-5 flex items-center even:flex-row-reverse even:text-right">
          <Image
            src={alexa}
            alt="alexaPic"
            className="h-36 object-cover m-5 min-w-[9rem]"
          />

          <div className="">
            <h6>Alexa Karim</h6>
            <p className="text-sm text-gray-500">Founder and CEO</p>
            <p className="mt-3 leading-snug">
              I am the Founder and CEo of this company, I work so hard my aim to
              become this company in the list of world most popular company. our
              business expends in Europe to Asia.{" "}
            </p>
          </div>
        </div>
        <div className="mt-5 flex items-center even:flex-row-reverse even:text-right">
          <Image
            src={thomas}
            alt="alexaPic"
            className="h-36 object-cover m-5 min-w-[9rem]"
          />

          <div className="">
            <h6>Thomas Roshan</h6>
            <p className="text-sm text-gray-500">Web Developer</p>
            <p className="mt-3 leading-snug">
              I am the Founder and CEo of this company, I work so hard my aim to
              become this company in the list of world most popular company. our
              business expends in Europe to Asia.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export const InlineSubscribeForm = () => {
  return (
    <div>
      <h2>Flex Grow</h2>
      <div className="flexHeading">
        <h3>Inline Subscribe Form</h3>
        <h4>Example 6a</h4>
      </div>
      <p className="mainP">
        Here is a subscribe form with a text input and a button displayed in a
        single row. So flexbox is the best solution, but how do you make the
        text input occupy all the available horizontal space of its parent
        container?
      </p>
      <div className="max-w-2xl my-12 mx-auto  p-8 bg-gray-200">
        <div className="w-auto max-w-none flex">
          <input
            type="email"
            placeholder="Email Address"
            className="flex-grow py-3 px-6 rounded-l-md border border-gray-500"
          />
          <button
            type="submit"
            className="py-3 px-6 rounded-r-md bg-teal-700 flex-grow text-white"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export const StickyFooter = () => {
  return (
    <div>
      <h2>Flex Grow</h2>
      <div className="flexHeading">
        <h3>Sticky Footer</h3>
        <h4>Example 6b</h4>
      </div>
      <p className="mainP">
        Ever faced a situation where your main content is too small, making your
        footer appear somewhere in the middle of the page instead of at the
        bottom? The easiest solution to this is using flexbox for the whole
        layout, with column direction and adding flex-grow to the main content.
        text input occupy all the available horizontal space of its parent
        container?
      </p>
      <div className="flex flex-col min-h-[440px] sm:min-h-[550px]">
        <h6>Main Content</h6>
        <ul className="flex-grow">
          <li className="h-1 w-full bg-gray-300 my-10"></li>
          <li className="h-1 w-full bg-gray-300 my-10"></li>
          <li className="h-1 w-full bg-gray-300 my-10"></li>
        </ul>
        <div className="bg-blue-300 p-6 rounded-md">Footer</div>
      </div>
    </div>
  );
};

export const CardWithHeaderAndFooter = () => {
  return (
    <div>
      <h2>Flex Grow</h2>
      <div className="flexHeading">
        <h3>Card with Header & Footer</h3>
        <h4>Example 6c</h4>
      </div>
      <p className="mainP">
        This one is very similar to our previous example. Let's say we have a
        card of a specific height - like a blog post preview with title (as header), an excerpt and a "Read more" button (as footer). The excerpt might sometimes be small, but you would want your button to "stick" to the bottom of the card regardless of the height of the excerpt.
      </p>
      <div className="bg-gray-300 w-80 p-8 rounded-md h-96 flex flex-col">
        <h5>The Power of CSS Flexbox</h5>
        <p className="mt-4 flex-grow">
          The real power of flexbox is not in its layout properties (even
          though, those are amazing), but in its ability to resize items based
          on the size of other elements on your page. This is done via 3
          different properties flex-grow , flex-shrink , and flex-basis.
          </p>
          <Link href={"#"} className="bg-teal-700 text-white px-4 py-2 rounded-md text-center ">Read more</Link>
      </div>
    </div>
  );
};
