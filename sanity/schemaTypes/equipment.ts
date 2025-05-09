export default {
    name: 'equipment',
    title: 'IT Equipment',
    type: 'document',
    fields: [
        {
            name: 'name',
            title: 'Equipment Name',
            type: 'string',
            validation: (Rule: any) => Rule.required(),
        },
        {
            name: 'serialNumber',
            title: 'Serial Number',
            type: 'string',
        },
        {
            name: 'category',
            title: 'Equipment Category',
            type: 'string',
            options: {
                list: [
                    'Laptop',
                    'Desktop',
                    'Monitor',
                    'Printer',
                    'Network Device',
                    'Mobile Device',
                    'Other',
                ],
            },
        },
        {
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    'In Use',
                    'In Storage',
                    'Under Repair',
                    'Retired',
                ],
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
        },
    ],
}