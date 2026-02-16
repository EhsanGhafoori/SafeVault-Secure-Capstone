# EventEase - Blazor Event Management Application

## Project Overview

EventEase is a comprehensive event management web application built using Blazor and Microsoft Copilot. This application allows users to create, manage, and track events with features including event cards, routing, registration forms, and attendance tracking.

## Features

- **Event Card Component**: Displays event information with two-way data binding
- **Routing Functionality**: Navigation between different pages and components
- **Registration Form**: User registration with validation
- **State Management**: User session management
- **Attendance Tracker**: Track event attendance
- **Performance Optimizations**: Input validation and error handling

## Technology Stack

- **Blazor**: Microsoft's web framework using C# and Razor
- **Microsoft Copilot**: AI-assisted development throughout the project

## How Microsoft Copilot Assisted in Development

### Activity 1: Using Microsoft Copilot to Generate Blazor Code

**Copilot Assistance:**
- **Component Generation**: Copilot helped generate the foundational Event Card component with proper Blazor syntax and structure
- **Two-Way Data Binding**: Assisted in implementing `@bind` directives for seamless data binding between UI components and C# models
- **Field Implementation**: Guided the creation of event fields (title, date, location, description) with appropriate data types and validation attributes
- **Code Structure**: Provided best practices for organizing Blazor components and maintaining clean, readable code

**Key Contributions:**
- Generated boilerplate code for the Event Card component
- Suggested proper C# property declarations with getters and setters
- Recommended Razor syntax for displaying and editing event data

### Activity 2: Using Microsoft Copilot for Debugging and Optimization

**Copilot Assistance:**
- **Routing Implementation**: Helped implement and debug routing functionality, including route definitions and navigation components
- **Error Identification**: Assisted in identifying and fixing routing errors, such as incorrect route paths and missing route parameters
- **Input Validation**: Suggested validation logic and error handling for user inputs
- **Performance Optimization**: Recommended optimizations for component rendering and data binding
- **Debugging Support**: Provided insights into common Blazor errors and their solutions

**Key Contributions:**
- Fixed routing configuration issues
- Implemented proper error handling for invalid routes
- Optimized component lifecycle methods
- Enhanced input validation with appropriate error messages

### Activity 3: Develop a Comprehensive Blazor Project with Microsoft Copilot

**Copilot Assistance:**
- **Registration Form**: Generated a comprehensive registration form component with multiple input fields and validation rules
- **State Management**: Assisted in implementing user session state management using Blazor's built-in state management features
- **Attendance Tracker**: Helped create the attendance tracking functionality with data persistence
- **Component Integration**: Guided the integration of all components into a cohesive application
- **Advanced Features**: Suggested implementation of additional features like form validation, data persistence, and user feedback mechanisms

**Key Contributions:**
- Created reusable form components with validation
- Implemented session state management for user authentication
- Developed attendance tracking logic with proper data structures
- Ensured consistent styling and user experience across components

## Project Structure

```
EventEase/
├── Components/
│   ├── EventCard.razor
│   ├── RegistrationForm.razor
│   └── AttendanceTracker.razor
├── Pages/
│   ├── Index.razor
│   ├── Events.razor
│   ├── Register.razor
│   └── Attendance.razor
├── Models/
│   ├── Event.cs
│   ├── User.cs
│   └── Attendee.cs
├── Services/
│   └── EventService.cs
├── Shared/
│   ├── MainLayout.razor
│   └── NavMenu.razor
└── Program.cs
```

## Getting Started

### Prerequisites

- .NET SDK 8.0 or later
- Visual Studio or Visual Studio Code
- Microsoft Copilot (for development assistance)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/EhsanGhafoori/EventEase-Blazor.git
```

2. Navigate to the project directory:
```bash
cd EventEase-Blazor
```

3. Restore dependencies:
```bash
dotnet restore
```

4. Run the application:
```bash
dotnet run
```

5. Open your browser and navigate to `https://localhost:5001` or `http://localhost:5000`

## Development Process

This project was developed in three main activities:

1. **Activity 1**: Created foundational components using Copilot code generation
2. **Activity 2**: Debugged and optimized the application with Copilot assistance
3. **Activity 3**: Implemented advanced features and comprehensive functionality

## Contributing

This is a peer-graded assignment project. Feedback and suggestions are welcome!

## License

This project is created for educational purposes as part of a peer-graded assignment.

## Acknowledgments

- Microsoft Copilot for AI-assisted development
- Blazor framework documentation and community
- Course instructors and peers for feedback
