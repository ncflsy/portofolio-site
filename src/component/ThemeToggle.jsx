import React from 'react'

const ThemeToggle = () => {
  return (
    <div>
        {isToggleOn ? (
            <FaToggleOn
                className='ms-auto mx-4'
                size={25}
                onClick={toggleSwitch}
                color='grey'
            />
              ) : (
            <FaToggleOff
                className='ms-auto mx-4'
                size={25}
                onClick={toggleSwitch}
                color='grey'
            />
        )}
    </div>
  )
}

export default ThemeToggle