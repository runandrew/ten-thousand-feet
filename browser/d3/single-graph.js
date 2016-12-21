/* global d3*/

/* -----------------    CONSTANTS     ------------------ */
export const graphSettings = {

    // SVG
    svgWidth: 900,
    svgHeight: 250,
    padding: 30,

    // Colors
    codeDark: '#e65100',
    codeLight: '#ffb74d'
};

/* -----------------    LOGIC     ------------------ */

export const d3SingleGraph = () => {

    return {

        create: function (element, props, state) {

            // SVG Parameters
            const svgWidth = props.graphSettings.svgWidth;
            const svgHeight = props.graphSettings.svgHeight;
            const padding = props.graphSettings.padding;

            // Create SVG
            const svg = d3.select(element)
            .append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

            // Create Scales
            const _scales = this._scales({
                graphSettings: props.graphSettings,
            }, state);

            // Create Axes
            const _axes = this._createAxes({ _scales });
            const { xAxis, yAxis } = _axes;

            // Append Axes
            svg.append('g')
            .attr('class', 'x axis')
            .attr('transform', `translate(0, ${svgHeight - padding})`)
            .call(xAxis);

            svg.append('g')
            .attr('class', 'y axis')
            .attr('transform', `translate(${padding}, 0)`)
            .call(yAxis);

            // Send back the SVG
            return {
                svg,
                _scales,
                _axes
            };
        },

        _scales: function (props, state) {

            // Destructure the day string
            const [year, month, day] = state.durationData.start.split('T')[0].split('-').map(str => +str);

            // SVG Parameters
            const svgWidth = props.graphSettings.svgWidth;
            const svgHeight = props.graphSettings.svgHeight;
            const padding = props.graphSettings.padding;

            // Scaling
            const xScale = d3.scaleTime()
            .domain([new Date(year, month - 1, day, 6), new Date(year, month - 1, day, 24)])
            .range([0 + padding, svgWidth - padding * 2]);

            const yScale = d3.scaleLinear()
            .domain([0, 5])
            .range([svgHeight - padding, 0 + padding]);

            return { xScale, yScale };
        },

        _createAxes: function (props) {

            const xScale = props._scales.xScale;
            const yScale = props._scales.yScale;

            // Axis creation
            const xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(d3.timeHour.every(1));

            const yAxis = d3.axisLeft()
            .scale(yScale)
            .ticks(5);

            return { xAxis, yAxis };
        },

        update: function (svg, props, state) {
            // SVG Parameters
            const svgHeight = props.graphSettings.svgHeight;
            const padding = props.graphSettings.padding;

            // Create Scales
            const _scales = this._scales({
                graphSettings: props.graphSettings,
            }, state);
            const { xScale, yScale } = _scales;

            // Create Axes
            const { xAxis, yAxis } = this._createAxes({ _scales });

            // Update Axes
            svg.select('.x.axis')
            .call(xAxis);

            svg.select('.y.axis')
            .call(yAxis);

            // Colors
            const codeDark = props.graphSettings.codeDark;
            const codeLight = props.graphSettings.codeLight;

            // Data
            const activity = state.durationData.data;

            svg.append('g')
            .attr('id', 'bars')
            .selectAll('rect')
            .data(activity)
            .enter()
            .append('rect')
            .attr('x', data => xScale(convertSToDate(data.time)))
            .attr('y', () => yScale(5))
            .attr('width', data => xScale(convertSToDate(data.time + data.duration)) - xScale(convertSToDate(data.time)))
            .attr('height', () => svgHeight - yScale(5) - padding)
            .attr('fill', codeDark)
            .on('mouseover', function(data) {

                d3.select(this)
                .transition()
                .duration(250)
                .attr('fill', codeLight);

                //Get this bar's x/y values, then augment for the tooltip
                const xPosition = parseFloat(d3.select(this).attr('x'));
                const yPosition = parseFloat(d3.select(this).attr('y'));

                //Update the tooltip position and value
                d3.select(`#tooltip-${props.dayIndex}`)
                .style('left', xPosition + 125 + 'px')
                .style('top', yPosition + 50 + 'px')
                .select(`#tooltip-${props.dayIndex} .value`)
                .text(data.project);

                d3.select(`#tooltip-${props.dayIndex} .duration`)
                .text(Math.round(data.duration / 60));

                //Show the tooltip
                d3.select(`#tooltip-${props.dayIndex}`).classed('hidden', false);

            })
            .on('mouseout', function() {
                d3.select(this)
                .transition()
                .duration(250)
                .attr('fill', codeDark);

                d3.select(`#tooltip-${props.dayIndex}`).classed('hidden', true);
            });

            function convertSToDate(timeS) {
                return new Date(timeS * 1000);
            }
        }

    };
};
