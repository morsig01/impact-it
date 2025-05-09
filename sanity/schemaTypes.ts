import { defineType } from 'sanity'

export const schema = {
  types: [
    // ...existing schemas...
    defineType({
      name: 'employee',
      title: 'Employee',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'position', title: 'Position', type: 'string' },
        { name: 'photo', title: 'Photo', type: 'image' },
      ],
    }),
    defineType({
      name: 'equipment',
      title: 'Equipment',
      type: 'document',
      fields: [
        { name: 'name', title: 'Name', type: 'string' },
        { name: 'description', title: 'Description', type: 'text' },
        { name: 'image', title: 'Image', type: 'image' },
      ],
    }),
  ],
}
