import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "../Badge";
import { Table } from "./Table";

const meta = {
  title: "Components/Table",
  component: Table,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ada Lovelace</td>
            <td>Engineer</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Grace Hopper</td>
            <td>Admiral</td>
            <td>Active</td>
          </tr>
          <tr>
            <td>Alan Turing</td>
            <td>Researcher</td>
            <td>Inactive</td>
          </tr>
        </tbody>
      </>
    ),
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Standard — headerrad + tre rader (som i Figma). */
export const Default: Story = {};

/** Med andre komponenter i cellene, f.eks. Badge for status. */
export const WithBadges: Story = {
  args: {
    children: (
      <>
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Ada Lovelace</td>
            <td>Engineer</td>
            <td>
              <Badge color="success" variant="weak">
                Active
              </Badge>
            </td>
          </tr>
          <tr>
            <td>Alan Turing</td>
            <td>Researcher</td>
            <td>
              <Badge color="neutral" variant="weak">
                Inactive
              </Badge>
            </td>
          </tr>
        </tbody>
      </>
    ),
  },
};
