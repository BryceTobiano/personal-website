import Card from "@/app/(components)/Card/card";
import Title from "@/app/(components)/Texts/title";
import Heading1 from "@/app/(components)/Texts/heading1";
import Heading2 from "@/app/(components)/Texts/heading2";
import Heading3 from "@/app/(components)/Texts/heading3";
export const metadata = {
  title: 'Bryce Tobiano | Test',
  description: 'Some things I have done!'
};

export default function Portfolio() {
  return (
    <>
        <Title>TITLE</Title>
        <Heading1>HEADING 1</Heading1>
        <Heading2>HEADING 2</Heading2>
        <Heading3>HEADING 3</Heading3>
    </>
  );
}
