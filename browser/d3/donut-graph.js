/* global d3*/

/* -----------------    CONSTANTS     ------------------ */

export const graphSettings = {

    // SVG
    margin: {top: 20, right: 20, bottom: 20, left: 20},
    widthStart: 300,

    // Colors
    colOffWhite: '#EEE',
    colCoding: '#283593',
    colPhysical: 'orange'
};

/* -----------------    LOGIC     ------------------ */

export const graphDonut = () => {

    return {
        create: function(targetEl, props, state) {
            let data = [0, 0];
            let colProgress = '#3399FF';
            let colOffWhite = props.graphSettings.colOffWhite;

            // Decide what type of circle graph this is
            if (props.type === 'coding') {
                const codingHours = state.dayTotals.coding;
                const codingHoursPct = ((codingHours / 5) * 100);
                const codingHoursLeftPct = Math.max((100 - codingHoursPct), 0);
                data = [ codingHoursPct.toFixed(0), codingHoursLeftPct.toFixed(0) ];
                colProgress = props.graphSettings.colCoding;
            } else if (props.type === 'physical'){
                const physicalSteps = state.dayTotals.physical;
                const physicalStepsPct = (physicalSteps / 10000) * 100;
                const physicalStepsLeftPct = Math.max((100 - physicalStepsPct), 0);
                data = [ physicalStepsPct.toFixed(0), physicalStepsLeftPct.toFixed(0) ];
                colProgress = props.graphSettings.colPhysical;
            }


            const { margin, widthStart } = props.graphSettings;
            const width = widthStart - margin.left - margin.right;
            const height = width - margin.top - margin.bottom;


            const svg = d3.select(targetEl)
            .append('svg')
            .attr('width', width + margin.left + margin.right)
            .attr('height', height + margin.top + margin.bottom)
            .append('g')
            .attr('transform', 'translate(' + (( width / 2 ) + margin.left) + ',' + (( height / 2 ) + margin.top) + ')');


            const radius = Math.min(width, height) / 2;

            const colors = [colProgress, colOffWhite];

            const arc = d3.arc()
            .outerRadius(radius)
            .innerRadius(radius - 20);

            const pie = d3.pie()
            .sort(null)
            .startAngle(0 * Math.PI)
            .endAngle(2 * Math.PI)
            .value(function(dataVal) { return dataVal; });

            const group = svg.selectAll('.arc')
            .data(pie(data))
            .enter()
            .append('g')
            .attr('class', 'arc');

            group.append('text')
            .text(data[0] + '%')
            .attr('x', 0)
            .attr('y', 20)
            .attr('font-size', `${ width / 5 }px`)
            .attr('fill', 'black')
            .attr('text-anchor', 'middle');

            group.append('path')
            .style('fill', function(dataFills) { return colors[dataFills.index]; })
            .transition()
            .delay(150)
            .duration(500)
            .attrTween('d', function(dataAngle) {
                const angleFn = d3.interpolate(dataAngle.startAngle, dataAngle.endAngle);
                return function(endAngle) {
                    dataAngle.endAngle = angleFn(endAngle);
                    return arc(dataAngle);
                };
            });

            return {
                svg
            };
        }

    };

};
