/* global d3 */

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';


/* -----------------    COMPONENT     ------------------ */

class SingleGraph extends React.Component {

    componentDidMount() {
        const activity = this.props.codeData.durationData.data;
        // SVG Parameters
        const svgWidth = 900;
        const svgHeight = 250;
        const padding = 30;

        // Colors
        const codeDark = '#e65100';
        const codeLight = '#ffb74d';

        // Create SVG
        const svg = d3.select('#mainSet')
        .append('svg')
        .attr('width', svgWidth)
        .attr('height', svgHeight);

        // Scaling
        const xScale = d3.scaleTime()
        .domain([new Date(2016, 11, 10, 6), new Date(2016, 11, 10, 24)])
        .range([0 + padding, svgWidth - padding * 2]);

        const yScale = d3.scaleLinear()
        .domain([0, 5])
        .range([svgHeight - padding, 0 + padding]);

        const xAxis = d3.axisBottom()
        .scale(xScale)
        .ticks(d3.timeHour.every(1));

        const yAxis = d3.axisLeft()
        .scale(yScale)
        .ticks(5);

        svg.append('g')
        .attr('class', 'x axis')
        .attr('transform', `translate(0, ${svgHeight - padding})`)
        .call(xAxis);

        svg.append('g')
        .attr('class', 'y axis')
        .attr('transform', `translate(${padding}, 0)`)
        .call(yAxis);

        svg.append('g')
        .attr('id', 'bars')
        .selectAll('rect')
        .data(activity)
        .enter()
        .append('rect')
        .attr('x', data => xScale(convertSToDate(data.time)))
        .attr('y', data => yScale(5))
        .attr('width', data => xScale(convertSToDate(data.time + data.duration)) - xScale(convertSToDate(data.time)))
        .attr('height', data => svgHeight - yScale(5) - padding)
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
            d3.select('#tooltip')
            .style('left', xPosition + 125 + 'px')
            .style('top', yPosition + 50 + 'px')
            .select('#value')
            .text(data.project);

            d3.select('#duration')
            .text(Math.round(data.duration / 60));

            //Show the tooltip
            d3.select('#tooltip').classed('hidden', false);

        })
        .on('mouseout', function(data) {
            d3.select(this)
            .transition()
            .duration(250)
            .attr('fill', codeDark);

            d3.select('#tooltip').classed('hidden', true);
        });

        function convertSToDate(timeS) {
            return new Date(timeS * 1000);
        }

    }

    render() {
        console.log('these are the props', this.props);

        return (
            <div className="section no-pad-bot" id="graph">
                <div className="container">
                    <div className="row center">
                        <div className="card grey lighten-5">
                            <div className="card-content" id="mainSet">
                                <span className="card-title">Todays Activity - 12/10/16</span>
                            </div>
                            <div className="card-action">
                                <a href="#">Details</a>
                                <a href="#">Share</a>
                            </div>
                        </div>
                        <div id="tooltip" className="hidden">
                            <p><strong>Project: </strong><span id="value">100</span></p>
                            <p><strong>Duration: </strong><span id="duration">100</span> mins</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = (state) => {
    return {
        codeData: state.codeData
    };
};
const mapDispatch = null;

export default connect(mapProps, mapDispatch)(SingleGraph);
