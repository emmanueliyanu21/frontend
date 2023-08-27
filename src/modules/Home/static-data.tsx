import Service1 from "../../assets/service1.png";
import Service2 from "../../assets/service2.png";
import Service3 from "../../assets/service3.png";
import firstImage from "../../assets/cta1.png";
import secondImage from "../../assets/cta1.png";
import heroImage from "../../assets/heroImg.png";
import Boldo from "../../assets/Boldo.svg";
import Presto from "../../assets/Presto.svg";
import Blog1 from "../../assets/blog1.png";
import Blog2 from "../../assets/blog2.png";
import Blog3 from "../../assets/blog1.png";
import Testimonial1 from "../../assets/albus.png";
import Testimonial2 from "../../assets/severus.png";
import Testimonial3 from "../../assets/harry.png";
import FooterLogo from "../../assets/logoAlt.png";
import Logo from "../../assets/logo.png";
import User1 from "../../assets/harry.png";
import User2 from "../../assets/severus.png";
import User3 from "../../assets/albus.png";
import { IoCheckmarkCircle } from "react-icons/io5";
import { PiLeaf } from "react-icons/pi";
import { FiEye } from "react-icons/fi";
import { MdOutlineWbSunny } from "react-icons/md";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const serviceData = {
  header: "Our Services",
  text: "Handshake infographic mass market crowdfunding iteration.",
  data: [
    {
      image: Service1,
      main: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      cta: "Explore Page",
    },
    {
      image: Service2,
      main: "Even cooler feature title",
      description: "Learning curve network effects return on investment.",
      cta: "Explore Page",
    },
    {
      image: Service3,
      main: "Cool feature title",
      description: "Learning curve network effects return on investment.",
      cta: "Explore Page",
    },
  ],
  firstDetails: {
    image: firstImage,
    header:
      "We connect our customers with the best, and help them keep up-and stay open.",
    data: [
      {
        icon: <IoCheckmarkCircle />,
        text: "We connect our customers with the best.",
      },
      {
        icon: <IoCheckmarkCircle />,
        text: "Advisor success customer launch party.",
      },
      {
        icon: <IoCheckmarkCircle />,
        text: "Business-to-consumer long tail.",
      },
    ],
    cta: "Start Now",
  },
  secondDetails: {
    image: secondImage,
    header:
      "We connect our customers with the best, and help them keep up-and stay open.",
    data: [
      {
        icon: <PiLeaf />,
        text: "We connect our customers with the best.",
      },
      {
        icon: <FiEye />,
        text: "Advisor success customer launch party.",
      },
      {
        icon: <MdOutlineWbSunny />,
        text: "Business-to-consumer long tail.",
      },
    ],
    cta: "Start Now",
  },
};

const testimonial = {
  header: "An enterprise template to ramp up your company website.",
  icon1: <BsFillArrowLeftCircleFill />,
  icon2: <BsFillArrowRightCircleFill />,
  data: [
    {
      main: "Buyer buzz partner network disruptive non-disclosure agreement business",
      image: Testimonial1,
      textName: "Albus Dumbledore",
      textRole: "Manager @ Howarts",
    },
    {
      main: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      image: Testimonial2,
      textName: "Severus Snape",
      textRole: "Manager @ Slytherin",
    },
    {
      main: "Release facebook responsive web design business model canvas seed money monetization",
      image: Testimonial3,
      textName: "Harry Potter",
      textRole: "Team Leader @ Gryffindor",
    },
    {
      main: "Buyer buzz partner network disruptive non-disclosure agreement business",
      image: Testimonial1,
      textName: "Albus Dumbledore",
      textRole: "Manager @ Howarts",
    },
    {
      main: "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
      image: Testimonial2,
      textName: "Severus Snape",
      textRole: "Manager @ Slytherin",
    },
    {
      main: "Release facebook responsive web design business model canvas seed money monetization",
      image: Testimonial3,
      textName: "Harry Potter",
      textRole: "Team Leader @ Gryffindor",
    },
  ],
  main: {
    header:
      "We connect our customers with the best, and help them keep up-and stay open.",
    data: [
      {
        text: "We connect our customers with the best?",
        icon: <FaChevronCircleDown />,
        icon2: <FaChevronCircleUp />,
      },
      {
        text: "Android research & development rockstar?",
        icon: <FaChevronCircleDown />,
        icon2: <FaChevronCircleUp />,
      },
    ],
  },
};

const blog = {
  header: "Our Blog",
  text: "Value proposition accelerator product management venture",
  data: [
    {
      image: Blog1,
      text: "Category",
      date: "November 22, 2021",
      details:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      imageMain: User1,
      user: "Chandler Bing",
    },
    {
      image: Blog2,
      text: "Category",
      date: "November 22, 2021",
      details:
        "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
      imageMain: User2,
      user: "Rachel Green",
    },
    {
      image: Blog3,
      text: "Category",
      date: "November 22, 2021",
      details:
        "Beta prototype sales iPad gen-z marketing network effects value  proposition.",
      imageMain: User3,
      user: "Monica Geller",
    },
  ],
  main: {
    header: "An enterprise template to ramp up your company website",
    text: "Start now",
  },
};

const hero = {
  header: "Save time by building fast with Boldo Template",
  text: "Funding handshake buyer business-to-business metrics iPad partnership. First mover advantage innovator success deployment non-disclosure.",
  cta1: "Buy Template",
  cta2: "Explore",
  heroImage: heroImage,
  heroBanner: [ 
    {image: Boldo},
    {image: Presto}
  ]
};

const footer = {
  logo: FooterLogo,
  text: "Social media validation business model canvas graphical user interface launch party creative facebook iPad twitter.",
  caption: "All Rights Reserved.",
  data: [
    {
      header: "Landings",
      links: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Product",
          url: "product",
        },
        {
          name: "Services",
          url: "services",
        },
      ],
    },
    {
      header: "Company",
      links: [
        {
          name: "Home",
          url: "/",
        },
        {
          name: "Careers",
          url: "careers",
        },
        {
          name: "Services",
          url: "services",
        },
      ],
    },
    {
      header: "Resources",
      links: [
        {
          name: "Blog",
          url: "/blog",
        },
        {
          name: "Product",
          url: "product",
        },
        {
          name: "Services",
          url: "services",
        },
      ],
    },
  ],
};

const navbar = {
  logo: Logo,
  links: [
    {
      name: "Product",
      url: "product",
    },
    {
      name: "Services",
      url: "services",
    },
    {
      name: "About",
      url: "about",
    },
    {
      name: "Login",
      url: "login",
    },
  ],
};

export { serviceData, testimonial, blog, hero, footer, navbar };
