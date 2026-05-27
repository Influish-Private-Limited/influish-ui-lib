
import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "./Navbar";
import NavbarDropdown from "./NavDropdown";
import { Button } from "../Button/Button";

const meta: Meta<typeof Navbar> = {
  title: "Components/Navbar",
  component: Navbar,
  tags: ["autodocs"],
  argTypes: {
    sticky: { control: "boolean" },
    bordered: { control: "boolean" },
    maxWidth: { control: "text" },
  },
  args: {
    bordered: true,
    sticky: false,
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  args: {
    mobileAction: (
      <Button variant="primary" size="sm">
        Join Now
      </Button>
    ),

    mobileMenu: (
      <div className="flex flex-col gap-5">
        {/* <nav className="flex flex-col gap-4">
          <a href="#creators">For Creators</a>
          <a href="#business">For Business</a>
          <a href="#agency">For Agency</a>
        </nav> */}

        <nav className="flex flex-col gap-2">

          <NavbarDropdown
            mobile
            label="For Creators"
            items={[
              {
                title: "Campaign Dashboard",
                description: "Manage creator campaigns",
                href: "#dashboard",
              },
              {
                title: "Analytics",
                description: "Track engagement",
                href: "#analytics",
              },
            ]}
          />

          <NavbarDropdown
            mobile
            label="For Business"
            items={[
              {
                title: "Find Creators",
                description: "Search influencers",
                href: "#creators",
              },
              {
                title: "Campaign Management",
                description: "Launch campaigns",
                href: "#campaigns",
              },
            ]}
          />

          <NavbarDropdown
            mobile
            label="For Agency"
            items={[
              {
                title: "Workspace",
                description: "Manage clients",
                href: "#workspace",
              },
            ]}
          />

        </nav>

        <Button variant="ghost" size="sm" className="w-full">
          Download Now
        </Button>
      </div>
    ),

    children: (
      <>
        {/* Brand */}
        <Navbar.Brand>
          <a href="/" className="flex items-center gap-3">
            <Navbar.BrandIcon className="h-10 w-10 shrink-0" />
            <span className="hidden sm:block text-lg font-bold"> Influish </span>
          </a>
        </Navbar.Brand>

        {/* Desktop Nav */}
        {/* <Navbar.Nav>
          <a href="#creators">For Creators</a>
          <a href="#business">For Business</a>
          <a href="#agency">For Agency</a>
        </Navbar.Nav> */}

        <Navbar.Nav>

          <NavbarDropdown
            label="For Creators"
            items={[
              {
                title: "Campaign Dashboard",
                description: "Manage all creator campaigns",
                href: "#dashboard",
              },
              {
                title: "Analytics",
                description: "Track growth and engagement",
                href: "#analytics",
              },
              {
                title: "Brand Deals",
                description: "Discover sponsorship opportunities",
                href: "#deals",
              },
            ]}
          />

          <NavbarDropdown
            label="For Business"
            items={[
              {
                title: "Find Creators",
                description: "Search influencers by niche",
                href: "#find-creators",
              },
              {
                title: "Campaign Management",
                description: "Launch and monitor campaigns",
                href: "#campaigns",
              },
            ]}
          />

          <NavbarDropdown
            label="For Agency"
            items={[
              {
                title: "Team Workspace",
                description: "Manage multiple clients",
                href: "#workspace",
              },
              {
                title: "Advanced Reporting",
                description: "Export detailed campaign reports",
                href: "#reports",
              },
            ]}
          />

        </Navbar.Nav>



        {/* Desktop Actions */}
        <Navbar.End>
          <Button variant="ghost" size="sm"> Download Now </Button>
          <Button variant="primary" size="sm"> Join Now </Button>
        </Navbar.End>
      </>
    ),
  },
};