import cook from "../../public/img/cook.jpg";
import clean from "../../public/img/clean.jpg";
import babysit from "../../public/img/babysit.avif";
import allround from "../../public/img/allrounder.png";
import { MessageCircle } from "lucide-react";

export const featuresData = [
  {
    image: cook,
    title: "Cooks",
    icon: MessageCircle,
    description:
      "Choose between basic home-style or fancy cooking at affortable rates!",
  },
  {
    image: clean,
    title: "Clean",
    icon: MessageCircle,
    description:
      "Keep your home clean at anytime so you don't need to bother at your schedule!",
  },
  {
    image: babysit,
    title: "Babysitters",
    icon: MessageCircle,
    description:
      "Experienced babysitters and japa for all your child-care needs!",
  },
  {
    image: allround,
    title: "All-Rounder",
    icon: MessageCircle,
    description: "Experienced All round work to your lovely home!",
  },
];

export default featuresData;
