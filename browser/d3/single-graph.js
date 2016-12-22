/* global d3*/

/* -----------------    CONSTANTS     ------------------ */
export const graphSettings = {

    // SVG
    svgWidth: 900,
    svgHeight: 250,
    padding: 30,

    // Colors
    codeDark: '#283593',
    codeLight: '#5c6bc0'
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
            .attr('transform', `translate(${svgWidth - padding * 2}, 0)`)
            .call(yAxis);

            svg.append('clipPath')                  //Make a new clipPath
            .attr('id', 'chart-area')           //Assign an ID
            .append('rect')                     //Within the clipPath, create a new rect
            .attr('x', padding)                 //Set rect's position and size…
            .attr('y', padding)
            .attr('width', svgWidth - padding * 3)
            .attr('height', svgHeight - padding * 2);

            // Send back the SVG
            return {
                svg,
                _scales,
                _axes
            };
        },

        _scales: function (props, state) {

            // Destructure the day string
            //const [year, month, day] = state.durationData.start.split('T')[0].split('-').map(str => +str);
            let date = state.dayDataSingle.date;

            // SVG Parameters
            const svgWidth = props.graphSettings.svgWidth;
            const svgHeight = props.graphSettings.svgHeight;
            const padding = props.graphSettings.padding;

            // Scaling
            const xScale = d3.scaleTime()
            .domain([(new Date(date)).setHours(6, 0, 0, 0), (new Date(date)).setHours(24, 0, 0, 0)])
            .range([0 + padding, svgWidth - padding * 2]);

            const yScale = d3.scaleLinear()
            .domain([0, 5])
            .range([svgHeight - padding, 0 + padding]);

            const yScaleSteps = d3.scaleLinear()
            .domain([0, 10000])
            .range([svgHeight - padding, 0 + padding]);

            return { xScale, yScale, yScaleSteps };
        },

        _createAxes: function (props) {

            const xScale = props._scales.xScale;
            const yScale = props._scales.yScale;
            const yScaleSteps = props._scales.yScaleSteps;

            // Axis creation
            const xAxis = d3.axisBottom()
            .scale(xScale)
            .ticks(d3.timeHour.every(1));

            const yAxis = d3.axisRight()
            .scale(yScaleSteps);

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
            const { xScale, yScale, yScaleSteps } = _scales;

            // Create Axes
            const { xAxis, yAxis } = this._createAxes({ _scales });

            // Update Axes
            svg.select('.x.axis')
            .call(xAxis);

            svg.select('.y.axis')
            .call(yAxis)
            .append('text')
            .attr('fill', '#000')
            .attr('transform', 'translate(-20, 35) rotate(-90)')
            .attr('y', 6)
            .attr('dy', '0.71em')
            .style('text-anchor', 'end')
            .text('Steps [1 step]');

            // Colors
            const codeDark = props.graphSettings.codeDark;
            const codeLight = props.graphSettings.codeLight;

            // Data
            const codingActivity = state.dayDataSingle.codingData.hourlyTotals;
            const physicalActivity = state.dayDataSingle.physicalData.hourlyTotals;

            // Create line
            const line = d3.line()
            .x(data => xScale(Date.parse(data.date)))
            .y(data => yScaleSteps(data.totalSteps))
            .curve(d3.curveCatmullRom.alpha(0.5));

            // Create area under line`
            const area = d3.area()
            .x(data => xScale(Date.parse(data.date)))
            .y0(svgHeight - padding)
            .y1(data => yScaleSteps(data.totalSteps))
            .curve(d3.curveCatmullRom.alpha(0.5));

            svg.append('g')
            .attr('id', 'bars')
            .selectAll('rect')
            .data(codingActivity)
            .enter()
            .append('rect')
            .attr('x', data => xScale(data.time))
            .attr('y', () => yScale(5))
            .attr('width', data => {
                return xScale(Date.parse(data.time) + data.duration * 1000) - xScale(Date.parse(data.time));
            })
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

            svg.append('path')
            .datum(physicalActivity)
            .attr('class', 'line')
            .attr('d', line)
            .attr('clip-path', 'url(#chart-area)');

            svg.append('path')
            .datum(physicalActivity)
            .attr('class', 'area')
            .attr('d', area)
            .attr('clip-path', 'url(#chart-area)');

        }

    };
};
