EE Asset Declarations
Visualizations of Asset Declarations data in CEE countries.

## Goal
The goal of this project is to provide a platform that that provides a quick visual summary of the findings of the report.

Presentation of data needs to prioritize **comparative analysis**. This means that the visualization should emphasize similarities and/or differences between the countries that data was collected from.

## High Level Concept
There will be three pages:

1. **The visualization:** a map centered on the CEE area which will highlight countries that satisfy filter criteria.
2. **The report:** a markdown version of the full report.
3. **An about page:** Brief on the project, logos of all involved organizations, and list of research contributers by their names (ordered alhabetically by their surnames).

The platform will contain very simple header and footer.

Pay close attention to social media meta tags and share buttons.

## The visualization
The visualization will be a map centered on the CEE region.

### Searching the data
- There will be two dropdown field filter parameters. The second one dependent on the first one.
- The first filter parameter will present different themes.
- The second filter parameter will present possible answers for the selected theme.
- When values are selected for both dropdowns, the countries that satisfy the selections will be highlighted.

###### Example

1. User selects "Asset Decleration Publication" in the first dropdown.
2. The second dropdown is enabled and presents the following options:
	- Published.
	- Partially published.
	- Not published.
3. The user select "Not published."
4. All countries that do not publish their asset declarations are highlighted on the map.


###### Considerations

Work needs to be done to determine what these filter themes and options are based on the findings in the report. Work together with the writer of the report to figure these out.

**Important:** Apparently there is a data/result grid that will be developed so maybe this needs to be looked into first before coming up with the filter options.

### Country profile
Clicking on a specic country on the map should display all the findings for all the themes for that country.


## Technical Requirement
The platform needs to be hosted on GitHub pages so it must be implemented using [Jekyll](https://jekyllrb.com/).

Free and Open Source technologies need to be used, this means using [OpenStreetMap (OSM)](https://www.openstreetmap.org/#map=4/62.99/17.64) and [Leaflet](http://leafletjs.com/) instead of Google Maps or Bing Maps.
