
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

const creatorItems = [
  { title: "Campaign Dashboard", description: "Manage all creator campaigns", href: "#dashboard" },
  { title: "Analytics", description: "Track growth and engagement", href: "#analytics" },
  { title: "Brand Deals", description: "Discover sponsorship opportunities", href: "#deals" },
];

const businessItems = [
  { title: "Find Creators", description: "Search influencers by niche", href: "#find-creators" },
  { title: "Campaign Management", description: "Launch and monitor campaigns", href: "#campaigns" },
];

const agencyItems = [
  { title: "Team Workspace", description: "Manage multiple clients", href: "#workspace" },
  { title: "Advanced Reporting", description: "Export detailed campaign reports", href: "#reports" },
];

// ─── Default story ─────────────────────────────────────────────────────────────

export const Default: Story = {
  args: {
    mobileAction: (
      <Button variant="primary" size="sm">
        Join Now
      </Button>
    ),

    // Full mobile menu panel
    mobileMenu: (
      <div className="flex flex-col gap-4 p-4">
        <nav className="flex flex-col gap-1">
          <NavbarDropdown mobile label="For Creators" items={creatorItems} />
          <NavbarDropdown mobile label="For Business" items={businessItems} />
          <NavbarDropdown mobile label="For Agency"   items={agencyItems} />
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
          <a href="/" className="flex items-center gap-1">
            <Navbar.BrandIcon className="h-10 w-10 shrink-0" />
            <Navbar.BrandText className="text-lg font-bold">Influish</Navbar.BrandText>
          </a>
        </Navbar.Brand>

        {/* Desktop nav — must use Navbar.Nav */}
        <Navbar.Nav>
          <NavbarDropdown label="For Creators" items={creatorItems} />
          <NavbarDropdown label="For Business" items={businessItems} />
          <NavbarDropdown label="For Agency"   items={agencyItems} />
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

// ─── Sticky variant ────────────────────────────────────────────────────────────

export const Sticky: Story = {
  args: {
    ...Default.args,
    sticky: true,
  },
};

// ─── No border ────────────────────────────────────────────────────────────────

export const NoBorder: Story = {
  args: {
    ...Default.args,
    bordered: false,
  },
};

// ─── Constrained width ────────────────────────────────────────────────────────

export const MaxWidth: Story = {
  args: {
    ...Default.args,
    maxWidth: "1280px",
  },
};