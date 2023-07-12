import Link from "next/link";
import Image from "next/image";
import React from "react";
import alexa from "/public/alexa.jpeg";
import adale from "/public/adale.webp";
import tavell from "/public/tavell.webp";
import thomas from "/public/thomas.webp";
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
          <h5>Alexa Kardi</h5>
          <p className="p2">Founder & CEO</p>
        </div>
        <div>
          <Image
            src={adale}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Alexa Karim</h5>
          <p className="p2">Founder & CEO</p>
        </div>
        <div>
          <Image
            src={thomas}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Alexa Karim</h5>
          <p className="p2">Founder & CEO</p>
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
          <h5>Alexa Karim</h5>
          <p className="p2">Founder & CEO</p>
        </div>
        <div>
          <Image
            src={adale}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Alexa Karim</h5>
          <p className="p2">Founder & CEO</p>
        </div>
        <div>
          <Image
            src={thomas}
            alt="profilePic"
            className="w-32 h-32 rounded-full object-cover object-top "
          ></Image>
          <h5>Alexa Karim</h5>
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
    </div>
  );
};

export const AlignItemsConcept = () => {
  return (
    <div>
      <h2 className="inline-block">Align Items Concept</h2>
      <div className="flexHeading">
        <h3>Icon and Text</h3>
        <h4>Example 4a</h4>
      </div>
      <p className="mainP">
        The justify-* utilities allow us to control the spacing and alignment of
        the flex items in the direction they are placed (Horizontally in all our
        previous examples). While items-* utilities allow us to control the
        alignment in its perpendicular direction. This illustration might give
        you a better idea:
      </p>
      <div className="flex flex-wrap">
      <div className="flex m-12">
        <Image
          src={"/playIcon.png"}
          alt="icon"
          width={200}
          height={200}
          className="h-20 w-20 "
        />
        <span className="font-bold text-lg">Stretch</span>
      </div>
      <div className="flex items-center m-12">
        <Image
          src={"/playIcon.png"}
          alt="icon"
          width={200}
          height={200}
          className="h-20 w-20 "
        />
        <span className="font-bold text-lg">Center</span>
      </div>
      <div className="flex items-start m-12">
        <Image
          src={"/playIcon.png"}
          alt="icon"
          width={200}
          height={200}
          className="h-20 w-20 "
        />
        <span className="font-bold text-lg">Start</span>
      </div>
      <div className="flex items-end m-12">
        <Image
          src={"/playIcon.png"}
          alt="icon"
          width={200}
          height={200}
          className="h-20 w-20 "
        />
        <span className="font-bold text-lg">End</span>
      </div>
      <div className="flex items-baseline m-12">
        <Image
          src={"/playIcon.png"}
          alt="icon"
          width={200}
          height={200}
          className="h-20 w-20 "
        />
        <span className="font-bold text-lg">Baseline</span>
      </div>
      </div>
    </div>
  );
};
