import * as d3 from "d3";
export const bulletChart = {};

(() => {	

	bulletChart.prepData = () => {
		
		const scoreRanges = [42, 126, 168]; // do not edit
		const userScores = calcScores();

		const bulletsJSON = [
			{
				"ranges": scoreRanges,
				"measures":[
					userScores.currentScore,
					userScores.targetScore
				]
			}
		];

		bulletChart.bulletsJSON = bulletsJSON;
		
		// TODO make this function return the user's current
		// total score and target total score
		function calcScores() {

			var output;

			// TODO use real data here instead of fake data
			// currentScore: Should be equal to the sum of
			// the user's current indicator scores

			// targetScore: Should be equal to the sum of
			// the user's target indicator scores (the scores)
			// the user is stepping up to

			output = {currentScore: 92, targetScore: 132}
			return output;
		}
	}

	bulletChart.prepData();

	/*
	 *	Initialize the bullet chart showing score progress
	 */
	bulletChart.initBulletChart = (selector) => {

		var margin = {top: 35, right: 40, bottom: 20, left: 0},
	    width = 960 - margin.left - margin.right,
	    height = 90 - margin.top - margin.bottom;

		var chart = d3.bullet()
		    .width(width)
		    .height(height);

		  const data = bulletChart.bulletsJSON;
		  var svg = d3.select(selector)
		      .data(data)
			      .attr("class", "bullet")
			      .attr("width", width + margin.left + margin.right)
			      .attr("height", height + margin.top + margin.bottom)
			      .style('font','10px sans-serif')
			    .append("g")
			      .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
			      .call(chart);

		  var title = svg.append("g")
		      .style("text-anchor", "end")
		      .attr("transform", "translate(-6," + height / 2 + ")");

		  d3.selectAll("button").on("click", function() {
		    svg.datum(randomize).call(chart.duration(1000)); // TODO automatic transition
		  });

		function randomize(d) {
		  if (!d.randomizer) d.randomizer = randomizer(d);
		  d.ranges = d.ranges.map(d.randomizer);
		  d.markers = d.markers.map(d.randomizer);
		  d.measures = d.measures.map(d.randomizer);
		  return d;
		}

		function randomizer(d) {
		  var k = d3.max(d.ranges) * .2;
		  return function(d) {
		    return Math.max(0, d + k * (Math.random() - .5));
		  };
		}
	};

	d3.bullet = function() {
	  var orient = "left", // TODO top & bottom
	      reverse = false,
	      duration = 0,
	      ranges = bulletRanges,
	      markers = bulletMarkers,
	      measures = bulletMeasures,
	      width = 380,
	      height = 30,
	      tickFormat = null;

	  // For each small multiple…
	  function bullet(g) {
	    g.each(function(d, i) {
	      var rangez = ranges.call(this, d, i).slice().sort(d3.descending),
	          markerz = measures.call(this, d, i).slice().sort(d3.descending),
	          measurez = measures.call(this, d, i).slice().sort(d3.descending),
	          g = d3.select(this);

	      // Compute the new x-scale.
	      var x1 = d3.scaleLinear()
	          .domain([0, Math.max(rangez[0], markerz[0], measurez[0])])
	          .range(reverse ? [width, 0] : [0, width]);

	      // Retrieve the old x-scale, if this is an update.
	      var x0 = this.__chart__ || d3.scaleLinear()
	          .domain([0, Infinity])
	          .range(x1.range());

	      // Stash the new scale.
	      this.__chart__ = x1;

	      // Derive width-scales from the x-scales.
	      var w0 = bulletWidth(x0),
	          w1 = bulletWidth(x1);

	      // Update the range rects.
	      var range = g.selectAll("rect.range")
	          .data(rangez);

	      range.enter().append("rect")
	          .attr("class", function(d, i) { return "range s" + i; })
	          .attr("width", w1)
	          .attr("height", height)
	          .attr("x", reverse ? x0 : 0)
	          .style("fill", function(d, i) { 
	          	switch(i) {
	          		case 0:
	          			return '#156C37'; // grn
	          			break;
	          		case 1:
	          			return '#F7EC13'; // yel
	          			break;
	          		case 2:
	          			return '#C82127'; // red
	          			break;
	          		default:
	          			return '#fff';
	          	}
	          });

	      range.transition()
	          .duration(duration)
	          .attr("x", reverse ? x1 : 0)
	          .attr("width", w1)
	          .attr("height", height);

	      // Update the measure rects.
	      var measure = g.selectAll("rect.measure")
	          .data(measurez);

	      measurez.sort();

	        g.append("rect")
      		.attr("class", "target-score-hash")
	        .attr("width", w1(measurez[0]))
	        .attr("height", height / 3)
	        .attr("x", reverse ? x0 : 0)
	        .attr("y", height / 3)
	        .attr("fill", function(d, i) {
	        	return i === 0 ? "url(#diagonalHatch)" : "none";
	        });

	      g.append("rect")
      		.attr("class", 'orig-score')
	        .attr("width", w1(measurez[1]))
	        .attr("height", height / 3)
	        .attr("x", reverse ? x0 : 0)
	        .attr("y", height / 3)
	        .style("fill", 'steelblue');

	      // Update the marker lines.
	      var marker = g.selectAll("line.marker")
	          .data(markerz);

	      marker.enter().append("line")
	          .attr("class", "marker")
	          .attr("x1", x0)
	          .attr("x2", x0)
	          .attr("y1", height / 6)
	          .attr("y2", height * 5 / 6)
	          .style('stroke','#000')
	          .style('stroke-width','6px')
	        .transition()
	          .duration(duration)
	          .attr("x1", x1)
	          .attr("x2", x1);

	      marker.enter().append("line")
	          .attr("class", "marker")
	          .attr("x1", x0)
	          .attr("x2", x0)
	          .attr("y1", -13)
	          .attr("y2", height/6)
	          .style('stroke','#000')
	          .style('stroke-width','2px')
	          .style('stroke-dasharray','2, 2')
	        .transition()
	          .duration(duration)
	          .attr("x1", x1)
	          .attr("x2", x1);

	        var markerLabel = g.selectAll("text.marker-label")
	        	.data(markerz);

	        markerLabel.enter().append('text')
	        	.attr("class", "marker-label")
	        	.attr("x", x1)
	            .attr("y", -15)
	            .text(function(d, i) {
	            	return i === 1 ? 'Current level' : 'Target level';
	            })
	            .style('font-family','Helvetica, Arial, sans-serif')
	            .style('text-anchor','middle')
	            .style('font-size','2em');

	    });
	    d3.timerFlush();
	  }

	  // left, right, top, bottom
	  bullet.orient = function(x) {
	    if (!arguments.length) return orient;
	    orient = x;
	    reverse = orient == "right" || orient == "bottom";
	    return bullet;
	  };

	  // ranges (bad, satisfactory, good)
	  bullet.ranges = function(x) {
	    if (!arguments.length) return ranges;
	    ranges = x;
	    return bullet;
	  };

	  // markers (previous, goal)
	  bullet.markers = function(x) {
	    if (!arguments.length) return measures;
	    measures = x;
	    return bullet;
	  };

	  // measures (actual, forecast)
	  bullet.measures = function(x) {
	    if (!arguments.length) return measures;
	    measures = x;
	    return bullet;
	  };

	  bullet.width = function(x) {
	    if (!arguments.length) return width;
	    width = x;
	    return bullet;
	  };

	  bullet.height = function(x) {
	    if (!arguments.length) return height;
	    height = x;
	    return bullet;
	  };

	  bullet.tickFormat = function(x) {
	    if (!arguments.length) return tickFormat;
	    tickFormat = x;
	    return bullet;
	  };

	  bullet.duration = function(x) {
	    if (!arguments.length) return duration;
	    duration = x;
	    return bullet;
	  };

	  return bullet;
	};

	function bulletRanges(d) {
	  return d.ranges;
	}

	function bulletMarkers(d) {
	  return d.markers;
	}

	function bulletMeasures(d) {
	  return d.measures;
	}

	function bulletTranslate(x) {
	  return function(d) {
	    return "translate(" + x(d) + ",0)";
	  };
	}

	function bulletWidth(x) {
	  var x0 = x(0);
	  return function(d) {
	    return Math.abs(x(d) - x0);
	  };
	}

/*
 *	Initialize the bar chart showing cost breakdowns
 */
bulletChart.initBarChart = (selector) => {
	var n = 4, // The number of series.
    m = 58; // The number of values per series.

	// The xz array has m elements, representing the x-values shared by all series.
	// The yz array has n elements, representing the y-values of each of the n series.
	// Each yz[i] is an array of m non-negative numbers representing a y-value for xz[i].
	// The y01z array has the same structure as yz, but with stacked [y₀, y₁] instead of y.
	var xz = d3.range(m);
	    var yz = d3.range(n).map(function() { return bumps(m); });
	    var y01z = d3.stack().keys(d3.range(n))(d3.transpose(yz));
	    var yMax = d3.max(yz, function(y) { return d3.max(y); });
	    var y1Max = d3.max(y01z, function(y) { return d3.max(y, function(d) { return d[1]; }); });

	var svg = d3.select(selector),
	    margin = {top: 40, right: 10, bottom: 20, left: 10},
	    width = +svg.attr("width") - margin.left - margin.right,
	    height = +svg.attr("height") - margin.top - margin.bottom,
	    g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");

	var x = d3.scaleBand()
	    .domain(xz)
	    .rangeRound([0, width])
	    .padding(0.08);

	var y = d3.scaleLinear()
	    .domain([0, y1Max])
	    .range([height, 0]);

	var color = d3.scaleOrdinal()
	    .domain(d3.range(n))
	    .range(d3.schemeCategory20c);

	var series = g.selectAll(".series")
	  .data(y01z)
	  .enter().append("g")
	    .attr("fill", function(d, i) { return color(i); });

	var rect = series.selectAll("rect")
	  .data(function(d) { return d; })
	  .enter().append("rect")
	    .attr("x", function(d, i) { return x(i); })
	    .attr("y", height)
	    .attr("width", x.bandwidth())
	    .attr("height", 0);

	rect.transition()
	    .delay(function(d, i) { return i * 10; })
	    .attr("y", function(d) { return y(d[1]); })
	    .attr("height", function(d) { return y(d[0]) - y(d[1]); });

	g.append("g")
	    .attr("class", "axis axis--x")
	    .attr("transform", "translate(0," + height + ")")
	    .call(d3.axisBottom(x)
	        .tickSize(0)
	        .tickPadding(6));

	d3.selectAll("input")
	    .on("change", changed);

	var timeout = d3.timeout(function() {
	  d3.select("input[value=\"grouped\"]")
	      .property("checked", true)
	      .dispatch("change");
	}, 2000);

	function changed() {
	  timeout.stop();
	  if (this.value === "grouped") transitionGrouped();
	  else transitionStacked();
	}

	function transitionGrouped() {
	  y.domain([0, yMax]);

	  rect.transition()
	      .duration(500)
	      .delay(function(d, i) { return i * 10; })
	      .attr("x", function(d, i) { return x(i) + x.bandwidth() / n * this.parentNode.__data__.key; })
	      .attr("width", x.bandwidth() / n)
	    .transition()
	      .attr("y", function(d) { return y(d[1] - d[0]); })
	      .attr("height", function(d) { return y(0) - y(d[1] - d[0]); });
	}

	function transitionStacked() {
	  y.domain([0, y1Max]);

	  rect.transition()
	      .duration(500)
	      .delay(function(d, i) { return i * 10; })
	      .attr("y", function(d) { return y(d[1]); })
	      .attr("height", function(d) { return y(d[0]) - y(d[1]); })
	    .transition()
	      .attr("x", function(d, i) { return x(i); })
	      .attr("width", x.bandwidth());
	}

	// Returns an array of m psuedorandom, smoothly-varying non-negative numbers.
	// Inspired by Lee Byron’s test data generator.
	// http://leebyron.com/streamgraph/
	function bumps(m) {
	  var values = [], i, j, w, x, y, z;

	  // Initialize with uniform random values in [0.1, 0.2).
	  for (i = 0; i < m; ++i) {
	    values[i] = 0.1 + 0.1 * Math.random();
	  }

	  // Add five random bumps.
	  for (j = 0; j < 5; ++j) {
	    x = 1 / (0.1 + Math.random());
	    y = 2 * Math.random() - 0.5;
	    z = 10 / (0.1 + Math.random());
	    for (i = 0; i < m; i++) {
	      w = (i / m - y) * z;
	      values[i] += x * Math.exp(-w * w);
	    }
	  }

	  // Ensure all values are positive.
	  for (i = 0; i < m; ++i) {
	    values[i] = Math.max(0, values[i]);
	  }

	  return values;
	}
}

})();