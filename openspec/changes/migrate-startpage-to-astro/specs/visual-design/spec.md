# Visual Design Specification

## ADDED Requirements

### Requirement: Catppuccin Macchiato Color Scheme
The startpage SHALL use the Catppuccin Macchiato color palette for consistent theming.

#### Scenario: Color token implementation
- **WHEN** styling the page
- **THEN** CSS custom properties SHALL be defined for core colors
- **AND** background color SHALL be Macchiato base (#24273a)
- **AND** primary text color SHALL be Macchiato text (#cad3f5)
- **AND** accent color SHALL be Macchiato mauve (#c6a0f6)
- **AND** secondary accent SHALL be Macchiato rosewater (#f4dbd6)

#### Scenario: Color application
- **WHEN** rendering page elements
- **THEN** the page title SHALL use the mauve accent color
- **AND** category labels SHALL use the rosewater accent color
- **AND** link text SHALL inherit primary text color
- **AND** link hover state SHALL use the rosewater accent color

### Requirement: Typography System
The page SHALL use JetBrains Mono as the primary typeface with appropriate sizing and fallbacks.

#### Scenario: Font loading
- **WHEN** the page loads
- **THEN** JetBrains Mono Nerd Font SHALL be loaded via @font-face
- **AND** the font file SHALL be served from the public directory
- **AND** fallback fonts SHALL include JetBrains Mono and generic monospace

#### Scenario: Font sizing
- **WHEN** rendering text at desktop viewport
- **THEN** base font size SHALL be 25px
- **AND** the main title SHALL be 2em (50px)
- **WHEN** viewport width is 700px or less
- **THEN** base font size SHALL scale to 90%
- **WHEN** viewport width is 400px or less
- **THEN** base font size SHALL scale to 80%

#### Scenario: Typographic styling
- **WHEN** rendering text elements
- **THEN** category labels SHALL use bold font weight
- **AND** category labels SHALL have 2em line height
- **AND** links SHALL have no text decoration by default

### Requirement: Modern CSS Architecture
The styles SHALL use modern CSS features and best practices for maintainability.

#### Scenario: CSS custom properties
- **WHEN** defining colors and values
- **THEN** CSS custom properties (variables) SHALL be used
- **AND** variables SHALL be defined at the :root level
- **AND** semantic naming SHALL be used (e.g., --color-background, --color-text)

#### Scenario: Box model normalization
- **WHEN** the page loads
- **THEN** box-sizing SHALL be set to border-box globally
- **AND** default margins SHALL be reset on html and body
- **AND** horizontal overflow SHALL be hidden

#### Scenario: Flexbox layout
- **WHEN** centering content
- **THEN** flexbox SHALL be used for centering on body element
- **AND** items SHALL be centered both horizontally and vertically
- **AND** minimum viewport height SHALL be 100vh

### Requirement: Responsive Design Patterns
The page SHALL implement mobile-first responsive design with clear breakpoints.

#### Scenario: Breakpoint system
- **WHEN** implementing responsive behavior
- **THEN** a breakpoint at 700px SHALL handle tablet/mobile transition
- **AND** a breakpoint at 400px SHALL handle small mobile devices
- **AND** media queries SHALL use max-width for progressive enhancement

#### Scenario: Responsive spacing
- **WHEN** viewport is desktop size
- **THEN** body padding SHALL be 1em
- **WHEN** viewport is mobile size
- **THEN** body padding SHALL reduce to 0.5em
- **AND** all spacing SHALL use relative units (em, rem)

### Requirement: Interactive States
Interactive elements SHALL provide clear visual feedback.

#### Scenario: Link hover effect
- **WHEN** a user hovers over a link
- **THEN** the text color SHALL change to rosewater accent
- **AND** the transition SHALL be smooth
- **AND** the cursor SHALL indicate clickability

#### Scenario: Focus states
- **WHEN** an interactive element receives focus
- **THEN** a visible focus indicator SHALL be present
- **AND** focus styles SHALL meet accessibility standards
