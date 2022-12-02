import Link from "next/link";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import Navigation from "../components/Navigation";
import Stopwatch from "../components/Stopwatch";

export default function Home() {
  return (
    <>
      <Link href="/countdown">
        <Navigation home>
          <FaRegArrowAltCircleRight color="gray" size={24} /> Countdown
        </Navigation>
      </Link>

      <Stopwatch />
    </>
  );
}
