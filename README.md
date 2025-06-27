# HopList - React Horizontal Timeline Component

A beautiful and customizable React horizontal timeline component with minimal parameters. Perfect for displaying progress steps, journey milestones, or any sequential data.

## Features

- 🎨 **Fully Customizable Colors** - Customize timeline and icon colors.
- 🔧 **Custom Icons** - Replace default icons with your own React components or SVGs.
- 📱 **Responsive & Scrollable** - A horizontally scrollable timeline that works on all screen sizes.
- ⚡ **Lightweight** - Minimal dependencies and optimized performance.
- 🎯 **TypeScript Ready** - Built with TypeScript support in mind.

## Installation

```bash
npm install hoplist
```

## Usage

### Basic Usage

```jsx
import React from 'react';
import HopList from 'hoplist';

const MyComponent = () => {
  const hops = [
    { hopTime: 1699123200, name: "Project Started" },
    { hopTime: 1699209600, name: "Requirements Gathered" },
    { hopTime: 1699296000, name: "Development Phase" },
    { hopTime: 1699382400, name: "Testing Phase" },
    { hopTime: 1699468800, name: "Project Completed" }
  ];

  return <HopList hops={hops} />;
};

export default MyComponent;
```

### Advanced Usage with Customization

```jsx
import React from 'react';
import HopList from 'hoplist';
import { PlayArrow, CheckCircle, Settings } from '@mui/icons-material'; // Example using Material-UI

const MyComponent = () => {
  const hops = [
    { hopTime: "2023-11-04T12:00:00Z", name: "Project Started" },
    { hopTime: "2023-11-05T12:00:00Z", name: "Requirements Gathered" },
    { hopTime: "2023-11-06T12:00:00Z", name: "Development Phase" },
    { hopTime: "2023-11-07T12:00:00Z", name: "Testing Phase" },
    { hopTime: "2023-11-08T12:00:00Z", name: "Project Completed" }
  ];

  return (
    <HopList 
      hops={hops}
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
| `hops` | `Array<{hopTime: number | string, name: string}>` | **Required** | Array of objects containing timeline data. |
| `startIconColor` | `string` | `"#6B7280"` | Color for the start icon border. |
| `timelineColor` | `string` | `"#6B7280"` | Color for the timeline lines. |
| `stepIconColor` | `string` | `"#6B7280"` | Color for the step icon borders. |
| `endIconColor` | `string` | `"#6B7280"` | Color for the end icon border. |
| `startIcon` | `React.Component` | `Default SVG` | React component for the start icon. |
| `endIcon` | `React.Component` | `Default SVG` | React component for the end icon. |
| `stepIcon` | `React.Component` | `Default SVG` | React component for intermediate step icons. |

## Data Structure

### Hops Format

The `hops` prop expects a flat array of objects, where each object represents a single event on the timeline:

```javascript
const hops = [
  { 
    hopTime: 1699123200,      // Unix timestamp or ISO Date String
    name: "Event Name"        // Display name for the event
  },
  { 
    hopTime: "2023-11-05T12:00:00Z",
    name: "Another Event"
  },
  // ... more events
];
```

### Event Object Properties

| Property | Type | Description |
|----------|------|-------------|
| `hopTime` | `number \| string` | Unix timestamp (in seconds) or a date string parsable by `new Date()`. |
| `name` | `string` | Display name that will be shown below the timeline icon. |

### Example with Real Data

```javascript
const projectTimeline = [
  { hopTime: 1699123200, name: "Kickoff Meeting" },
  { hopTime: 1699209600, name: "Requirements Analysis" },
  { hopTime: 1699296000, name: "Design Phase" },
  { hopTime: 1699382400, name: "Development Start" },
  { hopTime: 1699468800, name: "Feature Complete" },
  { hopTime: 1699555200, name: "Code Review" },
  { hopTime: 1699641600, name: "Testing" },
  { hopTime: 1699728000, name: "Bug Fixes" },
  { hopTime: 1699814400, name: "Production Deploy" }
];
```

## Styling

The component can be styled by:

1. **Using the color props** (recommended):
   ```jsx
   <HopList 
     hops={data}
     timelineColor="#your-color"
     // ... other color props
   />
   ```

2. **Overriding CSS classes**:
   ```css
   .hoplist-container {
     /* Your custom styles for the main container */
   }
   
   .hoplist-timeline-line {
     /* Custom timeline styling */
   }
   ```

## CSS Classes Available for Customization

- `.hoplist-container` - The main container that centers the component.
- `.hoplist-scroll-container` - The wrapper that handles horizontal scrolling.
- `.hoplist-timeline` - The flex container for all timeline items.
- `.hoplist-item` - An individual timeline item, including the icon and text.
- `.hoplist-timeline-elements` - A wrapper for the icon and connecting line.
- `.hoplist-timeline-line` - The connecting line between icons.
- `.hoplist-icon` - General class for all icons.
- `.hoplist-start-icon` - Specific class for the start icon.
- `.hoplist-step-icon` - Specific class for the step icons.
- `.hoplist-end-icon` - Specific class for the end icon.
- `.hoplist-name` - The event name text.
- `.hoplist-timestamp` - The timestamp text.

## Time Format

The component automatically formats the `hopTime` value using the built-in `timestampToDate` function, which produces a readable format: `YYYY-MM-DD HH:MM:SS`.

If you need a different time format, you can modify the `datetime-formatters.js` file.

## Dependencies

- React 16.8+ (for hooks support)

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

## License

This project is licensed under the MIT License.

---

Made with ❤️ for the React community 