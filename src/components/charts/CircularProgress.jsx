// components/charts/CircularProgress.js
import React from 'react'
import PropTypes from 'prop-types'

const CircularProgress = ({ title, percentage }) => {
  const strokeWidth = 8
  const radius = 40
  const viewBoxSize = 100

  // Calculate the circumference of the circle
  const circumference = 2 * Math.PI * radius

  // Calculate the dash offset based on the percentage
  const dashOffset = circumference - (percentage / 100) * circumference

  return (
    <div className="text-center">
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <svg
        className="mx-auto"
        width={viewBoxSize}
        height={viewBoxSize}
        viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      >
        <circle
          className="stroke-current text-blue-100"
          strokeWidth={strokeWidth}
          fill="transparent"
          r={radius}
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
        />
        <circle
          className="stroke-current text-black-500"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          fill="transparent"
          r={radius}
          cx={viewBoxSize / 2}
          cy={viewBoxSize / 2}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
          }}
        />
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="text-1xl font-bold text-gray-300"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  )
}

CircularProgress.propTypes = {
  title: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
}

export default CircularProgress
