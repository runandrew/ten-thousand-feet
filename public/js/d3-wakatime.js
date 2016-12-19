/* global d3 */

const durationData = {
  'branches': [
    'master'
  ],
  'data': [
    {
      'dependencies': [],
      'duration': 249,
      'is_debugging': false,
      'project': 'CodeWars',
      'time': 1481376510.96
    },
    {
      'dependencies': [],
      'duration': 0.09,
      'is_debugging': false,
      'project': 'redux-practice-todo',
      'time': 1481384387.98
    },
    {
      'dependencies': [],
      'duration': 4652,
      'is_debugging': false,
      'project': 'redux-practice-todo',
      'time': 1481385365.49
    },
    {
      'dependencies': [],
      'duration': 131.56,
      'is_debugging': false,
      'project': 'juke-react-redux-with-andrew',
      'time': 1481390017.23
    },
    {
      'dependencies': [],
      'duration': 324,
      'is_debugging': false,
      'project': 'redux-practice-todo',
      'time': 1481390148.79
    },
    {
      'dependencies': [],
      'duration': 4.21,
      'is_debugging': false,
      'project': 'juke-react-redux-with-andrew',
      'time': 1481390473.16
    },
    {
      'dependencies': [],
      'duration': 1754,
      'is_debugging': false,
      'project': 'redux-practice-todo',
      'time': 1481390477.37
    },
    {
      'dependencies': [],
      'duration': 828,
      'is_debugging': false,
      'project': 'redux-practice-todo',
      'time': 1481393881.72
    },
    {
      'dependencies': [],
      'duration': 2998,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481394710.04
    },
    {
      'dependencies': [],
      'duration': 308.53,
      'is_debugging': false,
      'project': 'juke-react-redux-with-andrew',
      'time': 1481397708.03
    },
    {
      'dependencies': [],
      'duration': 151,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481398016.56
    },
    {
      'dependencies': [],
      'duration': 7.8,
      'is_debugging': false,
      'project': 'Unknown Project',
      'time': 1481398167.87
    },
    {
      'dependencies': [],
      'duration': 6.51,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481398175.67
    },
    {
      'dependencies': [],
      'duration': 26,
      'is_debugging': false,
      'project': 'Unknown Project',
      'time': 1481398182.18
    },
    {
      'dependencies': [],
      'duration': 411,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481398208.49
    },
    {
      'dependencies': [],
      'duration': 12,
      'is_debugging': false,
      'project': 'Unknown Project',
      'time': 1481398619.73
    },
    {
      'dependencies': [],
      'duration': 1223,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481398632.16
    },
    {
      'dependencies': [],
      'duration': 137,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481399855.3
    },
    {
      'dependencies': [],
      'duration': 49,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481399992.5
    },
    {
      'dependencies': [
        'chai-spies',
        'react-redux',
        'nodemon',
        'commander',
        'request-promise',
        'babel-loader',
        'react-dom',
        'pg-hstore',
        'axios',
        'pg-native',
        'babel',
        'redux-logger',
        'itunes-library-stream',
        'webpack',
        'pg',
        'babel-preset-react',
        'babel-core',
        'serve-favicon',
        'npm',
        'chai',
        'redux-thunk',
        'express',
        'babel-preset-es2015',
        'react',
        'fs-misc',
        'mime',
        'musicmetadata',
        'testem',
        'mocha',
        'sequelize',
        'xml2json',
        'lodash',
        'userhome',
        'bootstrap',
        'request',
        'volleyball',
        'body-parser',
        'chalk',
        'react-router',
        'redux',
        'node-status'
      ],
      'duration': 51.23,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481400041.77
    },
    {
      'dependencies': [
        'npm',
        'isomorphic-fetch',
        'redux-logger',
        'redux-thunk',
        'react-redux',
        'nodemon',
        'babel-preset-es2015',
        'react-dom',
        'react',
        'webpack',
        'babel-loader',
        'babel-preset-react',
        'babel-core',
        'redux'
      ],
      'duration': 32.98,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481400093
    },
    {
      'dependencies': [
        'chai-spies',
        'react-redux',
        'nodemon',
        'commander',
        'request-promise',
        'babel-loader',
        'react-dom',
        'pg-hstore',
        'axios',
        'pg-native',
        'babel',
        'redux-logger',
        'itunes-library-stream',
        'webpack',
        'pg',
        'babel-preset-react',
        'babel-core',
        'serve-favicon',
        'npm',
        'chai',
        'redux-thunk',
        'express',
        'babel-preset-es2015',
        'react',
        'fs-misc',
        'mime',
        'musicmetadata',
        'testem',
        'mocha',
        'sequelize',
        'xml2json',
        'lodash',
        'userhome',
        'bootstrap',
        'request',
        'volleyball',
        'body-parser',
        'chalk',
        'react-router',
        'redux',
        'node-status'
      ],
      'duration': 7.87,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481400125.98
    },
    {
      'dependencies': [
        'npm',
        'babel-preset-stage-0',
        'babel-preset-latest',
        'react-redux',
        'babel-cli',
        'nodemon',
        'babel-preset-es2015',
        'react-dom',
        'react',
        'babel-loader',
        'babel-preset-react',
        'babel-core',
        'redux'
      ],
      'duration': 10.79,
      'is_debugging': false,
      'project': 'redux-practice-todo',
      'time': 1481400133.85
    },
    {
      'dependencies': [
        'npm',
        'isomorphic-fetch',
        'redux-logger',
        'redux-thunk',
        'react-redux',
        'nodemon',
        'babel-preset-es2015',
        'react-dom',
        'react',
        'webpack',
        'babel-loader',
        'babel-preset-react',
        'babel-core',
        'redux'
      ],
      'duration': 790,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481400144.64
    },
    {
      'dependencies': [],
      'duration': 5.24,
      'is_debugging': false,
      'project': 'redux-practice-todo',
      'time': 1481400934.53
    },
    {
      'dependencies': [],
      'duration': 115,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481400939.77
    },
    {
      'dependencies': [
        'chai-spies',
        'react-redux',
        'nodemon',
        'commander',
        'request-promise',
        'babel-loader',
        'react-dom',
        'pg-hstore',
        'axios',
        'pg-native',
        'babel',
        'redux-logger',
        'itunes-library-stream',
        'webpack',
        'pg',
        'babel-preset-react',
        'babel-core',
        'serve-favicon',
        'npm',
        'chai',
        'redux-thunk',
        'express',
        'babel-preset-es2015',
        'react',
        'fs-misc',
        'mime',
        'musicmetadata',
        'testem',
        'mocha',
        'sequelize',
        'xml2json',
        'lodash',
        'userhome',
        'bootstrap',
        'request',
        'volleyball',
        'body-parser',
        'chalk',
        'react-router',
        'redux',
        'node-status'
      ],
      'duration': 34.1,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481401054.29
    },
    {
      'dependencies': [],
      'duration': 1012,
      'is_debugging': false,
      'project': 'redux-practice-redditAPI',
      'time': 1481401088.39
    },
    {
      'dependencies': [],
      'duration': 2625,
      'is_debugging': false,
      'project': 'start',
      'time': 1481405409.08
    },
    {
      'dependencies': [],
      'duration': 417,
      'is_debugging': false,
      'project': 'start',
      'time': 1481410076.9
    },
    {
      'dependencies': [],
      'duration': 8.22,
      'is_debugging': false,
      'project': 'Unknown Project',
      'time': 1481410493.89
    },
    {
      'dependencies': [],
      'duration': 654,
      'is_debugging': false,
      'project': 'start',
      'time': 1481410502.11
    },
    {
      'dependencies': [],
      'duration': 12.44,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481411156.35
    },
    {
      'dependencies': [],
      'duration': 143,
      'is_debugging': false,
      'project': 'start',
      'time': 1481411168.79
    },
    {
      'dependencies': [],
      'duration': 18.15,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481411312.27
    },
    {
      'dependencies': [],
      'duration': 490,
      'is_debugging': false,
      'project': 'start',
      'time': 1481411330.42
    },
    {
      'dependencies': [],
      'duration': 31,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481411820.64
    },
    {
      'dependencies': [],
      'duration': 8,
      'is_debugging': false,
      'project': 'start',
      'time': 1481411851.34
    },
    {
      'dependencies': [],
      'duration': 3.32,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481411859.34
    },
    {
      'dependencies': [],
      'duration': 5.7,
      'is_debugging': false,
      'project': 'start',
      'time': 1481411862.66
    },
    {
      'dependencies': [],
      'duration': 25.84,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481411868.36
    },
    {
      'dependencies': [],
      'duration': 325,
      'is_debugging': false,
      'project': 'start',
      'time': 1481411894.2
    },
    {
      'dependencies': [],
      'duration': 1.4,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481412219.65
    },
    {
      'dependencies': [],
      'duration': 448,
      'is_debugging': false,
      'project': 'start',
      'time': 1481412221.05
    },
    {
      'dependencies': [],
      'duration': 23.8,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481412669.05
    },
    {
      'dependencies': [],
      'duration': 288,
      'is_debugging': false,
      'project': 'start',
      'time': 1481412692.85
    },
    {
      'dependencies': [],
      'duration': 11.41,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481412980.64
    },
    {
      'dependencies': [],
      'duration': 737,
      'is_debugging': false,
      'project': 'start',
      'time': 1481412992.05
    },
    {
      'dependencies': [],
      'duration': 0.83,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481413729.09
    },
    {
      'dependencies': [],
      'duration': 150,
      'is_debugging': false,
      'project': 'start',
      'time': 1481413729.92
    },
    {
      'dependencies': [],
      'duration': 1332,
      'is_debugging': false,
      'project': 'start',
      'time': 1481416543.12
    },
    {
      'dependencies': [],
      'duration': 1248,
      'is_debugging': false,
      'project': 'start',
      'time': 1481421214.04
    },
    {
      'dependencies': [],
      'duration': 28.85,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481422461.64
    },
    {
      'dependencies': [],
      'duration': 120,
      'is_debugging': false,
      'project': 'checkpoint-express-review',
      'time': 1481422490.49
    },
    {
      'dependencies': [],
      'duration': 761,
      'is_debugging': false,
      'project': '1610-FSA-RM-Library',
      'time': 1481422610.86
    }
  ],
  'end': '2016-12-11T04:59:59Z',
  'start': '2016-12-10T05:00:00Z',
  'timezone': 'America/New_York'
};

const activity = durationData.data;

// SVG Parameters
const svgWidth = 900;
const svgHeight = 400;
const padding = 30;

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
.domain([0, 10])
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
.attr('fill', 'darkblue')
.on('mouseover', function(data) {

    d3.select(this)
    .transition()
    .duration(250)
    .attr('fill', 'lightblue');

    //Get this bar's x/y values, then augment for the tooltip
    const xPosition = parseFloat(d3.select(this).attr('x'));
    const yPosition = parseFloat(d3.select(this).attr('y'));

    //Update the tooltip position and value
    d3.select('#tooltip')
    .style('left', xPosition + 'px')
    .style('top', yPosition + 'px')
    .select('#value')
    .text(data.project)

    d3.select('#duration')
    .text(Math.round(data.duration / 60));

    //Show the tooltip
    d3.select('#tooltip').classed('hidden', false);

})
.on('mouseout', function(data) {
    d3.select(this)
    .transition()
    .duration(250)
    .attr('fill', 'darkblue');

    d3.select('#tooltip').classed('hidden', true);
});

function convertSToDate(timeS) {
    return new Date(timeS * 1000);
}

function calcTotalCodingHours(data) {
    return data.reduce((prev, curr) => prev + curr.duration, 0) / 60 / 60;
}

console.log(calcTotalCodingHours(activity));
