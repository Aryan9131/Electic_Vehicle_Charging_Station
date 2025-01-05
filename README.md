# Electic_Vehicle_Charging_Station
This is a web application to provide information about electric vehicle charging stations near user and allows to book slot for charging in stations. 

## Problem Statement

Electric vehicles (EVs) are integral to future smart city designs, but effective integration requires accessible and efficient charging infrastructure. This project addresses the challenge of optimizing EV charging station usage and accessibility through a user-friendly mobile app system.

The **Electric Vehicle Recharge Bunk** system allows EV owners to:
- Locate nearby charging stations using Google Maps.
- Check real-time slot availability.
- Book charging slots to reduce queue times.

This solution improves the accessibility of EV charging stations and facilitates seamless long-distance travel.
---

## Project Features

### **Admin Module**
- **Login/Register:** Manage admin accounts securely.
- **Create EV Bunk Location Details:** Add and update charging station locations.
- **Manage Bunk Details:** Maintain station details like address, contact, and location.
- **Manage Recharge Slots:** Oversee slot availability and booking status.

### **User Module**
- **Login/Register:** Create and access user accounts.
- **Search Nearby EV Bunks:** Discover charging stations via list and Google Maps integration.
- **View Bunk Details:** Access station information, including:
  - Address.
  - Mobile number.
  - Google Map location.
- **View Slot Vacancy:** Check slot availability in real-time.

---

## Technologies Used
- **Frontend:** HTML, CSS, React, Material-UI for Responsive UI/UX designs.
- **Backend and Database:** Nodejs, MongoDB, Passport-jwt for secure authentication.
- **Other Tools:** Google Maps API for location-based services.

---

## Workflow and Execution

1. **Setup:**
   - Clone the repository:
     ```bash
     git clone https://github.com/your-repo-link.git
     ```
   - Navigate to the project directory:
     ```bash
     cd Electric-Vehicle-Recharge-Bunk
     ```
   - Set up Firebase for authentication and database.

2. **Modules:**
   - Admin functionalities: Login, register, and manage EV bunk ans slot details.
   - User functionalities: Search for nearby stations, view details, and book slots.

3. **Optimization:**
   - Modular and maintainable code.
   - Safe and testable architecture.
   - Portable across environments.

---

## Project Difficulties
- Optimizing slot booking to minimize queue times.
- Ensuring updates of slot availability.
- Seamless integration of Google Maps API.

---

## Logging and Testing
- **Logging:** Tracks all user actions and system events using JavaScript logging libraries.
- **Testing:** Test cases include:
  - User login and registration functionality.
  - Admin bunk management.
  - Slot booking and availability checks.
