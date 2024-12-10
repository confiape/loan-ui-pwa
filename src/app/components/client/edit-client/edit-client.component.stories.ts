import type { Meta, StoryObj } from '@storybook/angular';
import { EditClientComponent } from './edit-client.component';
import { EditClient } from '../../loan/loan-card.component.models';

const meta: Meta<EditClientComponent> = {
  title: 'Client/EditClient',
  component: EditClientComponent,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {
    clientData: {
      control: 'object',
      description: 'Client information to edit',
    },
    availableTags: {
      control: 'object',
      description: 'List of available tags for the client',
    },
    editedClient: {
      action: 'editClient',
      description: 'Event emitted when the client information is updated',
    },
    canceledEdit: {
      action: 'cancelEdit',
      description: 'Event emitted when the edit operation is cancelled',
    },
  },
};

export default meta;
type Story = StoryObj<EditClientComponent>;

const defaultClient: EditClient = {
  name: 'John Doe',
  alias: 'jdoe',
  dni: '12345678',
  cellphone: '987654321',
  tags: ['VIP', 'Frequent'],
};

const availableTags: string[] = ['VIP', 'Frequent', 'New', 'Returning'];

export const DefaultEditClient: Story = {
  args: {
    clientData: { ...defaultClient },
    availableTags: [...availableTags],
  },
};

export const EmptyTags: Story = {
  args: {
    clientData: { ...defaultClient, tags: [] },
    availableTags: [...availableTags],
  },
};

export const LongTagList: Story = {
  args: {
    clientData: { ...defaultClient, tags: ['Frequent'] },
    availableTags: [
      ...availableTags,
      'Priority',
      'Special',
      'Gold',
      'Silver',
      'Platinum',
      'Preferred',
    ],
  },
};

export const NoEditableFields: Story = {
  args: {
    clientData: { ...defaultClient },
    availableTags: [],
  },
  argTypes: {
    availableTags: {
      description: 'No tags available for selection in this case',
    },
  },
};

export const VIPClient: Story = {
  args: {
    clientData: { ...defaultClient, tags: ['VIP'] },
    availableTags: [...availableTags],
  },
};

export const NewClient: Story = {
  args: {
    clientData: {
      name: '',
      alias: '',
      dni: '',
      cellphone: '',
      tags: [],
    },
    availableTags: [...availableTags],
  },
  argTypes: {
    clientData: {
      description: 'Empty form for adding a new client.',
    },
  },
};
