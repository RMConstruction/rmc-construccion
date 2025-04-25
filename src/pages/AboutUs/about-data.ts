import { Star, CheckCircle, Users } from "lucide-react";
import imgAbout from "../../../public/assets/img/about-us-2.jpeg";

export const breadcrumbItems = [
  { label: "Home", href: "/" },
  { label: "About Us" }
];

export const historyContent = {
  title: "Our History",
  paragraphs: [
  
    "From the very beginning, our mission has remained steadfast: to design spaces that blend simplicity, elegance, and functionality. Every project we undertake—whether residential or commercial—reflects a deep commitment to thoughtful design, clear communication, and meticulous attention to detail.",
    "Through the years, we've forged lasting relationships with our clients through dependable service, innovative thinking, and a passion for purposeful design. By merging modern techniques with timeless architectural principles, we deliver well-thought-out solutions that are both beautiful and practical.",
    "Today, RM Construction & Design Studio Inc. continues to honor our core values, ensuring that every project embodies our passion for design and our unwavering dedication to client satisfaction. We are excited to help you bring your next space to life—with clarity, creativity, and care."
  ],
  image: imgAbout
};

export const valuesContent = [
  {
    icon: Star,
    title: "Excellence in Quality",
    paragraphs: [
      "We believe in delivering exceptional quality—every detail matters. Our team ensures that every aspect of a project is meticulously executed to meet industry-leading standards and exceed client expectations.",
      "Honesty and clear communication are at the heart of our operations. We maintain open dialogue throughout each project to foster lasting relationships with clients, collaborators, and community partners."
    ]
  },
  {
    icon: CheckCircle,
    title: "Sustainability & Innovative practices",
    paragraphs: [
      "We take pride in recommending sustainable design solutions—such as eco-conscious materials and energy-efficient planning—to support responsible development and minimize environmental impact.",
      "By combining modern technology with design-forward thinking, we create thoughtful, functional spaces that reflect our clients’ goals and elevate everyday living."
    ]
  },
  {
    icon: Users,
    title: "Collaboration & Partnership",
    paragraphs: [
      "We believe that great outcomes are the result of strong teamwork. Whether working alongside homeowners, architects, or project professionals, we cultivate a collaborative environment that ensures clarity, mutual understanding, and shared success."
    ]
  }
];

export const ctaContent = {
  title: "Let's work together",
  description: "Ready to start your next project with a team that cares as much about quality as you do? Contact us today.",
  buttonText: "Contact Us",
  link: "/contact"
};
