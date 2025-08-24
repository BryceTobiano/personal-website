import Card from "@/app/(components)/Card/card";
import Title from "@/app/(components)/Texts/title";
import Heading1 from "@/app/(components)/Texts/heading1";
import Heading2 from "@/app/(components)/Texts/heading2";
import Heading3 from "@/app/(components)/Texts/heading3";
import Subheading from "@/app/(components)/Texts/subheading";
import Text from "@/app/(components)/Texts/text";
import TitleMono from "@/app/(components)/Texts/titlemono";
export const metadata = {
  title: 'Bryce Tobiano | Test',
  description: 'Some things I have done!'
};

export default function Portfolio() {
  return (
    <>
        <Title>TITLE</Title>

        <TitleMono>HEADING 1 - A FULLY CUSTOM<br />SYSTOLIC ARRAY LAYOUT</TitleMono>
        <p>Title Description</p>

        <Heading2>HEADING 2 - TL;DR</Heading2>
        <Heading1>1. MOTIVATION</Heading1>
        <Subheading>Subheading - Why systolic Arrays</Subheading>
        <Text>In the most general sense, a systolic array is a parallel computing architecture group where some form of process units are coupled together to perform computationally heavy tasks in a pipelined manner.</Text>

    </>
  );
}
