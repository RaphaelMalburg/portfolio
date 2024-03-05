import { Body, Button, Column, Container, Head, Heading, Html, Img, Link, Preview, Row, Section, Text } from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface NetlifyWelcomeEmailProps {
  steps?: {
    id: number;
    Description: React.ReactNode;
  }[];
  links?: string[];
}

const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "";

const PropDefaults: NetlifyWelcomeEmailProps = {
  steps: [
    {
      id: 1,
      Description: (
        <li className="mb-5" key={1}>
          <strong className="font-bold">Deploy your first project.</strong> <Link className="text-blue-500 underline">Connect to Git, choose a template</Link>, or manually deploy a
          project you've been working on locally.
        </li>
      ),
    },
    {
      id: 2,
      Description: (
        <li className="mb-5" key={2}>
          <strong className="font-bold">Check your deploy logs.</strong> Find out what's included in your build and watch for errors or failed deploys.{" "}
          <Link className="text-blue-500 underline">Learn how to read your deploy logs</Link>.
        </li>
      ),
    },
    {
      id: 3,
      Description: (
        <li className="mb-5" key={3}>
          <strong className="font-bold">Choose an integration.</strong> Quickly discover, connect, and configure the right tools for your project with 150+ integrations to choose
          from. <Link className="text-blue-500 underline">Explore the Integrations Hub</Link>.
        </li>
      ),
    },
    {
      id: 4,
      Description: (
        <li className="mb-5" key={4}>
          <strong className="font-bold">Set up a custom domain.</strong> You can register a new domain and buy it through Netlify or assign a domain you already own to your site.{" "}
          <Link className="text-blue-500 underline">Add a custom domain</Link>.
        </li>
      ),
    },
  ],
  links: ["Visit the forums", "Read the docs", "Contact an expert"],
};

export const NetlifyWelcomeEmail = ({ steps = PropDefaults.steps, links = PropDefaults.links }: NetlifyWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Netlify Welcome</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
              },
              spacing: {
                0: "0px",
                5: "5px",
                45: "45px",
              },
            },
          },
        }}>
        <Body className="bg-offwhite text-base font-sans">
          <Img src={"logoTriangle.svg"} width="184" height="75" alt="Netlify" className="mx-auto my-10" />
          <Container className="bg-white p-5">
            <Heading className="text-center my-0 leading-8"></Heading>

            <Section>
              <Row>
                <Text className="text-base mt-5">Thanks for reaching up. </Text>
              </Row>
            </Section>

            <Section className="text-center">
              <Link className="text-black underline font-bold">Back to the Portfolio</Link> <span className="text-green-500">→</span>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NetlifyWelcomeEmail;
