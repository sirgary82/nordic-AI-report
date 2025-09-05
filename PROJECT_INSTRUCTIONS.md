# Project Documentation: LKDV Solutions Website

This document provides a guide to the construction, technology, version, and design schemes used in the LKDV Solutions website.

## Topic: European Sovereign Intelligence

LKDV Solutions provides secure, compliant, and powerful AI solutions tailored for European businesses.

## Technology Stack

The project is a single-page application built with the following technologies:

*   **Framework**: React v18.3.1
*   **Language**: TypeScript v5.2.2
*   **Build Tool**: Vite v7.1.3
*   **UI Library**: Material-UI (MUI) v5.18.0 with Emotion
*   **Routing**: React Router v6.20.0
*   **Charts**: Chart.js v4.4.0
*   **Internationalization**: i18next v23.7.6

### Project Version

*   **Version**: 0.0.0

## Design System

The design of the website is based on a custom theme created with Material-UI. The front page serves as the primary example to follow for colors, cards, and fonts.

### Typography

*   **Font Family**: 'Roboto', sans-serif
*   **h3**:
    *   `color`: 'white'
    *   `textShadow`: '1px 1px 3px rgba(0,0,0,0.5)'
*   **h5**:
    *   `fontWeight`: 700
    *   `color`: 'white'
    *   `textShadow`: '1px 1px 2px rgba(0,0,0,0.3)'
*   **body1**:
    *   `color`: 'white'

### Components

*   **Cards**: Styled with a backdrop filter for a "glassmorphism" effect.
    *   `backgroundColor`: 'rgba(0, 0, 0, 0.4)'
    *   `backdropFilter`: 'blur(8px)'
    *   `border`: '1px solid rgba(255, 255, 255, 0.2)'
    *   `borderRadius`: 3
*   **Buttons (Outlined)**:
    *   `borderColor`: 'rgba(255,255,255,0.7)'
    *   `color`: 'white'

## Call to Action

Use the following text for the call to action section, styled as a prominent card:

**Headline**: Ready to Secure Your AI Future?

**Body**: Contact us to discuss how LKDV Solutions can help your organization leverage AI while maintaining complete data sovereignty.

## Hosting Environment

The website is hosted on a Linux server with the following specifications:

*   **Web Server**: Apache v2.4.65
*   **Database**: MariaDB v10.11.14
*   **Architecture**: x86_64
*   **Operating System**: Linux
*   **Shared IP Address**: 185.168.212.77
*   **Sendmail Path**: `/usr/sbin/sendmail`
*   **Perl Path**: `/usr/bin/perl`
*   **Perl Version**: 5.32.1
*   **Kernel Version**: 5.14.0-570.18.1.el9_6.x86_64