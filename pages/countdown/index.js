import React from "react";
import Link from "next/link";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import Countdown from "../../components/Countdown";
import Navigation from "../../components/Navigation";

export default function Other() {
  return (
    <>
      <Link href="/">
        <Navigation>
          <FaRegArrowAltCircleLeft color="gray" size={24} /> Stopwatch
        </Navigation>
      </Link>

      <Countdown />
    </>
  );
}
