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
  text: "A fully integrated financial products",
  data: [
    {
      image: Service1,
      main: "Global Payment Acceptance",
      description: "We facilitates seamless payment acceptance worldwide, ensuring businesses can effortlessly transact on a global scale",
      cta: "Explore Page",
    },
    {
      image: Service2,
      main: "Enhanced Authorization",
      description: "Leveraging advanced algorithms and fraud detection mechanisms, FeanPay significantly boosts authorization rates. ",
      cta: "Explore Page",
    },
    {
      image: Service3,
      main: "Localized Optimization",
      description: "FeanPay goes beyond borders by optimizing the checkout experience for each market",
      cta: "Explore Page",
    },
  ],
  firstDetails: {
    image: firstImage,
    header:
      "Empowering Financial Connections and Sustaining Growth with Feanpay.",
    data: [
      {
        icon: <IoCheckmarkCircle />,
        text: "Unlocking seamless connections with the best financial solutions.",
      },
      {
        icon: <IoCheckmarkCircle />,
        text: "Advisor success for a thriving customer experience.",
      },
      {
        icon: <IoCheckmarkCircle />,
        text: "Driving business-to-consumer interactions for sustained growth.",
      },
    ],
    cta: "Start Your Financial Journey",
  },
  secondDetails: {
    image: secondImage,
    header:
      "Innovative Solutions for Financial Connectivity - Your Journey Starts Here.",
    data: [
      {
        icon: <PiLeaf />,
        text: "Connecting customers with the best financial innovations.",
      },
      {
        icon: <FiEye />,
        text: "Advisor success for a visionary customer launch experience.",
      },
      {
        icon: <MdOutlineWbSunny />,
        text: "Business-to-consumer strategies for a thriving financial future.",
      },
    ],
    cta: "Start Your Financial Journey",
  },
};

const testimonial = {
  header: "Optimize your financial transactions with Feanpay.",
  icon1: <BsFillArrowLeftCircleFill />,
  icon: <BsFillArrowRightCircleFill />,
  data: [
    {
      main: "Streamline global transactions with Feanpay's disruptive financial network.",
      image: Testimonial1,
      textName: "Currency Wizard",
      textRole: "Manager @ Feanpay",
    },
    {
      main: "Unlock the potential of financial strategies and seamless user experiences.",
      image: Testimonial2,
      textName: "Transaction Alchemist",
      textRole: "Manager @ Feanpay",
    },
    {
      main: "Lead your team to success with Feanpay's advanced financial tools.",
      image: Testimonial3,
      textName: "Money Maestro",
      textRole: "Team Leader @ Feanpay",
    },
    {
      main: "Experience the efficiency of Feanpay in global financial partnerships.",
      image: Testimonial1,
      textName: "Currency Wizard",
      textRole: "Manager @ Feanpay",
    },
    {
      main: "Navigate financial landscapes with confidence using Feanpay's insights.",
      image: Testimonial2,
      textName: "Transaction Alchemist",
      textRole: "Manager @ Feanpay",
    },
    {
      main: "Maximize your financial potential with Feanpay's monetization strategies.",
      image: Testimonial3,
      textName: "Money Maestro",
      textRole: "Team Leader @ Feanpay",
    },
  ],
  main: {
    header:
      "Connect with the best in financial technology and keep your transactions efficient and open.",
    data: [
      {
        text: "Optimize your financial transactions with Feanpay's cutting-edge solutions.",
        icon: <FaChevronCircleDown />,
        icon2: <FaChevronCircleUp />,
      },
      {
        text: "Explore the possibilities of financial innovation with Feanpay.",
        icon: <FaChevronCircleDown />,
        icon2: <FaChevronCircleUp />,
      },
    ],
  },
  content: "Experience seamless and secure financial transactions with Feanpay, ensuring efficiency and peace of mind."
};

const blog = {
  header: "Insights from Feanpay",
  text: "Explore the latest in financial technology, market trends, and innovation.",
  data: [
    {
      image: Blog1,
      text: "Financial Technology",
      date: "February 15, 2022",
      details:
        "Unlocking the potential of global transactions and the role of AI in financial optimization.",
      imageMain: User1,
      user: "Financial Explorer",
    },
    {
      image: Blog2,
      text: "Secure Transactions",
      date: "February 18, 2022",
      details:
        "Ensuring a safe and seamless experience: How Feanpay enhances transaction security.",
      imageMain: User2,
      user: "Security Sentinel",
    },
    {
      image: Blog3,
      text: "Market Strategies",
      date: "February 20, 2022",
      details:
        "Navigating market dynamics: Strategies for success in the ever-evolving financial landscape.",
      imageMain: User3,
      user: "Market Navigator",
    },
  ],
  main: {
    header: "Explore the Future of Financial Connectivity with Feanpay",
    text: "Start your journey now",
  },
};


const hero = {
  header: "A special credit card made for Developers.",
  text: "Millions of companies of all sizes use Feanpay online and in person to accept payments, send payouts, automate financial processes, and ultimately grow revenue.",
  cta1: "Get Started",
  cta2: "Explore",
  heroImage: heroImage,
  heroBanner: [ 
    {image: Boldo},
    {image: Presto}
  ]
};

const footer = {
  logo: FooterLogo,
  text: "Innovative financial connectivity, business model optimization, user-friendly interface, and a dynamic launch strategy define Feanpay's presence in the digital landscape.",
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
      url: "https://feanpay.netlify.app/",
    },
  ],
};

export { serviceData, testimonial, blog, hero, footer, navbar };
