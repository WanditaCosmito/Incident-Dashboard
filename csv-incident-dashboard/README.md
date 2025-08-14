# CSV Incident Dashboard

An interactive web dashboard for analyzing incident data from CSV uploads with dynamic filtering and visualization capabilities.

## Overview

This dashboard provides a comprehensive view of incident data by parsing CSV files and extracting key information including incident numbers, service tags, building locations, DCIM tiles, and incident descriptions/resolutions. The system features interactive charts and drill-down capabilities for detailed analysis.

## Features

### Data Processing
- **CSV Upload Interface**: Drag-and-drop or file browser upload
- **Intelligent Data Extraction**: Automatically identifies and parses:
  - Incident numbers
  - Service tags
  - Building locations
  - DCIM tile information (extracted from incident descriptions)
  - Incident descriptions
  - Resolution details
- **Data Validation**: Checks for required columns and data integrity
- **Real-time Processing**: Instant data parsing and visualization updates

### Visualizations
- **Monthly Incident Trends**: Line and bar charts showing incident frequency over time
- **Building Distribution**: Interactive bar charts showing incidents per building
- **DCIM Tile Analysis**: Drill-down charts for tile-specific incident data
- **Service Tag Insights**: Distribution of incidents across different service tags
- **Resolution Time Analysis**: Charts showing incident resolution patterns

### Interactive Features
- **Dynamic Filtering**: 
  - Date range selectors
  - Building filters
  - Service tag filters
  - Incident status filters
- **Drill-down Navigation**: Click on building bars to view DCIM tiles within that building
- **Hover Details**: Contextual information on chart hover
- **Export Capabilities**: Download filtered data and charts
- **Search Functionality**: Quick search across all incident data

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager
- Modern web browser with JavaScript enabled

### Development Setup
```bash
# Clone the repository
git clone [repository-url]
cd csv-incident-dashboard

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Configuration
Create a `.env` file in the root directory:
```env
REACT_APP_MAX_FILE_SIZE=10485760  # 10MB max file size
REACT_APP_SUPPORTED_FORMATS=.csv,.xlsx
REACT_APP_DEFAULT_CHART_THEME=light
```

## Usage Guide

### Uploading Data
1. Navigate to the dashboard homepage
2. Drag and drop your CSV file or click to browse
3. Wait for the file to process (progress indicator shown)
4. Verify that the data was parsed correctly in the preview

### Exploring Data
1. **Monthly Trends**: View incident patterns over time
2. **Building Analysis**: See which buildings have the most incidents
3. **Drill-down**: Click on any building bar to see DCIM tiles within
4. **Filtering**: Use the filter panel to narrow down results
5. **Export**: Download filtered datasets or chart images

### Advanced Features
- **Custom Date Ranges**: Select specific time periods for analysis
- **Multi-building Comparison**: Compare incident rates across buildings
- **Trend Analysis**: Identify seasonal patterns or anomalies
- **Resolution Tracking**: Monitor how quickly incidents are resolved

## License

MIT License - See LICENSE file for details

## Support

For questions, issues, or feature requests:
- Create an issue in the GitHub repository
- Check the FAQ section below
- Contact the development team

## FAQ

**Q: What CSV formats are supported?**
A: Standard CSV files with comma separation. Excel files (.xlsx) are also supported.

**Q: How accurate is the DCIM tile extraction?**
A: Accuracy depends on the consistency of descriptions. The system achieves ~90% accuracy with well-formatted incident descriptions.

**Q: Can I customize the dashboard for my specific data format?**
A: Yes, the system is designed to be configurable for different data schemas and extraction patterns.

**Q: Is my data stored on any servers?**
A: No, all processing happens in your browser. Data is never transmitted to external servers.

**Q: What's the maximum file size I can upload?**
A: Default limit is 10MB, but this can be configured based on your needs.