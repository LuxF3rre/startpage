# UI Layout Specification

## ADDED Requirements

### Requirement: Navigation Grid Layout
The startpage SHALL display link categories in a responsive grid layout that adapts to different viewport sizes.

#### Scenario: Desktop layout with two columns
- **WHEN** the viewport width is greater than 700px
- **THEN** the navigation SHALL display in a two-column grid
- **AND** the title SHALL span both columns
- **AND** each link category SHALL be centered within its grid cell

#### Scenario: Mobile layout with single column
- **WHEN** the viewport width is 700px or less
- **THEN** the navigation SHALL display in a single-column layout
- **AND** link categories SHALL stack vertically

#### Scenario: Extra small screens
- **WHEN** the viewport width is 400px or less
- **THEN** font sizes SHALL scale down to 80% of base size
- **AND** the layout SHALL remain readable and functional

### Requirement: Link Category Organization
Each link category SHALL be visually grouped with a category label and related links.

#### Scenario: Category structure
- **WHEN** rendering a link category
- **THEN** the category label SHALL be displayed as the first item
- **AND** the category label SHALL be visually distinct (bold, different color)
- **AND** related links SHALL be listed below the category label
- **AND** items SHALL be center-aligned within the category

#### Scenario: Four standard categories
- **WHEN** the page loads
- **THEN** the following categories SHALL be present: general, media, social, ai
- **AND** each category SHALL contain its configured links

### Requirement: Logo Display
The startpage SHALL display a logo image alongside the navigation content.

#### Scenario: Logo rendering
- **WHEN** the page loads
- **THEN** a logo image SHALL be displayed
- **AND** the image SHALL have a border styled to match the design system
- **AND** the image SHALL have descriptive alt text for accessibility

#### Scenario: Responsive logo sizing
- **WHEN** viewport width exceeds 700px
- **THEN** logo SHALL have a fixed width of 10em
- **WHEN** viewport width is 700px or less
- **THEN** logo SHALL scale to 100% width with a maximum of 15em

### Requirement: Semantic HTML Structure
The page structure SHALL use proper HTML5 semantic elements for accessibility and SEO.

#### Scenario: Document structure
- **WHEN** the HTML is parsed
- **THEN** the page SHALL use a `<nav>` element for navigation
- **AND** heading elements SHALL follow proper hierarchy (h1 for main title)
- **AND** links SHALL use anchor tags with valid href attributes
- **AND** lists SHALL use proper `<ul>` and `<li>` elements

#### Scenario: Accessibility attributes
- **WHEN** rendering the page
- **THEN** the `<html>` element SHALL include a `lang` attribute
- **AND** images SHALL include descriptive `alt` attributes
- **AND** the viewport meta tag SHALL be present for responsive behavior
