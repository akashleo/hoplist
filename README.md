# HopList - React Horizontal Timeline Component

A beautiful and customizable React horizontal timeline component with minimal parameters. Perfect for displaying progress steps, journey milestones, or any sequential data.

## Features

- 🎨 **Fully Customizable Colors** - Customize timeline, icons, and border colors
- 🔧 **Custom Icons** - Replace default icons with your own Material-UI or custom icons
- 📱 **Responsive Design** - Works seamlessly across different screen sizes
- ⚡ **Lightweight** - Minimal dependencies and optimized performance
- 🎯 **TypeScript Ready** - Built with TypeScript support in mind

## Installation

```bash
npx hoplist
```

Or if you want to install it locally in your project:

```bash
npm install hoplist
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import HopList from 'hoplist';

const MyComponent = () => {
  const hopChunks = [
    [
      { hopTime: 1699123200, name: "Project Started" },
      { hopTime: 1699209600, name: "Requirements Gathered" }
    ],
    [
      { hopTime: 1699296000, name: "Development Phase" },
      { hopTime: 1699382400, name: "Testing Phase" }
    ],
    [
      { hopTime: 1699468800, name: "Project Completed" }
    ]
  ];

  return <HopList hopChunks={hopChunks} />;
};

export default MyComponent;
```

### Advanced Usage with Customization

```jsx
import React from 'react';
import HopList from 'hoplist';
import { PlayArrow, CheckCircle, Settings } from '@mui/icons-material';

const MyComponent = () => {
  const hopChunks = [
    [
      { hopTime: 1699123200, name: "Project Started" },
      { hopTime: 1699209600, name: "Requirements Gathered" }
    ],
    [
      { hopTime: 1699296000, name: "Development Phase" },
      { hopTime: 1699382400, name: "Testing Phase" }
    ],
    [
      { hopTime: 1699468800, name: "Project Completed" }
    ]
  ];

  return (
    <HopList 
      hopChunks={hopChunks}
      startIconColor="#4CAF50"
      timelineColor="#2196F3"
      stepIconColor="#FF9800"
      endIconColor="#9C27B0"
      startIcon={PlayArrow}
      endIcon={CheckCircle}
      stepIcon={Settings}
    />
  );
};

export default MyComponent;
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `hopChunks` | `Array<Array<{hopTime: number, name: string}>>` | **Required** | Array of arrays containing timeline data |
| `startIconColor` | `string` | `"#FF5733"` | Color for the start icon border |
| `timelineColor` | `string` | `"#FF5733"` | Color for the timeline lines |
| `stepIconColor` | `string` | `"#3f51b5"` | Color for the step icon borders |
| `endIconColor` | `string` | `"lightgreen"` | Color for the end icon border |
| `startIcon` | `React.Component` | `ArrowRight` | Material-UI icon component for the start |
| `endIcon` | `React.Component` | `Album` | Material-UI icon component for the end |
| `stepIcon` | `React.Component` | `BuildRounded` | Material-UI icon component for steps |

## Data Structure

### hopChunks Format

The `hopChunks` prop expects an array of arrays, where each inner array represents a group of related timeline events:

```javascript
const hopChunks = [
  // First group of events
  [
    { 
      hopTime: 1699123200,  // Unix timestamp
      name: "Event Name"    // Display name for the event
    },
    // ... more events in this group
  ],
  // Second group of events
  [
    { hopTime: 1699296000, name: "Another Event" },
    // ... more events in this group
  ],
  // ... more groups
];
```

### Event Object Properties

| Property | Type | Description |
|----------|------|-------------|
| `hopTime` | `number` | Unix timestamp (seconds since epoch) for the event |
| `name` | `string` | Display name that will be shown below the timeline icon |

### Example with Real Data

```javascript
const projectTimeline = [
  [
    { hopTime: 1699123200, name: "Kickoff Meeting" },
    { hopTime: 1699209600, name: "Requirements Analysis" },
    { hopTime: 1699296000, name: "Design Phase" }
  ],
  [
    { hopTime: 1699382400, name: "Development Start" },
    { hopTime: 1699468800, name: "Feature Complete" },
    { hopTime: 1699555200, name: "Code Review" }
  ],
  [
    { hopTime: 1699641600, name: "Testing" },
    { hopTime: 1699728000, name: "Bug Fixes" },
    { hopTime: 1699814400, name: "Production Deploy" }
  ]
];
```

## Styling

The component comes with default styling, but you can customize it further by:

1. **Using the color props** (recommended):
   ```jsx
   <HopList 
     hopChunks={data}
     startIconColor="#your-color"
     timelineColor="#your-color"
     // ... other color props
   />
   ```

2. **Overriding CSS classes**:
   ```css
   .hoplist-container {
     /* Your custom styles */
   }
   
   .hoplist-timeline-line {
     /* Custom timeline styling */
   }
   ```

## CSS Classes Available for Customization

- `.hoplist-container` - Main container
- `.hoplist-row` - Each row of the timeline
- `.hoplist-start-icon` - Starting icon container
- `.hoplist-item` - Individual timeline item
- `.hoplist-timeline-container` - Timeline line and icon container
- `.hoplist-timeline-line` - Timeline connecting lines
- `.hoplist-icon` - Icon containers
- `.hoplist-name` - Event name text
- `.hoplist-timestamp` - Timestamp text

## Time Format

The component automatically formats timestamps using the built-in `timestampToDate` function, which converts Unix timestamps to a readable format: `YYYY-MM-DD HH:MM:SS`.

If you need a different time format, you can modify the `datetime-formatters.js` file or create your own formatting function.

## Dependencies

- React 16.8+ (for hooks support)
- Material-UI Icons (for default icons)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Examples

Check out the `component-call.js` file for usage examples and implementation details.

---

Made with ❤️ for the React community 