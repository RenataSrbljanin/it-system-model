<h1>IT System Model Editor</h1>
<h2>Overview</h2>
This application provides users with a platform for visualizing and editing IT system models represented as JSON files. It features secure login, a user-friendly dashboard for managing files, and a graphical editor for modifying system components.

The interface consists of three main areas:

Authentication (Login/Registration/Forgot Password)

Dashboard (File management and uploading)

Graphical Model Editor (Network visualization and editing)

<h2>Features</h2>
✅ User Functionality
Login/Registration with secure credentials and password reset functionality.

Upload one or more JSON files representing IT system models.

View uploaded files in a sortable, filterable table.

Edit models through an interactive network graph:

Click on a node (computer) to view and edit its attributes.

Edit includes hostname, installed software, data attributes, and network connections.

Save changes to the server.

Download original or modified JSON files via a dropdown menu.

Real-time feedback through alerts for actions such as save success, errors, or delete confirmations.

<h2>User Flows</h2>
<h3>Authentication</h3>

Register with name, email, and password.

Log in using email and password.

Reset password via email link if forgotten.

<h3>Dashboard</h3>

Upload new JSON files.

View and manage uploaded files (sort, filter, delete, download).

<h3>Graph Editor</h3>

Visual network display of the system.

Select and edit individual nodes (computers).

Toolbox for editing node details:

Computer name

Installed software

Attached data (as tables)

Network connections

<h2>UI Components (Mockup Overview)</h2>
<ul>
Login Form: email, password, forgot password link, login button

Registration Form: name, email, password, confirm password, register button

Password Reset: email input, send reset link button

Dashboard View:

JSON file upload button

File table with sorting/filtering

Delete button

Download dropdown (original/modified)

Graphical Editor:

Network graph with nodes

Side toolbox for editing:

Node name

Software list

Data tables

Network connection editor

</li>Alerts: confirmation messages, error alerts, delete warnings
</ul>
<h2>Technical Stack</h2>
Frontend
Framework: React with TypeScript

Graph Visualization: Reagraph

Styling: SASS

Backend
Framework: Flask with Flask-Smorest (for structured REST APIs)

Database: PostgreSQL

Authentication: JWT-based login/registration

<h2>Other Technologies</h2>
File Format: JSON (validated via JSON Schema)

API: RESTful, documented using Swagger UI

Security: Input validation and restricted file access

Testing: Pytest (backend), Jest (frontend)

Deployment: GitHub

Browser Support: Chrome, Firefox, Edge

Responsive Design: Optimized for large screens

<h2>Non-Functional Requirements</h2>
Supports up to 20 models and 200 nodes simultaneously with no significant performance degradation.

Only authorized users can access or modify uploaded JSON files.

Clear and accessible UI with high contrast and legible fonts.

Application should be scalable across multiple users and servers.

<h2>Entity Relationship Diagram (ERD)</h2>
[Insert your ER diagram image or link here if available]
The ER diagram defines the relationships between users, files, and model components such as computers, software, and networks.

<h2>License</h2>
This project is under active development. Licensing and contribution guidelines to be defined.
